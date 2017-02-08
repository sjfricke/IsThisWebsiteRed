/*!	
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info*
*/
!function(){var a=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},b=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a};window.fitText=function(c,d,e){var f=b({minFontSize:-1/0,maxFontSize:1/0},e),g=function(b){var c=d||1,e=function(){b.style.fontSize=Math.max(Math.min(b.clientWidth/(10*c),parseFloat(f.maxFontSize)),parseFloat(f.minFontSize))+"px"};e(),a(window,"resize",e),a(window,"orientationchange",e)};if(c.length)for(var h=0;h<c.length;h++)g(c[h]);else g(c);return c}}();