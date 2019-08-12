---
title: Springboot中JPA扩展查询
date: 2019-08-12 17:56:30
tags:
- Springboot
- Spring JPA
categories: Springboot
---
# 前言
JPA的出现，使得在开发过程中，几乎不需要写什么sql语句，便可完成对数据的增删改查。但是，其查询功能有时并不能完全满足我们的需求，因此，就需要开发者基于JPA进行扩展查询，本文将结合一个小案例来阐述Springboot中JPA扩展查询的使用。
# 添加依赖
```
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```
# 建立一个实体类
``` java
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity
@Data
public class ProductInfo {

    @Id
    private String productId;

    private String productName;

    private BigDecimal productPrice;

    private Integer productStock;

    private String productDescription;

    private String productIcon;

    private Integer categoryType;

    private Integer productStatus;
}
```
# 进行查询

将产品状态（productStatus）作为关键字进行查询。
```java
import com.imooc.sell.dataobject.ProductInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProdctInfoRepository extends JpaRepository<ProductInfo,String> {//<对象，主键类型>
    List<ProductInfo> findByProductStatus(Integer productStatus);
}
```
注意`findByProductStatus`这并不是随便的一个变量名，`findBy`格式是固定的，后面的`ProductStatus`和实体类中的属性要一一对应。

# 测试代码
```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class ProdctInfoRepositoryTest {

    @Autowired
    private ProdctInfoRepository repository;

    @Test
    public void findByProductStatus() {//根据产品状态进行查询
        List<ProductInfo> productInfoList=repository.findByProductStatus(1);//0是上架
        Assert.assertNotEquals(0,productInfoList.size());
    }
}
``` 
# JPA扩展查询语句结构
![](https://luhexin.github.io/images/JPA/1.png)