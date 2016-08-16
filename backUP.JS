'use strict';

// A FEW MODULES

let fs = require('fs'),
    colors = require('colors'),
    express = require('express'),
    bodyParser = require('body-parser'),
    https = require('https'),
    http = require('http'),
    Twitter = require('twitter'),
    request = require('request'),
    querystring = require('querystring'),
    cookieParser = require('cookie-parser'),
    Client = require('node-rest-client').Client,
    app = express(),
    client = new Client();

// swap dev/production data
var ignitionSwitch = false;
// IG-ONLY: if true - prod / if true - dev

//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY
//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY
//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY

var instagramAccessCode = 'FOR-TEMPORARY-USE-ONLY';
var spotifyAccessToken = 'FOR-TEMPORARY-USE-ONLY';
let instagram_client_id = 'FOR-TEMPORARY-USE-ONLY';
let instagram_client_secret = 'FOR-TEMPORARY-USE-ONLY';
let instagram_redirect_uri = 'FOR-TEMPORARY-USE-ONLY';
let instagramApiURL = 'FOR-TEMPORARY-USE-ONLY';
let spotify_redirect_uri = 'FOR-TEMPORARY-USE-ONLY';

if (ignitionSwitch) {

    instagram_client_id = "b23670e220f14f1c89c11f627c9f9953";
    instagram_client_secret = "dd78c7ffbadd4a10a49f24675356c4d2";
    instagram_redirect_uri = 'https://losethequit.herokuapp.com/views/werkspayce.html';
    instagramApiURL = 'http://www.instagram.com/oauth/authorize?client_id=b23670e220f14f1c89c11f627c9f9953&redirect_uri=https://losethequit.herokuapp.com/views/werkspayce.html&response_type=code&scope=basic+public_content+follower_list+comments+relationships+likes';
    spotify_redirect_uri = 'https://losethequit.herokuapp.com/views/werkspayce.html/spotify-callback';

} else {

    instagram_client_id = 'd0f6230a40954cb2823768aa53910a5e';
    instagram_client_secret = 'bfb29d9f5ee94a46a675f771e9013477';
    instagram_redirect_uri = 'http://localhost:5000/views/werkspayce.html';
    instagramApiURL = 'http://www.instagram.com/oauth/authorize?client_id=d0f6230a40954cb2823768aa53910a5e&redirect_uri=http://localhost:5000/views/werkspayce.html&response_type=code&scope=basic+public_content+follower_list+comments+relationships+likes';
    spotify_redirect_uri = 'http://localhost:5000/views/werkspayce.html/spotify-callback';

}

var twitterClient = new Twitter({

    consumer_key: 'qiQPf27ifq8tSBHCAqtu6iHLU',
    consumer_secret: 'hMNZdyYyVT4SXTGbd60qE5WVe8wfO9no0mlvJNseRreJDumjQP',
    access_token_key: '4882645629-rFYbk7Bz2tw4Z9QEAce62S8SY3MJRNS6HTy3tOk',
    access_token_secret: 'Q4NhcvlrW81xQREPH4yQvOR9iwlSQqmC4AVOK9QQOiq7h'

});

var spotify_client_id = '099060b613284cc0af0210f5199dcb0c'; // Your client id
var spotify_client_secret = '42c98e7bfcf6426dbf25888204456dce'; // Your secret
//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY
//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY
//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY
var generateRandomString = function (length) {

    /************************************************************
     * Generates a random string containing numbers and letters
     * @param  {number} length The length of the string
     * @return {string} The generated string
     ***********************************************************/

    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

var stateKey = 'spotify_auth_state';
var scopes = 'user-read-private user-read-email'

/*
 * ROUTING
 * ROUTING
 * ROUTING
 * ROUTING
 * ROUTING
 */

app.set('port', (process.env.PORT || 5000));

app.use(express.static('/static'))
    .use(cookieParser());

app.use(express.static('static'))
.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(app.get('port'), function () {

    console.log('\n');
    console.log('********************************************'.black.bgWhite);
    console.log("The frontend server is running on port 5000!".black.bgWhite);
    console.log('********************************************'.black.bgWhite);
    console.log('\n');

});

// THE HOMEPAGE
// THE HOMEPAGE
// THE HOMEPAGE

app.get('/', function (req, res) {

    console.log('\n');
    console.log('******* INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');

    var html = fs.readFileSync('static/views/shell.html');
    res.end(html);

});

// THE HOMEPAGE
// THE HOMEPAGE
// THE HOMEPAGE

// EMCIEN STUFF
// EMCIEN STUFF
// EMCIEN STUFF

app.post('/emcien', function (req, res) {

    console.log("1:");
    console.log(req.body);
    console.log("2:");
    console.log(req.body.storm);

    console.log('START *** EMCIEN - INCOMING INPUT GET REQUEST - EMCIEN *** START'.black.bgCyan);

    var exampleBaseUrl = 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=fuzzy%20monkey';
    var googleImageApiBaseUrl = 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=fuzzy%20monkey' + req.body.storm;

    client.get(exampleBaseUrl, function (data, response) {

        for (var key in data) {

            console.log("key: " + key);
            console.log("key-LOCK: " + key[0]);
            // console.log("data: " + key + " = " + data[key]);

        }

        // console.log(data);
        // console.log(response);

        //res.send(data.items);
        //res.end();

    });

    console.log('END ***** EMCIEN - INCOMING INPUT GET REQUEST - EMCIEN ***** END'.black.bgCyan);

});

// EMCIEN STUFF
// EMCIEN STUFF
// EMCIEN STUFF


// THIS IS USED TO LOAD GENERIC SPOTIFY DATA WITHOUT AUTHENTICATION
app.get('/spotify', function (req, res) {

    console.log('START *** SPOTIFY - INCOMING INPUT GET REQUEST - SPOTIFY *** START'.black.bgCyan);
    var spotifyApiUrl = 'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=20';
    client.get(spotifyApiUrl, function (data, response) {
        // console.log(data.items);
        res.send(data.items);
        res.end();
    });

    console.log('END ***** SPOTIFY - INCOMING INPUT GET REQUEST - SPOTIFY ***** END'.black.bgCyan);

});

// THE INITIAL SPOTIFY LOGIN ENDPOINT
app.get('/views/werkspayce.html/spotify-login', function (req, res) {

    console.log('START *** spotify-login *** START'.black.bgCyan);

    var state = generateRandomString(16);
    res.cookie(stateKey, state);
    var scope = 'user-read-private user-read-email';

    console.log('state: ' + state)
    console.log('stateKey: ' + stateKey)

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: spotify_client_id,
            scope: scope,
            redirect_uri: spotify_redirect_uri,
            state: state
        }));
    // 'https://losethequit.herokuapp.com/views/werkspayce.html/spotify-callback' IS THE REDIRECT URL
    // AND IS THE SUBSEQUENT METHOD BELOW THIS ONE
    console.log('END ***** spotify-login ***** END'.black.bgCyan);
    console.log('\n');

});

