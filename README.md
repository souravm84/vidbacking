# Video Background Plugin
##### vidbacking is an attempt to make HTML5 video-background easy.

This is a small jQuery plugin to simplify the process of showing HTML5 video as background. You can use this for showing a video on **whole page background** or to show the video as the background of a `<div>`, `<section>`, like elements.
>  ***Features:***
> * Cross Browser Video Background Plugin.
> * Very small file size (4kb total).
> * Easy to use.
> * Can be used for both page background or for an element background.
> * Image fallback when video not supported.
> * Tested on all modern browsers.

 
### Dependency
The **vidbacking** depends on jQuery 2.x or higher. No other files required for it to work properly. Also, it requires HTML5 video tag support in the browser(This is a common feature in all major browsers).

### How to use
You can use this video-background plugin in two different way. Either for video as page background, or for the background of a `<div>`, `<section>`, or some other block level elements.
#### For full page background:
---
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
---
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

