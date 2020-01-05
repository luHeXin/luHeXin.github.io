---
title: 'Spring Data JPA  分页工具————Pageable与Page '
date: 2020-01-05 21:38:27
tags:
- SpringBoot
- 分页
---
# 预先导入的包：
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

# Pageable：
## 概述：
``` java
Page<OrderMaster> findByBuyerOpenid(String buyerOpenid, Pageable pageable);
```
`Pageable`是Spring Data库中定义的一个接口，用于构造翻页查询，是所有分页相关信息的一个抽象，通过该接口，我们可以得到和分页相关所有信息（例如pageNumber、pageSize等），这样，Jpa就能够通过pageable参数来得到一个带分页信息的Sql语句。
`PageRequest`是`Pageable`的实现。
## 接口：
``` java
public interface Pageable {

    int getPageNumber();//返回要返回的页面

    int getPageSize();//返回要返回的项目的数量

    long getOffset();//根据底层页面和页面大小返回偏移量

    Sort getSort();//返回排序参数

    Pageable next();

    Pageable previousOrFirst();

    Pageable first();

    boolean hasPrevious();
}
```

# Page：
## 概述：
``` java
Page<OrderMaster> result=repository.findByBuyerOpenid(OPENID,request);
```
用于储存查询的结果集。

## 接口：
``` java

public interface Page<T> extends Iterable<T> {
 
    int getNumber();			//当前第几页   返回当前页的数目。总是非负的
 
    int getSize();				//返回当前页面的大小
 
    int getTotalPages();         //返回分页总数
 
    int getNumberOfElements();   //返回当前页上的元素数
 
    long getTotalElements();    //返回元素总数
 
    boolean hasPreviousPage();  //返回如果有上一页
 
    boolean isFirstPage();      //返回当前页是否为第一页
 
    boolean hasNextPage();      //返回如果有下一页
 
    boolean isLastPage();       //返回当前页是否为最后一页
 
    Iterator<T> iterator();
 
    List<T> getContent();     //将所有数据返回为List
 
    boolean hasContent();     //返回数据是否有内容
 
    Sort getSort();          //返回页的排序参数
}
```

# Pageable与Page实例：
采用单元测试的形式进行实例说明。
```java
public interface OrderMasterRepository extends JpaRepository<OrderMaster,String> {

    Page<OrderMaster> findByBuyerOpenid(String buyerOpenid, Pageable pageable);
}
```
``` java
public class OrderMasterRepositoryTest {

    private Logger logger= LoggerFactory.getLogger(OrderMasterRepositoryTest.class);

    @Autowired
    private OrderMasterRepository repository;

    private final String OPENID="110110";
    @Test
    public void saveTest(){
        OrderMaster orderMaster=new OrderMaster();
        orderMaster.setOrderId("123456");
        orderMaster.setBuyerName("师兄");
        orderMaster.setBuyerPhone("23456789123");
        orderMaster.setBuyerAddress("北京");
        orderMaster.setBuyerOpenid("110110");
        orderMaster.setOrderAmount(new BigDecimal(2.3));

        OrderMaster result=repository.save(orderMaster);

        OrderMaster orderMaster1=new OrderMaster();
        orderMaster1.setOrderId("789456");
        orderMaster1.setBuyerName("师姐");
        orderMaster1.setBuyerPhone("13222222222");
        orderMaster1.setBuyerAddress("杭州");
        orderMaster1.setBuyerOpenid("110110");
        orderMaster1.setOrderAmount(new BigDecimal(6.7));
        repository.save(orderMaster1);

        Assert.assertNotNull(result);
    }

    @Test
    public void findByBuyerOpenid() {
        //PageRequest request=new PageRequest(0,2);//从第1页开始，每页2个数据;Pageable实现：PageRequest
        PageRequest request=PageRequest.of(0,2);
        Page<OrderMaster> result=repository.findByBuyerOpenid(OPENID,request);
        logger.info(result.toString());//Page 1 of 1(第一页共一页)
        Assert.assertNotNull(result.getTotalElements());
    }

}
```