app.get('/views/werkspayce.html/spotify-callback', function (req, res) {

    console.log('START ***** spotify-callback *** spotify-callback ***** START'.black.bgCyan);

    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {

        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));

    } else {
        res.clearCookie(stateKey);
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: spotify_redirect_uri,
                grant_type: 'authorization_code'
            },

            // console.log(Buffer.from("Hello World").toString('base64'));
            // console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'));
            // ENCODE THE ID AND SECRET USING BASE64 TO SEND TO SPOTIFY

            headers: {
                'Authorization': 'Basic ' + (new Buffer(spotify_client_id + ':' + spotify_client_secret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                var access_token = body.access_token;
                var refresh_token = body.refresh_token;

                spotifyAccessToken = access_token;

                console.log('\n');
                console.log('SPOTIFY ACCESS TOKEN:'.white.bgCyan);
                // console.log('\n');
                console.log(spotifyAccessToken);
                console.log('SPOTIFY ACCESS TOKEN:'.white.bgCyan);
                console.log('\n');


                // IF EVERYTHING GOES WELL
                // PROCEED TO AUTHENTICATE IG

                res.redirect('/instagram-login?' +
                    querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    }));

            } else {
                res.redirect('/views/werkspayce.html?' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }

            console.log('END ******* spotify-callback *** spotify-callback ******* END'.black.bgCyan);
        });
    }

});

// A STAND ALONE END POINT TO PING SPOTIFY FOR ARTIST DATA

app.post('/spotify-input-query', function (req, res) {

    console.log('START *** INSIDE spotify-input-query INSIDE ***'.black.bgCyan);
    console.log('\n');
    console.log('START *** INSIDE spotify-input-query -TEXT - INSIDE ***'.black.bgCyan);
    // req.body seems to only work with POST requests
    console.log(req.body);
    console.log('START *** INSIDE spotify-input-query -TEXT - INSIDE ***'.black.bgCyan);

    var options = {

        url: 'https://api.spotify.com/v1/search?q=' + req.body.q + '&type=artist',
        headers: {
            'Authorization': 'Bearer ' + spotifyAccessToken
        },
        json: true
    };

    // use the access token to access the Spotify Web API
    request.get(options, function (error, response, body) {

        if (response.statusCode === 200) {
            res.send(body.artists.items);
        } else {
            console.log(response.body)
        }
    });

    console.log('\n');
    console.log('END *** INSIDE spotify-input-query INSIDE ***'.black.bgCyan);

});

 // ENDPOINT TO RETRIEVE TWITTER USER TIMELINE DATA
app.post('/userTimeLineQuery', function (req, res) {

    console.log('\n');
    console.log('START *** INCOMING INPUT GET REQUEST - search-tweets-query *** START'.white.bgBlue);
    console.log('INPUT QUERY: ' + '\n' + JSON.stringify(req.body));
    console.log('INCOMING INPUT GET REQUEST - search-tweets-query'.white.bgBlue);
    console.log('\n');
    twitterClient.get('statuses/user_timeline', req.body, function (error, tweets, response) {

        if (!error) {
            res.json(tweets);
            console.log('***** tweets *** SENT *** tweets *****'.white.bgBlue);
        } else {
            res.json(error);
            console.log(error);
        }

        console.log('\n');
        console.log('** TWITTER - END - userTimeLineQuery - END - TWITTER **'.white.bgBlue);
    });

});
 // ENDPOINT TO RETRIEVE ALL TWITTER TIMELINE DATA
