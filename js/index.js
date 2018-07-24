$(function() {
    //初始化工具提示通过属性选择器 选中属性为data-toggle并且值为tooltip的元素调用tooltip初始化方法
    $('[data-toggle="tooltip"]').tooltip();
    responseSlide();
    // 响应式轮播图
    function responseSlide() {
        $(window).on('resize', function() {
            // 控制在小中大 就加载   pc-img  在超小就加载 mobile-img 
            var windowWidth = $(window).width();
            // 选中所有item项
            var items = $('.carousel-inner .item');
            console.log(windowWidth);
            // 大于768认为是非移动端 显示大图
            if (windowWidth >= 768) {
                // 获取所有item添加大图div
                items.each(function(index, value) { //jquery遍历数组
                    $(value).html('<div class="pc-img " style="background-image:url(./img/slide_0' + (index + 1) + '_2000x410.jpg)"></div>');
                })  
            } else {
                //移动端显示小图
                // 获取所有item添加大图div
                items.each(function(index, value) { //jquery遍历数组
                    $(value).html('<img class="mobile-img" src="img/slide_0' + (index + 1) + '_640x340.jpg" alt="...">');
                })
            }
        }).trigger('resize'); //trigger是注册完事件后马上触发一下
    }
});
