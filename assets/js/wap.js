//控制比例大小
(function() {
	var b = document.documentElement,
		a = function() {
			var a = b.getBoundingClientRect().width;
			b.style.fontSize = 0.0625 * (640 <= a ? 640 : a) + "px"
		},
		c = null;
	window.addEventListener("resize", function() {
		clearTimeout(c);
		c = setTimeout(a, 300)
	});
	a()
})();
$(".footer_ul").find("li").find("a").click(function() {
	$(this).parent("li").siblings("li").each(function() {
		$(this).find("a").css("color", "#666666");
	});
	$(this).siblings().css("color", "#666666");
	$(this).css("color", "#de3b1c");
	$(this).parent("li").attr("class", "on");
	$(this).parent("li").siblings().removeAttr("class");

});
mui.init();
/*滚动*/
(function($) {
	//阻尼系数
	var deceleration = mui.os.ios ? 0.003 : 0.0009;
	$('.mui-scroll-wrapper').scroll({
		bounce: false,
		indicators: true, //是否显示滚动条
		deceleration: deceleration
	});
})(mui);
