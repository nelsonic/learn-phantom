var page = require('webpage').create(),
    url = 'http://www.google.com/mobile/';
page.open(url, function() {
  page.viewportSize = { width: 640, height: 960 };
  page.clipRect = { top: 0, left: 0, width: 640, height: 960  };
  page.render('google-iphone4.png');
  phantom.exit()
});