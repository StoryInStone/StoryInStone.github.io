/*字体设置*/
(function() {
				var b = document.documentElement,
					a = function() {
						var a = b.getBoundingClientRect().width;
						b.style.fontSize = 0.0625 * (640 <= a ? 640 : a) + "px"
					},
					c = null;
				window.addEventListener("resize",
					function() {
						clearTimeout(c);
						c = setTimeout(a, 300)
					});
				a()
			})();
				mui.init();


$(".footer_ul").find("li").find("a").click(function() {
	$(this).parent("li").siblings("li").each(function() {
		$(this).find("a").css("color", "#666666");
	});
	$(this).siblings().css("color", "#666666");
	$(this).css("color", "#de3b1c");
	$(this).parent("li").attr("class", "on");
	$(this).parent("li").siblings().removeAttr("class");

});
$(".zxjf_yh7").find("a").click(function() {

	$(this).siblings().css("background", "#e0e0e0");
	$(this).css("background", "#fac825");

});
  $(".grxx_btn1").click(function(){
  $("#suces").css("display","block");
setTimeout("xiaoshi()",2000)
  });
  function xiaoshi(){
  	$("#suces").css("display","none");
  }
  $(".xxfh_bqsq2").find("input").click(function() {

    $(this).attr("class", "active");
	$(this).siblings().removeAttr("class");

});
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
  //上传图片
  function setImagePreview() {  
                var preview, img_txt, localImag, file_head = document.getElementById("file_head"),  
                picture = file_head.value;  
                if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
                !1;  
                if (preview = document.getElementById("preview"), file_head.files && file_head.files[0]) preview.style.display = "block",  
                    preview.style.width = "2.25rem",  
                    preview.style.height = "2.25rem",  
                    preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
                else {  
                    file_head.select(),  
                    file_head.blur(),  
                    img_txt = document.selection.createRange().text,  
                    localImag = document.getElementById("localImag"),  
                    localImag.style.width = "2.25rem",  
                    localImag.style.height = "2.25rem";  
                    try {  
                        localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
                        localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt,
                         $("#forward").css("display","none")
                       
                    } catch(f) {  
                        return alert("您上传的图片格式不正确，请重新选择！"),  
                        !1  
                    }  
                    preview.style.display = "none",  
                    document.selection.empty()  
                }  
               
                !0  
            }
     function setImagePreview1() {  
                var preview, img_txt, localImag, file_head = document.getElementById("file_head1"),  
                picture = file_head.value;  
                if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
                !1;  
                if (preview = document.getElementById("preview"), file_head.files && file_head.files[0]) preview.style.display = "block",  
                       preview.style.width = "2.25rem",  
                    preview.style.height = "2.25rem",  
                    preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
                else {  
                    file_head.select(),  
                    file_head.blur(),  
                    img_txt = document.selection.createRange().text,  
                    localImag = document.getElementById("localImag"),  
                    localImag.style.width = "2.25rem",  
                    localImag.style.height = "2.25rem";  
                    try {  
                        localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
                        localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
                    } catch(f) {  
                        return alert("您上传的图片格式不正确，请重新选择！"),  
                        !1  
                    }  
                    preview.style.display = "none",  
                    document.selection.empty()  
                }  
              
                !0  
            }  
    
/*图片大小控制*/
$('.owner li img').height($('.owner li img').width());
$('.owner li').height($('.owner li img').height());
$('.repair-detail ul.repair-item img').height($('.repair-detail ul.repair-item img').width());
$('.mui-table-view li a img.tx').height($('.mui-table-view li a img.tx').width());
$('.mui-table-view li a div').height($('.mui-table-view li a img.tx').height());
$('.msg li img').height($('.msg li img').width());
$('.msg .mui-media-body').height($('.msg li img').height());
