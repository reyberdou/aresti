/*
 * jQuery Orbit Plugin 1.2.3
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/(function(e){e.fn.orbit=function(t){t=e.extend({animation:"horizontal-push",animationSpeed:600,timer:!0,advanceSpeed:4e3,pauseOnHover:!1,startClockOnMouseOut:!1,startClockOnMouseOutAfter:1e3,directionalNav:!0,captions:!0,captionAnimation:"fade",captionAnimationSpeed:600,bullets:!1,bulletThumbs:!1,bulletThumbLocation:"",afterSlideChange:function(){}},t);return this.each(function(){function n(){if(!t.timer||t.timer=="false")return!1;y.is(":hidden")?T=setInterval(function(){u("next")},t.advanceSpeed):(b=!0,S.removeClass("active"),T=setInterval(function(){var e="rotate("+x+"deg)";x+=2;w.css({"-webkit-transform":e,"-moz-transform":e,"-o-transform":e});x>180&&(w.addClass("move"),E.addClass("move"));x>360&&(w.removeClass("move"),E.removeClass("move"),x=0,u("next"))},t.advanceSpeed/180))}function r(){if(!t.timer||t.timer=="false")return!1;b=!1,clearInterval(T),S.addClass("active")}function s(){if(!t.captions||t.captions=="false")return!1;var n=g.eq(f).data("caption");(_captionHTML=e(n).html())?(C.attr("id",n).html(_captionHTML),t.captionAnimation=="none"&&C.show(),t.captionAnimation=="fade"&&C.fadeIn(t.captionAnimationSpeed),t.captionAnimation=="slideOpen"&&C.slideDown(t.captionAnimationSpeed)):(t.captionAnimation=="none"&&C.hide(),t.captionAnimation=="fade"&&C.fadeOut(t.captionAnimationSpeed),t.captionAnimation=="slideOpen"&&C.slideUp(t.captionAnimationSpeed))}function o(){if(!t.bullets)return!1;A.children("li").removeClass("active").eq(f).addClass("active")}function u(e){function n(){g.eq(r).css({"z-index":1});p=!1;t.afterSlideChange.call(this)}var r=f,i=e;if(r==i)return!1;if(g.length=="1")return!1;p||(p=!0,e=="next"?(f++,f==l&&(f=0)):e=="prev"?(f--,f<0&&(f=l-1)):(f=e,r<f?i="next":r>f&&(i="prev")),o(),g.eq(r).css({"z-index":2}),t.animation=="fade"&&g.eq(f).css({opacity:0,"z-index":3}).animate({opacity:1},t.animationSpeed,n),t.animation=="horizontal-slide"&&(i=="next"&&g.eq(f).css({left:c,"z-index":3}).animate({left:0},t.animationSpeed,n),i=="prev"&&g.eq(f).css({left:-c,"z-index":3}).animate({left:0},t.animationSpeed,n)),t.animation=="vertical-slide"&&(i=="prev"&&g.eq(f).css({top:h,"z-index":3}).animate({top:0},t.animationSpeed,n),i=="next"&&g.eq(f).css({top:-h,"z-index":3}).animate({top:0},t.animationSpeed,n)),t.animation=="horizontal-push"&&(i=="next"&&(g.eq(f).css({left:c,"z-index":3}).animate({left:0},t.animationSpeed,n),g.eq(r).animate({left:-c},t.animationSpeed)),i=="prev"&&(g.eq(f).css({left:-c,"z-index":3}).animate({left:0},t.animationSpeed,n),g.eq(r).animate({left:c},t.animationSpeed))),s())}var f=0,l=0,c,h,p,v=e(this).addClass("orbit"),m=v.wrap('<div class="orbit-wrapper" />').parent();v.add(c).width("1px").height("1px");var g=v.children("img, a, div");g.each(function(){var t=e(this),n=t.width(),t=t.height();n>v.width()&&(v.add(m).width(n),c=v.width());t>v.height()&&(v.add(m).height(t),h=v.height());l++});g.length==1&&(t.directionalNav=!1,t.timer=!1,t.bullets=!1);g.eq(f).css({"z-index":3}).fadeIn(function(){g.css({display:"block"})});if(t.timer){m.append('<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>');var y=m.children("div.timer"),b;if(y.length!=0){var w=e("div.timer span.rotator"),E=e("div.timer span.mask"),S=e("div.timer span.pause"),x=0,T;n();y.click(function(){b?r():n()});if(t.startClockOnMouseOut){var N;m.mouseleave(function(){N=setTimeout(function(){b||n()},t.startClockOnMouseOutAfter)});m.mouseenter(function(){clearTimeout(N)})}}}t.pauseOnHover&&m.mouseenter(function(){r()});if(t.captions){m.append('<div class="orbit-caption"></div>');var C=m.children(".orbit-caption");s()}if(t.directionalNav){if(t.directionalNav=="false")return!1;m.append('<div class="slider-nav"><span class="right">Right</span><span class="left">Left</span></div>');var k=m.children("div.slider-nav").children("span.left"),L=m.children("div.slider-nav").children("span.right");k.click(function(){r();u("prev")});L.click(function(){r();u("next")})}if(t.bullets){m.append('<ul class="orbit-bullets"></ul>');var A=m.children("ul.orbit-bullets");for(i=0;i<l;i++){k=e("<li>"+(i+1)+"</li>");t.bulletThumbs&&(L=g.eq(i).data("thumb"))&&(k=e('<li class="has-thumb">'+i+"</li>"),k.css({background:"url("+t.bulletThumbLocation+L+") no-repeat"}));m.children("ul.orbit-bullets").append(k);k.data("index",i);k.click(function(){r();u(e(this).data("index"))})}o()}})}})(jQuery);