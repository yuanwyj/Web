/*
* author: yuanzp
* date: 2016/10/31
*/

// window.onload = function() {
// 	var piclist =document.getElementsByClassName("show");
// 	change(piclist);

// }
// function change(item) {
// 	var t;
// 	item.className = 'item';
// 	item.nextSibling.className = "show";

// 	t = setTimeout('change()',2000);
// }

window.onload = function() {
	var picbox = document.getElementById('pic'); //图片盒子
	var pagebox = document.getElementById('pagebox'); //页码盒子
	var pic = picbox.getElementsByClassName('item');
	var page = pagebox.getElementsByTagName('li');
	var pre = document.getElementById('pre');
	var net = document.getElementById('net');

	var n = -1366; //图片宽度
	picbox.innerHTML = picbox.innerHTML + picbox.innerHTML; //增加一倍图片用于循环
	picbox.style.width = pic[0].offsetWidth*pic.length + "px"; //设置盒子的宽

	var timer =null;

	timer = setInterval(function() {
		scroll(picbox,n,page);
	},3000);

	picbox.onmouseover = function() {
		clearInterval(timer);
	}
	pagebox.onmouseover = function() {
		clearInterval(timer);
	}
	picbox.onmouseout = function() {
		timer = setInterval(function() {
			scroll(picbox,n,page);
		},3000);
	}
	pre.onclick = function() {
		move(picbox,n);
	}
	net.onclick = function() {
		move(picbox,n);
	}
	/*设置页码点击事件*/
	for(var i = 0; i < page.length; i ++) {
		page[i].index = i;
		page[i].onclick = function() {
			for(var j = 0; j < page.length; j++) {
				page[j].className = ' ';
			}
			move(picbox,n*(this.index));
			this.className = 'active';
		}
	}
}
/*循环滚动函数*/
function scroll(box,n,page) {
	if (box.offsetLeft <= -box.offsetWidth/2) {
		box.style.left = "0px"; //重头开始
		console.log('0');
	}
	if (box.offsetLeft % n != 0) {}
	else {
		pageScroll(box,n,page);
		move(box,n+box.offsetLeft);
	}
}

/*滚动页码函数*/
function pageScroll(box,n,pageS) {
	var index = Math.abs(box.offsetLeft/n);
	for(var i = 0; i < pageS.length; i ++) {
		pageS[i].className = '';
	}
	if (index < pageS.length - 1) {
		pageS[index+1].className ='active';
		pageS[index].className = '';
	} else {
		pageS[0].className = 'active';
	}
}

/*变速滚动*/
function move(ele,target){ 
 	clearInterval(ele.timer); 
 	ele.timer = setInterval(function () { 
  	var step = (target-ele.offsetLeft)/10; 
  	step = step>0?Math.ceil(step):Math.floor(step); 
  	if(target==ele.offsetLeft){ 
   		clearInterval(ele.timer); 
  	} 
  	else{ 
   		ele.style.left = ele.offsetLeft + step + "px"; 
  		} 
 	},30); 
} 