define(function(require , exports , module){
	var oBg = document.getElementById('bg');
	var aLi = document.getElementsByClassName('box');
	var timer = null;
	var iSpeed = 0;	
	var timer2 = null;
	
	
	
	function show(){for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover = function(){
			clearTimeout(timer2);
			startMove( this.offsetLeft );
		};
		aLi[i].onmouseout = function(){
			timer2 = setTimeout(function(){
				startMove( 246 );
			},100);
		};
	}
	
	oBg.onmouseover = function(){
		clearTimeout(timer2);
	};
	/*oBg.onmouseout = function(){
		timer2 = setTimeout(function(){
			startMove( 246 );
		},100);
	};*/
  }
	function startMove(iTarget){
		clearInterval(timer);
		timer = setInterval(function(){
			
			iSpeed += (iTarget - oBg.offsetLeft)/6;
			iSpeed *= 0.75;
			
			if(Math.abs(iSpeed)<=1 && Math.abs(iTarget - oBg.offsetLeft)<=1){
				clearInterval(timer);
				iSpeed = 0;
				oBg.style.left = iTarget + 'px';
				childUl.style.left = - iTarget+246 + 'px';
			}
			else{
				oBg.style.left = oBg.offsetLeft + iSpeed + 'px';
				childUl.style.left = - oBg.offsetLeft+246 + 'px';
			}
			
		},30);
	}
	exports.show=show;
	
})
	var childUl =document.getElementById('ul-list');
	var olis=childUl.getElementsByTagName('li');
	//var attr=['about','about-cont','new','Project','sector','tree','footer'];
	var postion = [0,1100,2151,3249,4311,5416,6610];
	var num = 0;
	var flag = true;
	for(var i=0;i<olis.length;i++){
		olis[i].index=i;
		olis[i].onclick=function(){
			f = false;
			//document.scrollTop()-1100;
			var p = postion[this.index];
			//alert(p);
		
			var timer = window.setInterval(function(){
					 if(num>p){
					    num-=80;
						flag = false;
					 }else{
					 	num+=80;
						flag = true;
					 }
					window.scrollTo(0,num);
					 if((flag&&num>p)||(!flag&&num<p)){
							clearInterval(timer);
							num = p;
							f = true;
						}

				},50)
			 
			
			//Move(a,{top:a.offsetTop},function(){this.Zindex=999});
			
			
			
			
			}
		
		
		
		
		}	
		
		
		
function Move(obj, json, fn) {
	clearInterval(obj.iTimer);
	var iSpeed = 0;
	var iCur = 0;
	obj.iTimer = setInterval(function() {
		
		var iBtn = true;
		
		for (attr in json) {
			if (attr == 'opacity') {
				iCur = Math.round(css(obj, attr) * 100);
			} else {
				iCur = parseInt(css(obj, attr));
			}
			iSpeed = (json[attr] - iCur) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		
			if (iCur != json[attr]) {
				iBtn = false;
				if (attr == 'opacity') {
					obj.style.opacity = (iCur + iSpeed) / 100;
					obj.style.filter = 'alpha(opacity='+ (iCur + iSpeed) +')';
				} else {
					obj.style[attr] = iCur + iSpeed + 'px';
				}
			}
		}
		
		if (iBtn) {
			clearInterval(obj.iTimer);
			fn && fn.call(obj);
		}
		
	}, 30);
}

function css(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

	
	
	
	
	
	
	
	
	
