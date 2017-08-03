# Video Background Plugin
##### vidbacking is an attempt to make HTML5 video-background easy.
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/souravm84/vidbacking/master/LICENSE.md)

This is a small jQuery plugin to simplify the process of showing HTML5 video as background. You can use this for showing a video on **whole page background** or to show the video as the background of a `<div>`, `<section>`, like elements.
>  ***Features:***
> * Cross Browser Video Background Plugin.
> * Very small file size (4kb total).
> * Easy to use.
> * Can be used for both page background or for an element background.
> * Image fallback when video not supported.
> * Pause video when out of viewport.
> * Multiple instances on same page possible.
> * Device friendly, responsive.
> * Tested on all modern browsers.

 
### Demo
Check few demos in action.

> [Full page background video example](https://souravm84.github.io/vidbacking/demo1/) 
> 
> [Video as a `<div>` background](https://souravm84.github.io/vidbacking/demo2/)

### Dependency
The **vidbacking** depends on jQuery 2.x or higher. No other files required for it to work properly. Also, it requires HTML5 video tag support in the browser(This is a common feature in all major browsers).

### How to use
You can use this video-background plugin in two different way. Either for video as page background, or for the background of a `<div>`, `<section>`, or some other block level elements.
#### For full page background:

You need to add the HTML5 video tag next to  your HTML body tag. Don't forget to add the ***class="vidbacking"*** in your video tag.

```html
<video poster="screenshot1.jpg" autoplay muted loop class="vidbacking">
	<source src="video1.mp4" type="video/mp4">
	<source src="video1.webm" type="video/webm">
</video>
```

Link the css file jquery.vidbacking.min.css provided under the `dist` folder under your `<head />` tag.
```html
<link rel="stylesheet" href="dist/jquery.vidbacking.css" type="text/css">
```
Then import the script after importing jQuery file, and write a little script as described in following section.

```html
<script type="text/javascript" src="dist/jquery.vidbacking.js"></script>
<script type="text/javascript">
	$(function(){
    		$('body').vidbacking();
	});
</script>
```

#### For `<div>` or other block level elements' background:

You need to add the HTML5 video tag under the `<div>` or block level element for which you want to set a video-background. Don't forget to add the ***class="vidbacking"*** in your video tag.
```html
<div id="video-back">
	<video poster="screenshot1.jpg" autoplay muted loop class="vidbacking">
		<source src="video1.mp4" type="video/mp4">
		<source src="video1.webm" type="video/webm">
	</video>
    <!-- html content of the div -->
    <h1>Vidbacking Demo of &lt;div&gt; Background</h1>
</div>
```

Link the css file jquery.vidbacking.min.css provided under the `dist` folder under your `<head />` tag.
```html
<link rel="stylesheet" href="dist/jquery.vidbacking.css" type="text/css">
```

Then import the script after importing jQuery file, and write a little script as described in following section.

```html
<script type="text/javascript" src="dist/jquery.vidbacking.js"></script>
<script type="text/javascript">
	$(function(){
    		$('#video-back').vidbacking();
	});
</script>
```
> Note: don't forget to import jQuery before adding the above script.

### Plugin parameters
This plugin support following parameters. You can change the output of vidbacking by setting these parameters.
> ***masked:*** This parameter can have two possible values `true` or `false`. If set to `true` will masked the video with a png image overlay.
> 
> ***mask-opacity:*** If `masked` is `true` then by setting this parameter you can change the opacity of the mask image. Possible value ranged between `1` to `0`, for example `mask-opacity: 0.25`.
> 
> ***video-opacity:*** You can set the video opacity using this parameter. Possible value ranged between `1` to `0`, for example `video-opacity: 0.5`.

I have plans for upgrading this plugin with more functionalities such as pausing the video when out of view, and few more. If you found any issues please report in this repo, I will try to fix them in next release.