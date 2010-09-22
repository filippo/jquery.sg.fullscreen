/***********************************
File:    jquery.sg.fullscreen.js
Author  : filippo pacini <filippo.pacini@gmail.com>
License :
The contents of this file are subject to the Mozilla Public
License Version 1.1 (the "License"); you may not use this file
except in compliance with the License. You may obtain a copy of
the License at http://www.mozilla.org/MPL/

Software distributed under the License is distributed on an "AS IS"
basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
the License for the specific language governing rights and
limitations under the License.
The Initial Developer of the Original Code is S.G. Consulting
srl. Portions created by S.G. Consulting s.r.l. are Copyright (C)
2008-2010 S.G. Consulting srl. All Rights Reserved.

************************************/
(function($){
     // put the fullscreen object inside the the wrapped set
     $.fn.fullscreen = function(src, callerSettings) {
	 var settings = {resizeWidth: true,
			 resizeHeight: true,
			 baseWidth: this.width(), 
			 baseHeight: this.height()};
	 settings = $.extend(settings, callerSettings||{});
	 settings['imgSrc'] = src;
	 this.attr('src', src);
	 var wrappedSet = this;
	 var resize = function(wrappedSet) {
	     var browserWidth = $(window).width();
	     var browserHeight = $(window).height();
	     var ratio = browserHeight / browserWidth;
	     if ((browserWidth < wrappedSet.width()) && settings.resizeWidth) {
		 wrappedSet.width(browserWidth);
		 wrappedSet.height(browserWidth * ratio);
	     } else if ((browserHeight < wrappedSet.height()) && settings.resizeHeight) {
		 wrappedSet.height(browserHeight);
		 wrappedSet.width(browserHeight / ratio);
	     } else {
		 wrappedSet.width(settings.baseWidth);
		 wrappedSet.height(settings.baseHeight);
	     }
	 };
	 $(window).bind('resize', wrappedSet, function(event) {resize(wrappedSet);});
	 resize(wrappedSet); //call resize the first time
	 return this;
     };
})(jQuery);