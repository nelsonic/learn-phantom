learn-phantom
=============

PhantomJS lets us simulate a full web browser in your command line tests. #Win!

### WHY?

If you are building anything web-based and *not* doing
automated (full-stack) testing, PhantomJS is a *great* tool to learn!

To cut out the "*boring bits*" of web/app development.
Namely refreshing pages and clicking through interactions to confirm
they are working as desired (*thousands* of times...!)


### WHAT does "*Scriptable Headless WebKit*" Mean...?

- [WebKit](https://github.com/WebKit/webkit) is the *most popular web browser*.
It is [OpenSource](https://github.com/WebKit/webkit) and 
used by (Apple) **Safari** and (Google) **Chrome** *both* **Desktop** & 
**Mobile** (iOS/Android/Blackberry) which makes it perfect for ***testing*** 
websites.
- Scriptable: you can write instructions for the browser to perfomr 
(e.g. visit this page, click on this link, fill in that form etc.)
- Headless: A web browser without a *visual* "window". 
You can interact with the PhantomJS "Browser" entirely through code 
without ever having to "view" the web pages. Images output is optional. 
*More detail*: http://blog.arhg.net/2009/10/what-is-headless-browser.html


### WHO Can/Should Use PhantomJS?

***Everyone*** that is not commandline-phobic and wants streamline their 
web/app development. As you will see from this simple/quick/easy tutorial 
you can build an amazing automated test suite in just a few lines of code!
And run it each time you save a file or "build" your project!
Never have to *manually* click through your app again to test it!
Finish work early and take up a new hobby! :-)


## Instalation

The Download page has executables for Linux, Mac and Windows:

> http://phantomjs.org/download.html

If you are (lucky enough to be) on a Mac, you can use **homebrew** to install:
```sh
brew update && brew install phantomjs
```

![brew install phantomjs](http://i.imgur.com/h9yiZNj.png "Brew install phantomjs")

To confirm that you have installed phantomjs, type: `which phantomjs`
in your terminal window.
<!-- ![which phantomjs](http://i.imgur.com/wd5RsOV.png "which phantomjs") -->


## Basic usage

We are going to load a web page and take a screenshot of it.

Create a new file called **example.js** and paste the following code:
```javascript
var page = require('webpage').create();
page.open('http://google.com', function() {
  page.render('google-homepage.png');
  phantom.exit();
});
```

Run this code from your command line by typing: `phantomjs examples/example.js`

you should now see a screenshot in your current directory! Yay! :-)

## Using JQuery (or *Zepto*) to Click on Links

The **page.includeJs** method allows us to include an external JS file.
In our case we are including ZeptoJS and using the .click() method 
to click a button on the page.

```javascript
var page = require('webpage').create(),
    url = 'http://nelsonic.s3.amazonaws.com/learn-phantom/examples/project/index.html';
page.open(url, function() {
    page.includeJs("http://zeptojs.com/zepto.min.js", function() {
        page.evaluate(function(page) {
            $('#color').click(); // this changes the page's background color.
        });
        page.render('blue-background.png');
        console.log("clicked on #color on " +url);
        phantom.exit()
    });
});
```
### Notes
- https://github.com/ariya/phantomjs/wiki/Page-Automation
- https://github.com/ariya/phantomjs/wiki/API-Reference-WebPage#wiki-webpage-evaluate


## Specify Viewport Width/Heigh (for Mobile Web Testing)

```
var page = require('webpage').create(),
    url = 'http://www.google.com/mobile/';
page.open(url, function() {
  page.viewportSize = { width: 640, height: 960 }; // restrict page width
  page.clipRect = { top: 0, left: 0, width: 640, height: 960  }; // screenshot size
  page.render('google-iphone4.png');
  phantom.exit()
});

```

### Notes
- I tried using only the **page.viewportSize** property but that 
only constrained the width so the screenshot was full height. (useful
but not what I wanted...) so I had to add the **page.clipRect**
- https://github.com/ariya/phantomjs/wiki/API-Reference-WebPage#wiki-webpage-viewportSize
- https://github.com/ariya/phantomjs/wiki/API-Reference-WebPage#wiki-webpage-clipRect

I've just noticed that the 640x960px (iPhone 4 size) screenshot is 109kb!
Might need to re-think my plan to take a screenshot for *every* action/test...
This could become expensive (image storage!) :-(
Cross that bridge when we get there. 
Back of the envelope calculation:
110 kb x **100k images** = (110,000 x 100,000) = 11,000,000,000
**11Gb** is 10 cents per month. its *all* good.

## Useful Links

- Website: http://phantomjs.org/
- Quick Start: http://phantomjs.org/quick-start.html
- Examplese: http://phantomjs.org/examples/
- GitHub:  https://github.com/ariya/phantomjs

### Tutorials

- Build Podcast PhantomJS Ep: http://build-podcast.com/phantomjs/

### Interesting Side Notes

- Color Wheel HTML5 Canvas drawing: 
https://github.com/ariya/phantomjs/blob/master/examples/colorwheel.js

## Next

It has *dawned* on me that PhantomJS is only the Tip of the Iceberg!
And that I will have to learn CasperJS to get the *real* power...
http://docs.casperjs.org/en/latest/modules/casper.html

But... I will investigate using Zombie.js before that
http://zombie.labnotes.org/
It kind of annoys me that Zombie (only) has **87%** code coverage: 
http://zombie.labnotes.org/coverage

But I don't want to have to *write* my own headless tester... :-(

... I say I *don't* want to write my own tester ...

I had a read through the CasperJS API 
http://docs.casperjs.org/en/latest/modules/casper.html
There are *lots* of useful methods. 
But most of them are *way* beyond the scope of a simple app.

> Pedro Teixeira has a great introduction book to UI testing:
http://www.amazon.co.uk/Using-Node-js-Testing-Pedro-Teixeira/dp/1782160523/

- Phantom + Mocha: https://github.com/metaskills/mocha-phantomjs