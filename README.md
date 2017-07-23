# Video Background Plugin
##### vidbacking is an attempt to make HTML5 video-background easy.

This is a small jQuery plugin to simplify the process of showing HTML5 video as background. You can use this for showing a video on **whole page background** or to show the video as the background of a `<div>`, `<section>`, like elements.
>  ***Features:***
* Cross Browser Video Background Plugin.
* A very small file size (4kb total).
* Easy to learn and use.
* Can be used for both page background or for an element background.
* Tested on all modern browsers.
 
### Dependency
The **vidbacking** depends on jQuery 2.x or higher. No other files required for it to work properly. Also, it requires HTML5 video tag support in the browser(This is a common feature in all major browsers).

### How to use
You can use this video-background plugin in two different way. Either for video as page background, or for the background of a `<div>`, `<section>`, or some other block level elements.
#### For page background:
You need to add the HTML5 video tag next to  your HTML body tag. Don't forget to add the ***class="vidbacking" in your video tag.

```html
<video poster="screenshot1.jpg" autoplay muted loop class="vidbacking">
	<source src="video1.mp4" type="video/mp4">
    <source src="video1.webm" type="video/webm">
</video>
```

Link the css file jquery.vidbacking.min.css provided under the `dist` folder in your `<head />` tag
```css
<link rel="stylesheet" href="dist/jquery.vidbacking.css" type="text/css">
```
