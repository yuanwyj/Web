$(function() {
	var product = $('#product');
	var hoverbox = $('.hoverbox');
	var mainboximg = $('.main-box  img');
	var piclist = $('.small-box li');

    var objDemo = document.getElementById("box");
    var objSmallBox = document.getElementById("main-box");
    var objMark = document.getElementById("mark");
    var objFloatBox = document.getElementById("float-box");
    var objBigBox = document.getElementById("roomDiv");
    var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

    /*下拉菜单*/
    $(".slade").each(function(index,element) {
    	$(this).on('click',function() {
    		$(this).parent().find('.panel').slideToggle(500);
    	});
    });

    /*图片轮播*/
    var carousel = $("#Carousel");
    var scrollerTime;

    function scroller(obj) {
    	var picbox = obj.find('.pic-box');
    	var linkLeft = picbox.find('li:first').width();
    	picbox.animate({marginLeft:-linkLeft},500,function() {
    		picbox.css({marginLeft:0}).find('li:first').appendTo(picbox);
    	});
    }

    carousel.hover(function() {
    	clearInterval(scrollerTime);
    },function() {
    	scrollerTime = setInterval(function() {
    		scroller(carousel);
    	},3000);
    }).trigger("mouseleave");

    $('.net').on('click',function() {
    	var picbox = carousel.find('.pic-box');
    	var linkLeft = picbox.find('li:first').width();
    	picbox.animate({marginLeft:-linkLeft},500,function() {
    		picbox.css({marginLeft:0}).find('li:first').appendTo(picbox);
    	});
    });    
    $('.pre').on('click',function() {
    	var picbox = carousel.find('.pic-box');
    	var linkLeft = picbox.find('li:first').width();
    	picbox.animate({marginLeft:linkLeft},500,function() {
    		picbox.css({marginLeft:0}).find('li:first').appendTo(picbox);
    	});
    });

    /*放大镜*/
                objMark.onmouseover = function () {
                objFloatBox.style.display = "block"
                objBigBox.style.display = "block"
            }

            objMark.onmouseout = function () {
                objFloatBox.style.display = "none"
                objBigBox.style.display = "none"
            }

            objMark.onmousemove = function (ev) {

                var _event = ev || window.event;  //兼容多个浏览器的event参数模式

                var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
                var top = _event.clientY + 300 - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

                if (left < 0) {
                    left = 0;
                } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
                    left = objMark.offsetWidth - objFloatBox.offsetWidth;
                }

                if (top < 0) {
                    top = 0;
                } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
                    top = objMark.offsetHeight - objFloatBox.offsetHeight+5;

                }

                objFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
                objFloatBox.style.top = top + "px";

                var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
                var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

                objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
                objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
            }

	/*点击切图*/
	for(var i = 0; i < piclist.length; i++) {
		$(piclist[i]).on('click',function() {
			var img = this.getElementsByTagName('img');
			var imgsrc = $(img).attr("src");
			var imgname =$(img).attr("name");			
			for (var j = 0; j < piclist.length; j++) {
				piclist[j].className = '';
				
			}
			this.className = 'active';

			$(mainboximg).attr("src",imgsrc);
			$(objBigBoxImage).attr("src",imgname);
		});
	}

	/*导航显隐*/
	product.mouseover(function() {
		hoverbox.toggle();
	});
	product.mouseout(function() {
		hoverbox.toggle();
	});

	$(".icon-close").on('click',function() {
		$(this).parent().fadeOut(1000);
	});

	$("#cart-btn").mouseover(function() {
		$('.cart-list').fadeIn(500);
	});

	$('.cart-list').hover(function(){
  		$(this).show();
	},function(){
  		$(this).hide()
	});

});