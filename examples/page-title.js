// https://github.com/ariya/phantomjs/wiki/API-Reference-WebPage#wiki-webpage-evaluate
var page = require('webpage').create();
page.open('http://github.com', function(status) {
    var title = page.evaluate(function() {
        return document.title;
    });
    console.log(title);
    phantom.exit();
});