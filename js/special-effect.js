/* 鼠标点击,文字特效 */
var a_index = 0;
jQuery(document).ready(function($) {
    $("html").click(function(e) {
        var a = new Array("奋斗!!!","努力!!!","Learning~","Coding~","Summarizing~","Advancing~","VENI","VIDI","VICI","٩(•̤̀ᵕ•̤́๑)ᵒᵏᵎᵎᵎᵎ");
        var i = $("<span></span>").text(a[a_index]);
        a_index = (a_index + 1) % a.length;
       // a_index = Math.round(Math.random()*a.length);//随机出现点击内容
        var x = e.pageX,
        y = e.pageY;
        i.css({
            "z-index": 66666666666666666666666666666666666666666666666666666666666,
            "top": y -10,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        $("html").append(i);
        i.animate({
            "top": y-180 ,
            "opacity": 0
        },
        1500,
        function() {
            i.remove();
        });
    });
});


