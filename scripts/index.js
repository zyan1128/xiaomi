window.onload=function(){

(function(){
		var slides=document.getElementsByClassName('slider-imglist'),
			links=document.getElementsByClassName('fixed'),
			prev=document.getElementById('leftmove'),
			next=document.getElementById('rightmove'),
			homeslider=document.getElementById('slider-img'),
			currrentSlider=slides[0],currentLink=links[0],kaiguan=true,timerId;

		var fn=(function(){
			var i=1;
			var limit=slides.length;
			return function(){
				currrentSlider.setAttribute('class','slider-imglist');
				slides[i].setAttribute('class','slider-imglist disno');
				currrentSlider=slides[i];
				
				currentLink.setAttribute('class','fixed');
				links[i].setAttribute('class','fixed hascolor');
				currentLink=links[i];
				i++;
				i=(i==limit)?0:i;
			};
			

		})();
		timerId=setInterval(fn,2000);

		homeslider.onmouseover=function(e){
			clearInterval(timerId);		
		};
		homeslider.onmouseout=function(){
			if (kaiguan) {
				clearInterval(timerId);		
				timerId=setInterval(fn,2000);
			}
			
		};

		for (var i = 0; i < links.length; i++) {
			links[i].onclick =function(){
				clearInterval(timerId);
				kaiguan=false;

				currrentSlider.setAttribute('class','slider-imglist');
				var index=this.getAttribute('data-slider-index');
				slides[index].setAttribute('class','slider-imglist disno');
				currrentSlider=slides[index];


				currentLink.setAttribute('class','fixed');
				this.setAttribute('class','fixed hascolor');
				currentLink=this;
				return false;//a标签上的#
			};
		}
		prev.onclick=function(){
			clearInterval(timerId);
			kaiguan=false;

			var pre=(currrentSlider.previousElementSibling)?currrentSlider.previousElementSibling:slides[slides.length-1];
			currrentSlider.setAttribute('class','slider-imglist');
			pre.setAttribute('class','slider-imglist disno');
			currrentSlider=pre;

			var pre1=(currentLink.previousElementSibling)?currentLink.previousElementSibling:links[links.length-1];
			currentLink.setAttribute('class','fixed');
			pre1.setAttribute('class','fixed hascolor');
			currentLink=pre1;

		};
		next.onclick=function(){
			clearInterval(timerId);
			kaiguan=false;

			var next=(currrentSlider.nextElementSibling)?currrentSlider.nextElementSibling:slides[0];
			currrentSlider.setAttribute('class','slider-imglist');
			next.setAttribute('class','slider-imglist disno');
			currrentSlider=next;

			var next1=(currentLink.nextElementSibling)?currentLink.nextElementSibling:links[0];
			currentLink.setAttribute('class','fixed');
			next1.setAttribute('class','fixed hascolor');
			currentLink=next1;

		};
})();


};