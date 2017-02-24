var request = require('request');
var cheerio = require('cheerio');

//tell the console what I'm scraping - in this case it is ZeroHedge.com
console.log('\n*********\n' + 
    "ZeroHedge" + 
    "\n**********\n");

// Make a request call to grab the HTML body from zerohedge
request("http://www.zerohedge.com/", function(error, response, html) {
    
    //Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selection commands, much like Jquery's '$'
    var $ = cheerio.load(html);

    //An empty array to save the data that we'll scrape
    var result = [];

    //With cheerio locate the <article element with class="node-teaser"
    $('article.node-teaser').each(function(i,element) {

        //this needs work , right now I cannot get to the article title
        var title = $(element).children('h2.teaser-title').text();

        //this locates the link in zerohedge and copies
        var link =  'www.zerohedge.com' + $(element).find('a').attr("href");

        //the result of the scrape
        result.push({
            title:title
            link:link
        });
    });

    console.log(result);
})