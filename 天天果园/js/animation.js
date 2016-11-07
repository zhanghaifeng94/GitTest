function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:window.getComputedStyle(obj,null)[attr];
}
//�������˶�
function animation(dom,attr,end,fn){
	//ֹͣ��һ������
	dom.timer?clearInterval(dom.timer):null;
	//ʹ�ص������е�thisָ��ǰ�˶���Ԫ�ض���
	dom.fn = fn;
	//��Ӷ���
	dom.timer = setInterval(function(){
		//���ݲ�͸����
		if(attr=='opacity'){
			dom.start = parseFloat(getStyle(dom,attr))*100;
			var e = end * 100;
		}else{
			//���»�ȡ���
			dom.start = parseFloat(getStyle(dom,attr));
			//�յ�λ�ø�ֵ
			var e = end;
		}
		//����ÿһ֡��Ҫ�ߵĲ��Ӵ�С  
		dom.step = (e-dom.start)/20>0?Math.ceil((e-dom.start)/20):Math.floor((e-dom.start)/20);
		//�ж϶���ֹͣ����
		if(dom.start==e){
			//ֹͣ����
			clearInterval(dom.timer);
			//����лص�������ִ�лص�����
			if(dom.fn){
				dom.fn();
			}
		}
		//���ݲ�͸����
		if(attr=='opacity'){
			dom.style[attr] = (dom.start += dom.step)/100;
			dom.style.filter = 'alpha(opacity='+(dom.start += dom.step)+')';
		}else{
			//��ֵ
			dom.style[attr] = (dom.start += dom.step) + 'px';
		}
		
	},10)
}
//�������˶�
function animations(dom,attr,times,fn){
	//��ʼ���Ƕ�
	dom.deg = 0;
	//�ı�ص������е�thisָ��
	dom.fn = fn;
	//ֹͣ��һ������
	dom.timer ? clearInterval(dom.timer):null;
	//��������
	if(times=='slow'){
		var t = 20;
	}else if(times=='normal'){
		var t = 10;
	}else if(times=='fast'){
		var t = 5;
	}else{
		var t = times/90;
	}
	
	//�����Ӧcss���Ե����ֵ
	var start = {};
	for(var k in attr){
		//���ݲ�͸����
		if(k=='opacity'){
			start[k] = parseFloat(getStyle(dom,k))*100;
		}else{
			start[k] = parseInt(getStyle(dom,k));
		}
		
	}
	//������ʼ
	dom.timer = setInterval(function(){
		dom.deg++;
		//�ж�ֹͣ����
		if(dom.deg==90){
			//ֹͣ����
			clearInterval(dom.timer);
			//ִ�лص�����
			if(dom.fn){
				dom.fn();
			}
		}
		//ѭ���ı�ÿһ������
		for(var key in attr){
			if(key=='opacity'){
				var end = Math.round((attr[key]*100-start[key])*Math.sin(dom.deg*Math.PI/180));
				dom.style[key] = (end + start[key])/100;
				dom.style.filter ='alpha(opacity='+(end + start[key])+')';
			}else{
				//���㵱ǰλ��
				var end = Math.round((attr[key]-start[key])*Math.sin(dom.deg*Math.PI/180));
				dom.style[key] = end + start[key] + 'px';
			}
			
		}

	},t)
}