app.post('/searchTweetsQuery', function (req, res) {
    console.log('TWITTER - INPUTQUERY - START - TWITTER'.white.bgBlue);

    console.log('\n');
    console.log('INCOMING INPUT GET REQUEST - search-tweets-query'.white.bgBlue);
    console.log(req.body);
    console.log(req.body);
    console.log(req.body);
    console.log(req.body);
    console.log('INCOMING INPUT GET REQUEST - search-tweets-query'.white.bgBlue);
    console.log('\n');

    twitterClient.get('search/tweets', req.body, function (error, tweets, response) {

        if (!error) {
            res.json(tweets);
            console.log('***** tweets *** SENT *** tweets *****'.white.bgBlue);
        } else {
            res.json(error);
            console.log(error);
        }

        console.log('\n');
        console.log('** TWITTER - END - searchTweetsQuery - END - TWITTER **'.white.bgBlue);
    });

});


app.get('/instagram-login', function (req, res) {

    res.redirect(instagramApiURL);
    res.end();
});

app.post('/ig', function (req, res, next) {

    console.log('\n');
    console.log('START ***** - IG INCOMING POST REQUEST - IG ***** START'.black.bgGreen);

    if (req.body.token.indexOf("http") != -1) {
        console.log('INSTAGRAM ACCESS_CODE NOT AVAILABLE'.white.bgRed);

        // if the access code IS NOT available
        // STOP the process of making a call to the
        // instagram api

    } else {

        // if the access code IS available
        // START the process of making a call to the
        // instagram api

        let ACCESS_CODE = req.body.token;

        let post_data = {
            'client_id': instagram_client_id,
            'client_secret': instagram_client_secret,
            'grant_type': 'authorization_code',
            'redirect_uri': instagram_redirect_uri,
            'code': ACCESS_CODE
        };

        var headers = {
            'User-Agent': 'Super Agent/0.0.1',
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        var post_options = {
            url: 'https://api.instagram.com/oauth/access_token',
            method: 'POST',
            headers: headers,
            form: post_data
        };

        request(post_options, function (error, response, body) {

            var parsedBody = JSON.parse(body);

            //  console.log('*******************************************************'.black.bgRed);
            //  console.log(parsedBody);
            //  console.log('*******************************************************'.black.bgRed);

            if (response.statusCode != 200) {

                console.log('ACCESS CODE NOT PRESENT');

            } else {

                instagramAccessCode = parsedBody.access_token;

                console.log('\n');
                console.log('instagramAccessCode:'.white.bgGreen);
                console.log(instagramAccessCode);
                console.log('instagramAccessCode:'.white.bgGreen);
                console.log('\n');

                // THESE WORK - thisIsCamelCaseAsAnExample this

                var self_search = {
                    url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + instagramAccessCode + '&count=300',
                    method: 'GET'
                };

                //&min_id=678453535718114828_919796408

                console.log(igEndPoints.self_search);
                console.log(igEndPoints.self_search);
                console.log(self_search);
                console.log(self_search);

                request(self_search, function (error, response, body) {
                    if (error && response.statusCode != 200) {
                        console.error(error);

                        // if (error)
                        // throw (error);

                    } else {
                        var JSONObjectArray = JSON.parse(body);

                        // turns off back end logging of user JSONObjectArray
                        // console.log(JSONObjectArray);

                        res.send(JSONObjectArray);

                        console.log('***** JSONObjectArray *** SENT *** JSONObjectArray *****'.black.bgGreen);
                        console.log('\n');
                        console.log('END ******* - IG INCOMING POST REQUEST - IG ******* END'.black.bgGreen);
                    }
                });
            }
        });
    }

});


// AFTER AUTHENTICATION - THIS METHOD PINGS IF FOR
// DATA SPECIFIED BY THE  "REQUEST OPTION"
app.post('/instaInputQuery', function (req, res, next) {

    console.log('\n');
    console.log('START - *** - IG - InputQuery - IG - *** - START'.black.bgGreen);
    console.log(req.body);

    let inputQueryFromHTML = req.body.query;

      var popular_tag_search_tag_name_recent = {
        url: 'https://api.instagram.com/v1/tags/' + req.body.query + '/media/recent?access_token=' + instagramAccessCode + '&count=200',
        method: 'GET'
    };

    request(popular_tag_search_tag_name_recent, function (error, response, body) {

        if (error || response.statusCode != 200) {
            error = error || response;
            console.error(error);

            // if (error)
            // throw (error);

        } else {
            var JSONobjArray = JSON.parse(body);

            // turns off back end logging of user JSONObjectArray
            // console.log(JSONObjectArray);

            res.send(JSONobjArray);
            console.log('***** JSONObjectArray *** SENT *** JSONObjectArray *****'.black.bgGreen);
            console.log('\n');
            console.log('END - *** - IG - InputQuery - IG - *** - END'.black.bgGreen);
        }

    });

});
