'use strict';

let fs = require('fs'),
    colors = require('colors'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    https = require('https'),
    http = require('http'),
    Twitter = require('twitter'),
    request = require('request'),
    querystring = require('querystring'),
    cookieParser = require('cookie-parser'),
    Client = require('node-rest-client').Client;

var client = new Client();

app.use(express.static('657'))
app.use(cookieParser());

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {

    console.log('\n');
    console.log('********************************************'.black.bgWhite);
    console.log("The frontend server is running on port 5000!".black.bgWhite);
    console.log('********************************************'.black.bgWhite);
    console.log('\n');

});

app.get('/', function (req, res) {

    console.log('\n');
    console.log('******* INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');

    var html = fs.readFileSync('657/templates/base.html');
    res.end(html);

});



var igEndPoints = {
  from_the_docs: {
      url: 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + instagramAccessCode,
      method: 'GET'

  },
  media_search: {
      url: 'https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=' + instagramAccessCode,
      method: 'GET'
  },

    popular_media_search : {
      url: 'https://api.instagram.com/v1/media/popular?access_token=' + instagramAccessCode,
      method: 'GET'
  },

    from_SO_search : {
      url: 'https://api.instagram.com/v1/tags/res/media/recent?client_id=' + instagram_client_id + '&callback=' +
          instagram_redirect_uri + '&access_token=' + instagramAccessCode,
      method: 'GET'
  },
    from_SO_search : {
      url: 'https://api.instagram.com/v1/tags/res/media/recent?client_id=' + instagram_client_id + '&callback=' +
          instagram_redirect_uri + '&access_token=' + instagramAccessCode,
      method: 'GET'
  },

    user_search_by_name : {
      url: 'https://api.instagram.com/v1/users/search?q=cthagod&access_token=' + instagramAccessCode,
      method: 'GET'
  },

  // THESE WORK - thisIsCamelCaseAsAnExample this

    self_search :{
      url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + instagramAccessCode + '&count=300',
      method: 'GET'
  },
    popular_tag_search:  {
      url: 'https://api.instagram.com/v1/tags/search?q=red&access_token=' + instagramAccessCode,
      method: 'GET'
  },

   search_popular_by_tag_name : {
      url: 'https://api.instagram.com/v1/tags/nodejs?access_token=' + instagramAccessCode,
      method: 'GET'
  },
   popular_tag_search_tag_name_recent: {
      url: 'https://api.instagram.com/v1/tags/dev/media/recent?access_token=' + instagramAccessCode + '&count=200',
      method: 'GET'
  }
};
