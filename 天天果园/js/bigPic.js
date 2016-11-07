function bigPic(id,opt){
	opt.scale = opt.scale>=2 ? opt.scale : 2;
	//获取最外层容器且设置其样式
	var box = document.getElementById(id);
	box.style.cssText = 'width:'+opt.width+'px;height:'+opt.height+'px;position:relative;';
	//缩略图布局
	//缩略图容器创建且设置其样式
	var leftBox = document.createElement('div');
	leftBox.style.cssText = 'width:'+opt.width+'px;height:'+opt.height+'px;position:relative;';
	//创建缩略图且设置其样式
	var leftImg = document.createElement('img');
	leftImg.src = opt.url;
	leftImg.style.cssText = 'width:100%;height:100%;border:0;display:block;';
	//创建滤镜且设置其样式
	var ball = document.createElement('div');
	ball.style.cssText = 'width:'+ (opt.width/opt.scale) +'px;height:'+ (opt.height/opt.scale) +'px;position:absolute;left:0;top:0;background:'+ opt.bgColor+';opacity:0.3;filter:alpha(opacity=30);display:none;';
	//创建蒙板且设置其样式
	var mask = document.createElement('div');
	mask.style.cssText = 'width:'+opt.width+'px;height:'+opt.height+'px;position:absolute;left:0;top:0;z-index:10;';
	//缩略图容器填充元素
	leftBox.appendChild(leftImg);
	leftBox.appendChild(ball);
	leftBox.appendChild(mask);
	//原图布局
	//创建原图容器且设置其样式
	var rightBox = document.createElement('div');
	rightBox.style.cssText = 'width:'+opt.width+'px;height:'+opt.height+'px;position:absolute;left:'+ (opt.width +10) +'px;top:0;display:none;overflow:hidden;';
	//创建原图且设置其样式
	var rightImg = document.createElement('img');
	rightImg.src = opt.url;
	rightImg.style.cssText = 'width:'+(opt.width * opt.scale)+'px;height:'+(opt.height * opt.scale)+'px;position:absolute;left:0;top:0;';
	//填充原图容器
	rightBox.appendChild(rightImg);
	//完成结构布局
	box.appendChild(leftBox);
	box.appendChild(rightBox);

	//绑定事件
	leftBox.onmousemove = function(event){
		var e = event || window.event;
		ball.style.display = 'block';
		rightBox.style.display = 'block';
		var mouX = (e.offsetX || e.layerX) - ball.offsetWidth/2;
		var mouY = (e.offsetY || e.layerY) - ball.offsetHeight/2;

		if(mouX<=0){
			mouX = 0;
		}else if(mouX >= box.clientWidth - ball.offsetWidth){
			mouX = box.clientWidth - ball.offsetWidth;
		}
		
		if(mouY<=0){
			mouY = 0;
		}else if(mouY >= box.clientHeight - ball.offsetHeight){
			mouY = box.clientHeight - ball.offsetHeight;
		}

		ball.style.left = mouX + 'px';
		ball.style.top = mouY + 'px';
		rightImg.style.left = -mouX * opt.scale + 'px';
		rightImg.style.top = -mouY * opt.scale + 'px';

		this.onmouseout = function(){
			ball.style.display = 'none';
			rightBox.style.display = 'none';
		}
	}
}