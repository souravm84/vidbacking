/*
* vidbacking
* jQuery Background video plugin for jQuery
* ---
* Copyright 2017, Sourav Mukhopadhyay (https://www.upwork.com/o/profiles/users/_~010a5ed52d2f45f4db/)
* Released under the MIT Licenses.
* Description: Allow embedding HTML5 video as page background, and element background.
* Can be used on multiple elements background on same page.
*/
(function($){
	$.fn.vidbacking = function(options){
		var settings = $.extend({
			'video-opacity': '1',
			'masked': false,
			'mask-opacity': '1'
		},options);
		
		return this.each(function(){
			var targetobj = $(this),
				targettag = targetobj.prop('tagName'),
				targetid = targetobj.prop('id');
			
			if(targettag == 'BODY'){
				obj = $('.vidbacking');
				poster = obj.attr('poster');
				obj.css('background-size','100% 100% !important');
				obj.css('background-image','url('+poster+')');
				obj.addClass('vidbacking-active-body-back');
				obj.css('opacity',settings["video-opacity"]);
				obj.removeClass('vidbacking');
				
				if(settings.masked == true){
					obj.after('<div class="vidmask-body-back">&nbsp;</div>');
					$('.vidmask-body-back').css('opacity',settings["mask-opacity"]);
				}
				$(window).resize(function(){
					var winh = $(window).height(),
						winw = $(window).width(),
						vidh = obj.height(),
						vidw = obj.width();

					if(vidh < winh){
						obj.css('height',winh);
					}
					if(vidw < winw){
						obj.css('width',winw);
					}
				});
			}else{
				obj = $(this).find('.vidbacking');
				poster = obj.attr('poster');
				targetobj.css('position','relative');
				targetobj.css('overflow','hidden');
				obj.css('background-image','url('+poster+')');
				obj.addClass('vidbacking-active-block-back');
				obj.css('opacity',settings["video-opacity"]);
				obj.removeClass('vidbacking');
				if(settings.masked == true){
					targetobj.append('<div class="vidmask-block-back">&nbsp;</div>');
					targetobj.find('.vidmask-block-back').css('opacity',settings["mask-opacity"]);
				}
				$(window).resize(function(){
					var winh = targetobj.height(),
						winw = targetobj.width(),
						vidh = obj.height(),
						vidw = obj.width();

					if(vidh < winh){
						obj.css('height',winh);
					}
					if(vidw < winw){
						obj.css('width',winw);
					}
				});
				//checking if out of focus on scroll
				$(window).scroll(function(){
					var top = $(window).scrollTop(),
						left = $(window).scrollLeft(),
						winheight = $(window).height(),
						target_element_position = targetobj.offset(),
						target_element_bottom = targetobj.outerHeight() + target_element_position.top,
						window_bottom = winheight + top;
					if(target_element_bottom < top || target_element_position.top > window_bottom){
						if(!obj[0].paused){
							try{
								obj[0].pause();
							}catch(e){
								console.error(e);
							}
						}
					}else{
						if(obj[0].paused){
							try{
								obj[0].play();
							}catch(e){
								console.error(e);
							}
						}
					}
				});
				
			}
			
		});
	}
})(jQuery);