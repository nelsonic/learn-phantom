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
used by (Apple) **Safari** and (Google) **Chrome** *both* **Desktop**
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
![which phantomjs](http://i.imgur.com/wd5RsOV.png "which phantomjs")


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

Run this code from your command line by typing: `phantomjs example.js`

you should now see a screenshot in your current directory! Yay! :-)


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

> Pedro Teixeira has a great introduction book to UI testing:
http://www.amazon.co.uk/Using-Node-js-Testing-Pedro-Teixeira/dp/1782160523/