(function($){
	$.fn.vidbacking = function(options){
		var settings = $.extend({
			'video-opacity': '1',
			'masked': false,
			'mask-opacity': '1'
		},options);
		
		return this.each(function(){
			var targetobj = $(this),
				obj = $('.vidbacking'),
				poster = obj.attr('poster'),
				targettag = targetobj.prop('tagName'),
				targetid = targetobj.prop('id');
			
			if(targettag == 'BODY'){
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
			}
			
		});
	}
})(jQuery);