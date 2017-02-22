/* Scraper Template  (18.10)
 * ========================= */

// Students: Using this skeleton, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save it in a result array, and log it to the console.

// Dependencies:

//Initialize Express App
var express = require("express");
//Initialize mongoose
var mongoose = require('mongoose');
// Snatches HTML from URLs
var request = require('request');
// Scrapes our HTML
var cheerio = require('cheerio');


//connect to mongoose db
mongoose.connect('mongodb://localhost/scaper_bot');


// Make a request call to grab the HTML body from the site of your choice
request("http://www.zerohedge.com/", function(error, response, html) {
    var $ = cheerio.load(html);

    var result = [];

    $("article.node-teaser").each(function(i, element) {
        
        var title = $(element).children('h2.teaser-title').text();
        var link =  'www.zerohedge.com' + $(element).find('a').attr("href");
        
        result.push({
            title: title,
            link: link
        });
});

console.log(result);
})