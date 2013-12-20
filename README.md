learn-phantom
=============

PhantomJS lets us simulate a full web browser in your command line tests. #Win!

## What does "*Scriptable Headless WebKit*" Mean...?



If you are building anything web-based and *not* doing
automated (full-stack) testing, PhantomJS is a *great* tool to learn!

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
- Examplese: http://phantomjs.org/examples/
- GitHub:  https://github.com/ariya/phantomjs

### Tutorials

- Build Podcast PhantomJS Ep: http://build-podcast.com/phantomjs/