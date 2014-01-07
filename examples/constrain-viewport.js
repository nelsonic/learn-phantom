var page = require('webpage').create(),
    url = 'http://google.com';
page.open(url, function() {
  // iPad 2 screenshot 1024x768
  page.viewportSize = { width: 1024, height: 768 };
  page.clipRect = { top: 0, left: 0, width: 1024, height: 768  };
  page.render('google-ipad2.png');

  // iPhone 4 screenshot 640x960
  page.viewportSize = { width: 640, height: 960 };
  page.clipRect = { top: 0, left: 0, width: 640, height: 960  };
  page.render('google-iphone4.png');

  phantom.exit()
});
