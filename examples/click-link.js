var page = require('webpage').create(),
    url = 'http://nelsonic.s3.amazonaws.com/learn-phantom/examples/project/index.html';
page.open(url, function() {
    page.includeJs("http://zeptojs.com/zepto.min.js", function() {
        page.evaluate(function(page) {
            $('#color').click(); // this changes the page's background color.
        });
        page.render('blue-background.png'); // expect a blue background
        console.log("clicked on #color on " +url);
        phantom.exit()
    });
});