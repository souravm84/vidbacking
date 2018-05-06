/*
* vidbacking
* jQuery Background video plugin for jQuery
* ---
* Copyright 2018, Sourav Mukhopadhyay (https://www.upwork.com/o/profiles/users/_~010a5ed52d2f45f4db/)
* Released under the MIT Licenses.
* Description: Allow embedding HTML5 video as page background, and element background.
* Can be used on multiple elements background on same page.
*/
(function($){
	$.fn.vidbacking = function(options){
		var settings = $.extend({
			'video-opacity': '1', //This parameter defines Video Opacity(It can't change YouTube video opacity).
			'masked': false,      //If this parameter is true then a dotted image will overlay the video.
			'mask-opacity': '1',  // It defines the mask image opacity. Only effective if "masked" is "true".
			'youtube-mute-video': true, //If you want the YouTube video to be muted.
			'youtube-loop': true        //Set this parameter "true" to loop the YouTube video.
		},options);

		return this.each(function(){
			var targetobj = $(this),
				targettag = targetobj.prop('tagName'),
				targetid = targetobj.prop('id');

			//This section execute when the Target Object is <BODY>.
			if(targettag == 'BODY'){
				obj = $('.vidbacking');  //The video object
				objtag = obj.prop('tagName'); //The tag of the video(<IFRAME> for YouTube or <video>).
				//This section execute when YouTube iframe tag found as background video.
				if(objtag == 'IFRAME'){
					var youtube_source = obj.attr('src') + '?autoplay=1&rel=0&controls=0&showinfo=0',
						video_url_parts = obj.attr('src').split('/'),
						video_id = video_url_parts[video_url_parts.length - 1];
					//Check and set YouTube video mute if "youtube-mute-video" parameter set to "true".
					if(settings['youtube-mute-video'] == true){
						youtube_source += '&mute=1';
					}
					//Make the YouTube video loop if "youtube-loop" parameter set to "true".
					if(settings['youtube-loop'] == true){
						youtube_source += '&loop=1&playlist='+video_id;
					}
					obj.attr('src',youtube_source);
					obj.addClass('vidbacking-active-body-back-youtube');
					var winh = $(window).height(), //Browser Window height
						winw = $(window).width(),  //Browser Window width
						vidh = obj.height(),       //video object height
						vidw = obj.width(),        //video object window
						wre = winw / winh,         //ratio of window width vs window height
						hre = winh / winw;         //ratio of window height vs window width

					//This section will execute if window width is greater than window height.
					if(winw > winh){
						if(wre < 1.77){
							expected_width = winh * (16/9);
							obj.css('width',expected_width+'px');
							obj.css('height','100%');
						}else{
							expected_height = winw / (16/9);
							obj.css('width','100%');
							obj.css('height',expected_height+'px');
						}
					//This section will execute if window height is greater than window width.
					}else{
						if(hre < 0.56){
							expected_height = winw / (16/9);
							obj.css('width','100%');
							obj.css('height',expected_height+'px');
						}else{
							expected_width = winh * (16/9);
							obj.css('width',expected_width+'px');
							obj.css('height','100%');
						}
					}

				//This section execute when a HTML5 <video> is set as background video.
				}else{
					poster = obj.attr('poster');
					obj.css('background-size','100% 100% !important');
					obj.css('background-image','url('+poster+')'); //Setting the poster image as background.
					obj.addClass('vidbacking-active-body-back');
					obj.css('opacity',settings["video-opacity"]);  //Setting the video opacity.
				}
				obj.removeClass('vidbacking');

				//Check and set the image mask over video according to the value of "masked" parameter.
				if(settings.masked == true){
					obj.after('<div class="vidmask-body-back">&nbsp;</div>');
					$('.vidmask-body-back').css('opacity',settings["mask-opacity"]);
				}
				//On Browser Window reset this code will execute.
				$(window).resize(function(){
					var winh = $(window).height(),  //Browser window height.
						winw = $(window).width(),   //Browser window width.
						vidh = obj.height(),        //Video object height.
						vidw = obj.width(),         //Video object width.
						wre = winw / winh,          //ratio of window width vs window height.
						hre = winh / winw;          //ratio of window height vs window width.
					//This section execute when YouTube iframe tag found as background video.
					if(objtag == 'IFRAME'){
						//This section will execute if window width is greater than window height.
						if(winw > winh){
							if(wre < 1.77){
								expected_width = winh * (16/9);
								obj.css('width',expected_width+'px');
								obj.css('height','100%');
							}else{
								expected_height = winw / (16/9);
								obj.css('width','100%');
								obj.css('height',expected_height+'px');
							}
						//This section will execute if window height is greater than window width.
						}else{
							if(hre < 0.56){
								expected_height = winw / (16/9);
								obj.css('width','100%');
								obj.css('height',expected_height+'px');
							}else{
								expected_width = winh * (16/9);
								obj.css('width',expected_width+'px');
								obj.css('height','100%');
							}
						}
					//This section execute when a HTML5 <video> is set as background video.
					}else{
						//When video height is less than Browser window height.
						if(vidh < winh){
							obj.css('height',winh);
						}
						//When video width is less than Browser window width.
						if(vidw < winw){
							obj.css('width',winw);
						}
					}
				});
			//This section execute when the Target Object is any HML block element
			//Such as <div>,<section>,etc. Othen than <BODY>.
			}else{
				obj = $(this).find('.vidbacking'); //The video object
				objtag = obj.prop('tagName');   //The tag of the video(<IFRAME> for YouTube or <video>).
				//This section execute when YouTube iframe tag found as background video.
				if(objtag == 'IFRAME'){
					var youtube_source = obj.attr('src') + '?autoplay=1&rel=0&controls=0&showinfo=0',
						video_url_parts = obj.attr('src').split('/'),
						video_id = video_url_parts[video_url_parts.length - 1];
					//Check and set YouTube video mute if "youtube-mute-video" parameter set to "true".
					if(settings['youtube-mute-video'] == true){
						youtube_source += '&mute=1';
					}
					//Make the YouTube video loop if "youtube-loop" parameter set to "true".
					if(settings['youtube-loop'] == true){
						youtube_source += '&loop=1&playlist='+video_id;
					}
					obj.attr('src',youtube_source);
					obj.addClass('vidbacking-active-block-back-youtube');
					targetobj.css('position','relative');
					targetobj.css('overflow','hidden');
					var winh = targetobj.outerHeight(), //Get the target element height.
						winw = targetobj.width(),       //Get the target element width.
						vidh = obj.height(),            //Video object height.
						vidw = obj.width(),             //Video object width.
						wre = winw / winh,              //ratio of target element width vs height.
						hre = winh / winw;              //ratio of target element height vs window width.
					//This section will execute if target element width is greater than height.
					if(winw > winh){
						if(wre < 1.77){
							expected_width = winh * (16/9); //"16/9" is the default aspect ration of YouTube video.
							obj.css('width',expected_width+'px');
							obj.css('height','100%');
						}else{
							expected_height = winw / (16/9);//"16/9" is the default aspect ration of YouTube video.
							obj.css('width','100%');
							obj.css('height',expected_height+'px');

						}
					//This section will execute if target element height is greater than width.
					}else{
						if(hre < 0.56){
							expected_height = winw / (16/9);  //"16/9" is the default aspect ration of YouTube video.
							obj.css('width','100%');
							obj.css('height',expected_height+'px');
						}else{
							expected_width = winh * (16/9);   //"16/9" is the default aspect ration of YouTube video.
							obj.css('width',expected_width+'px');
							obj.css('height','100%');
						}
					}
				//This section execute when a HTML5 <video> is set as background video.
				}else{
					poster = obj.attr('poster');
					targetobj.css('position','relative');
					targetobj.css('overflow','hidden');
					obj.css('background-image','url('+poster+')');  //Setting the poster image as background.
					obj.addClass('vidbacking-active-block-back');
					obj.css('opacity',settings["video-opacity"]);   //Setting the video opacity.
				}
				obj.removeClass('vidbacking');

				//Check and set the image mask over video according to the value of "masked" parameter.
				if(settings.masked == true){
					targetobj.append('<div class="vidmask-block-back">&nbsp;</div>');
					targetobj.find('.vidmask-block-back').css('opacity',settings["mask-opacity"]);
				}
				$(window).resize(function(){
					var winh = targetobj.outerHeight(),  //Get the target element height.
						winw = targetobj.width(),        //Get the target element width.
						vidh = obj.height(),             //Video object height.
						vidw = obj.width(),              //Video object width.
						wre = winw / winh,               //ratio of target element width vs height.
						hre = winh / winw;               //ratio of target element height vs window width.
					//This section execute when YouTube iframe tag found as background video.
					if(objtag == 'IFRAME'){
						//This section will execute if target element width is greater than height.
						if(winw > winh){
							if(wre < 1.77){
								expected_width = winh * (16/9);//"16/9" is the default aspect ration of YouTube video.
								obj.css('width',expected_width+'px');
								obj.css('height','100%');
							}else{
								expected_height = winw / (16/9);//"16/9" is the default aspect ration of YouTube video.
								obj.css('width','100%');
								obj.css('height',expected_height+'px');
							}
						//This section will execute if target element height is greater than width.
						}else{
							if(hre < 0.56){
								expected_height = winw / (16/9);//"16/9" is the default aspect ration of YouTube video.
								obj.css('width','100%');
								obj.css('height',expected_height+'px');
							}else{
								expected_width = winh * (16/9);//"16/9" is the default aspect ration of YouTube video.
								obj.css('width',expected_width+'px');
								obj.css('height','100%');
							}
						}
					//This section execute when a HTML5 <video> is set as background video.
					}else{
						if(vidh < winh){
							obj.css('height',winh);
						}
						if(vidw < winw){
							obj.css('width',winw);
						}
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
					//If out of view port then pause HTML5 video. No effect on YouTube video.
					if(target_element_bottom < top || target_element_position.top > window_bottom){
						if(!obj[0].paused){
							try{
								obj[0].pause();
							}catch(e){
								console.error(e);
							}
						}
					//If in view port then play HTML5 video. No effect on YouTube video.
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
})(jQuery);//End of plugin code.
