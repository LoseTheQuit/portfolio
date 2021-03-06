"use strict";

// A FEW MODULES

var curry = require("lodash/curry");
var _ = require("lodash");

let fs = require("fs"),
  fetch = require("node-fetch"),
  colors = require("colors"),
  express = require("express"),
  bodyParser = require("body-parser"),
  https = require("https"),
  http = require("http"),
  Twitter = require("twitter"),
  request = require("request"),
  querystring = require("querystring"),
  cookieParser = require("cookie-parser"),
  Client = require("node-rest-client").Client,
  app = express(),
  client = new Client();

// swap dev/production data
var ignitionSwitch = true;

// IG-ONLY: if true - prod / if true - dev

//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY
//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY
//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY

var instagramAccessCode = "FOR-TEMPORARY-USE-ONLY";
var spotifyAccessToken = "FOR-TEMPORARY-USE-ONLY";
let instagram_client_id = "FOR-TEMPORARY-USE-ONLY";
let instagram_client_secret = "FOR-TEMPORARY-USE-ONLY";
let instagram_redirect_uri = "FOR-TEMPORARY-USE-ONLY";
let instagramApiURL = "FOR-TEMPORARY-USE-ONLY";
let spotify_redirect_uri = "FOR-TEMPORARY-USE-ONLY";

if (ignitionSwitch) {
  instagram_client_id = "b23670e220f14f1c89c11f627c9f9953";
  instagram_client_secret = "dd78c7ffbadd4a10a49f24675356c4d2";
  instagram_redirect_uri = "http://www.losethequit.me/views/werkspayce.html";
  instagramApiURL =
    "http://www.instagram.com/oauth/authorize?client_id=b23670e220f14f1c89c11f627c9f9953&redirect_uri=http://www.losethequit.me/views/werkspayce.html&response_type=code&scope=basic+public_content+follower_list+comments+relationships+likes";
  spotify_redirect_uri =
    "http://www.losethequit.me/views/werkspayce.html/spotify-callback";
} else {
  instagram_client_id = "d0f6230a40954cb2823768aa53910a5e";
  instagram_client_secret = "bfb29d9f5ee94a46a675f771e9013477";
  instagram_redirect_uri = "http://localhost:5000/views/werkspayce.html";
  instagramApiURL =
    "http://www.instagram.com/oauth/authorize?client_id=d0f6230a40954cb2823768aa53910a5e&redirect_uri=http://localhost:5000/views/werkspayce.html&response_type=code&scope=basic+public_content+follower_list+comments+relationships+likes";
  spotify_redirect_uri =
    "http://localhost:5000/views/werkspayce.html/spotify-callback";
}

var twitterClient = new Twitter({
  consumer_key: "qiQPf27ifq8tSBHCAqtu6iHLU",
  consumer_secret: "hMNZdyYyVT4SXTGbd60qE5WVe8wfO9no0mlvJNseRreJDumjQP",
  access_token_key: "4882645629-rFYbk7Bz2tw4Z9QEAce62S8SY3MJRNS6HTy3tOk",
  access_token_secret: "Q4NhcvlrW81xQREPH4yQvOR9iwlSQqmC4AVOK9QQOiq7h"
});

var spotify_client_id = "099060b613284cc0af0210f5199dcb0c";
var spotify_client_secret = "42c98e7bfcf6426dbf25888204456dce";

//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY
//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY
//  CLIENT IDS, KEYS AND TOKENS FOR INSTAGRAM TWITTER AND SPOTIFY

var generateRandomString = function(length) {
  /************************************************************
   * Generates a random string containing numbers and letters
   * @param  {number} length The length of the string
   * @return {string} The generated string
   ***********************************************************/

  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = "spotify_auth_state";
var scopes = "user-read-private user-read-email";

/*
 * ROUTING
 * ROUTING
 * ROUTING
 * ROUTING
 * ROUTING
 */

app.set("port", process.env.PORT || 7000);

app.use(express.static("static")).use(cookieParser());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/bower_components", express.static(__dirname + "/bower_components"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.listen(app.get("port"), function() {
  console.log("\n");
  console.log("********************************************".black.bgWhite);
  console.log("The frontend server is running on port 7000!".black.bgWhite);
  console.log("********************************************".black.bgWhite);
  console.log("\n");
});

// THE HOMEPAGE
// THE HOMEPAGE
// THE HOMEPAGE

app.get("/", function(req, res) {
  console.log("\n");
  console.log(
    "******* INCOMING GET REQUEST - Load Template *******".black.bgWhite
  );
  console.log("\n");
  // var html = fs.readFileSync('static/views/danika.html');
  var html = fs.readFileSync("static/views/shell.html");
  res.end(html);
});

app.get("/data", function(req, res) {
  console.log("\n");
  console.log(
    "******* INCOMING GET DATA.TXT REQUEST - Load Template *******".black
      .bgWhite
  );
  console.log("\n");

  var data = fs.readFileSync("static/mock/data.txt", "utf8");
  console.log(data);
  res.end(data);
});

// THE HOMEPAGE
// THE HOMEPAGE
// THE HOMEPAGE

// EMCIEN STUFF
// EMCIEN STUFF
// EMCIEN STUFF

app.post("/emcien", function(req, res) {
  console.log("1:");
  console.log(req.body);
  console.log("2:");
  console.log(req.body.storm);

  console.log(
    "START *** EMCIEN - INCOMING INPUT GET REQUEST - EMCIEN *** START".black
      .bgCyan
  );

  var exampleBaseUrl =
    "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=fuzzy%20monkey";
  var googleImageApiBaseUrl =
    "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=fuzzy%20monkey" +
    req.body.storm;

  client.get(exampleBaseUrl, function(data, response) {
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

  console.log(
    "END ***** EMCIEN - INCOMING INPUT GET REQUEST - EMCIEN ***** END".black
      .bgCyan
  );
});

// EMCIEN STUFF
// EMCIEN STUFF
// EMCIEN STUFF

// THIS IS USED TO LOAD GENERIC SPOTIFY DATA WITHOUT AUTHENTICATION
app.get("/spotify", function(req, res) {
  console.log(
    "START *** SPOTIFY - INCOMING INPUT GET REQUEST - SPOTIFY *** START".black
      .bgCyan
  );
  var spotifyApiUrl =
    "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=20";
  client.get(spotifyApiUrl, function(data, response) {
    // console.log(data.items);
    res.send(data.items);
    res.end();
  });

  console.log(
    "END ***** SPOTIFY - INCOMING INPUT GET REQUEST - SPOTIFY ***** END".black
      .bgCyan
  );
});

// THE INITIAL SPOTIFY LOGIN ENDPOINT
app.get("/views/werkspayce.html/spotify-login", function(req, res) {
  console.log("START *** spotify-login *** START".black.bgCyan);

  var state = generateRandomString(16);
  res.cookie(stateKey, state);
  var scope = "user-read-private user-read-email";

  console.log("state: " + state);
  console.log("stateKey: " + stateKey);

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: spotify_client_id,
        scope: scope,
        redirect_uri: spotify_redirect_uri,
        state: state
      })
  );
  // 'http://www.losethequit.me/views/werkspayce.html/spotify-callback' IS THE REDIRECT URL
  // AND IS THE SUBSEQUENT METHOD BELOW THIS ONE
  console.log("END ***** spotify-login ***** END".black.bgCyan);
  console.log("\n");
});

app.get("/views/werkspayce.html/spotify-callback", function(req, res) {
  console.log(
    "START ***** spotify-callback *** spotify-callback ***** START".black.bgCyan
  );

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch"
        })
    );
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: spotify_redirect_uri,
        grant_type: "authorization_code"
      },

      // console.log(Buffer.from("Hello World").toString('base64'));
      // console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'));
      // ENCODE THE ID AND SECRET USING BASE64 TO SEND TO SPOTIFY

      headers: {
        Authorization:
          "Basic " +
          new Buffer(spotify_client_id + ":" + spotify_client_secret).toString(
            "base64"
          )
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token;
        var refresh_token = body.refresh_token;

        spotifyAccessToken = access_token;

        console.log("\n");
        console.log("SPOTIFY ACCESS TOKEN:".white.bgCyan);
        // console.log('\n');
        console.log(spotifyAccessToken);
        console.log("SPOTIFY ACCESS TOKEN:".white.bgCyan);
        console.log("\n");

        // IF EVERYTHING GOES WELL
        // PROCEED TO AUTHENTICATE IG

        res.redirect(
          "/instagram-login?" +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token
            })
        );
      } else {
        res.redirect(
          "/views/werkspayce.html?" +
            querystring.stringify({
              error: "invalid_token"
            })
        );
      }

      console.log(
        "END ******* spotify-callback *** spotify-callback ******* END".black
          .bgCyan
      );
    });
  }
});

// A STAND ALONE END POINT TO PING SPOTIFY FOR ARTIST DATA

app.post("/spotify-input-query", function(req, res) {
  console.log("START *** INSIDE spotify-input-query INSIDE ***".black.bgCyan);
  console.log("\n");
  console.log(
    "START *** INSIDE spotify-input-query -TEXT - INSIDE ***".black.bgCyan
  );
  // req.body seems to only work with POST requests
  console.log(req.body);
  console.log(
    "START *** INSIDE spotify-input-query -TEXT - INSIDE ***".black.bgCyan
  );

  var options = {
    url: "https://api.spotify.com/v1/search?q=" + req.body.q + "&type=artist",
    headers: {
      Authorization: "Bearer " + spotifyAccessToken
    },
    json: true
  };

  // use the access token to access the Spotify Web API
  request.get(options, function(error, response, body) {
    if (response.statusCode === 200) {
      res.send(body.artists.items);
    } else {
      console.log(response.body);
    }
  });

  console.log("\n");
  console.log("END *** INSIDE spotify-input-query INSIDE ***".black.bgCyan);
});

// ENDPOINT TO RETRIEVE TWITTER USER TIMELINE DATA
app.post("/userTimeLineQuery", function(req, res) {
  console.log("\n");
  console.log(
    "START *** INCOMING INPUT GET REQUEST - search-tweets-query *** START".white
      .bgBlue
  );
  console.log("INPUT QUERY: " + "\n" + JSON.stringify(req.body));
  console.log("INCOMING INPUT GET REQUEST - search-tweets-query".white.bgBlue);
  console.log("\n");
  twitterClient.get("statuses/user_timeline", req.body, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      res.json(tweets);
      console.log("***** tweets *** SENT *** tweets *****".white.bgBlue);
    } else {
      res.json(error);
      console.log(error);
    }

    console.log("\n");
    console.log(
      "** TWITTER - END - userTimeLineQuery - END - TWITTER **".white.bgBlue
    );
  });
});
// ENDPOINT TO RETRIEVE ALL TWITTER TIMELINE DATA
app.post("/searchTweetsQuery", function(req, res) {
  console.log("TWITTER - INPUTQUERY - START - TWITTER".white.bgBlue);

  console.log("\n");
  console.log("INCOMING INPUT GET REQUEST - search-tweets-query".white.bgBlue);
  console.log(req.body);
  console.log("INCOMING INPUT GET REQUEST - search-tweets-query".white.bgBlue);
  console.log("\n");

  twitterClient.get("search/tweets", req.body, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      res.json(tweets);
      console.log("***** tweets *** SENT *** tweets *****".white.bgBlue);
    } else {
      res.json(error);
      console.log(error);
    }

    console.log("\n");
    console.log(
      "** TWITTER - END - searchTweetsQuery - END - TWITTER **".white.bgBlue
    );
  });
});

app.get("/instagram-login", function(req, res) {
  res.redirect(instagramApiURL);
  res.end();
});

app.post("/ig", function(req, res, next) {
  console.log("\n");
  console.log(
    "START ***** - IG INCOMING POST REQUEST - IG ***** START".black.bgGreen
  );

  if (req.body.token.indexOf("http") != -1) {
    console.log("INSTAGRAM ACCESS_CODE NOT AVAILABLE".white.bgRed);

    // if the access code IS NOT available
    // STOP the process of making a call to the
    // instagram api
  } else {
    // if the access code IS available
    // START the process of making a call to the
    // instagram api

    let ACCESS_CODE = req.body.token;

    let post_data = {
      client_id: instagram_client_id,
      client_secret: instagram_client_secret,
      grant_type: "authorization_code",
      redirect_uri: instagram_redirect_uri,
      code: ACCESS_CODE
    };

    var headers = {
      "User-Agent": "Super Agent/0.0.1",
      "Content-Type": "application/x-www-form-urlencoded"
    };

    var post_options = {
      url: "https://api.instagram.com/oauth/access_token",
      method: "POST",
      headers: headers,
      form: post_data
    };

    request(post_options, function(error, response, body) {
      var parsedBody = JSON.parse(body);

      //  console.log('*******************************************************'.black.bgRed);
      //  console.log(parsedBody);
      //  console.log('*******************************************************'.black.bgRed);

      if (response.statusCode != 200) {
        console.log("ACCESS CODE NOT PRESENT");
      } else {
        instagramAccessCode = parsedBody.access_token;

        console.log("\n");
        console.log("instagramAccessCode:".white.bgGreen);
        console.log(instagramAccessCode);
        console.log("instagramAccessCode:".white.bgGreen);
        console.log("\n");

        // THESE WORK - thisIsCamelCaseAsAnExample this

        var self_search = {
          url:
            "https://api.instagram.com/v1/users/self/media/recent/?access_token=" +
            instagramAccessCode +
            "&count=300",
          method: "GET"
        };

        //&min_id=678453535718114828_919796408

        //console.log(igEndPoints.self_search);
        //console.log(igEndPoints.self_search);
        console.log(self_search);
        console.log(self_search);

        request(self_search, function(error, response, body) {
          if (error && response.statusCode != 200) {
            console.error(error);

            // if (error)
            // throw (error);
          } else {
            var JSONObjectArray = JSON.parse(body);

            // turns off back end logging of user JSONObjectArray
            // console.log(JSONObjectArray);

            res.send(JSONObjectArray);

            console.log(
              "***** JSONObjectArray *** SENT *** JSONObjectArray *****".black
                .bgGreen
            );
            console.log("\n");
            console.log(
              "END ******* - IG INCOMING POST REQUEST - IG ******* END".black
                .bgGreen
            );
          }
        });
      }
    });
  }
});

// AFTER AUTHENTICATION - THIS METHOD PINGS IF FOR
// DATA SPECIFIED BY THE  "REQUEST OPTION"
app.post("/instaInputQuery", function(req, res, next) {
  console.log("\n");
  console.log("START - *** - IG - InputQuery - IG - *** - START".black.bgGreen);
  console.log(req.body);

  let inputQueryFromHTML = req.body.query;

  var popular_tag_search_tag_name_recent = {
    url:
      "https://api.instagram.com/v1/tags/" +
      req.body.query +
      "/media/recent?access_token=" +
      instagramAccessCode +
      "&count=200",
    method: "GET"
  };

  request(popular_tag_search_tag_name_recent, function(error, response, body) {
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
      console.log(
        "***** JSONObjectArray *** SENT *** JSONObjectArray *****".black.bgGreen
      );
      console.log("\n");
      console.log("END - *** - IG - InputQuery - IG - *** - END".black.bgGreen);
    }
  });
});

console.log("\n");

function fetchWrapper() {
  return fetch("http://flonoware.herokuapp.com/outermost").then(function(res) {
    return res.json();
  });
}

function* doWhile() {
  let stepOne = yield fetchWrapper();
  let stepTwo = yield fetchWrapper();
  let stepThree = yield stepTwo / 7;
}

let init = doWhile();

// init.next().value.then((thePromise) => {
//   console.warn(thePromise);
//   // console.warn(init.next());
//   return init.next().value;
// });

// init.next().value.then((thePromise) => {
//   console.warn(thePromise);
// })

// console.warn(init.next().value)

function smartCode(generator) {
  let gen = generator;
  let yieldedValue = gen.next();

  if (yieldedValue.value) {
    gen.next(yieldedValue.value);
    gen.next(yieldedValue.value);
  }

  // gen.value.then(function(d) {
  //   if (!d.temperature) {
  //     runPolling(generator);
  //   } else {
  //     console.log(d);
  //   }
  // });
}

smartCode(doWhile());

while (init.next().value === false) {
  console.log(init.next());
}

function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

var gen = logGenerator();

// function* doWhile() {
//   let url = 'http://flonoware.herokuapp.com/homebrew'
//   let response = yield fetch(url);
//   let stepTwo = yield getLocation;
//   let coordsData = yield fetchWrapper();
//   let stepOne = yield setUserName(randomiZer());
// };

function run(generator) {
  const iterator = generator();
  const iteration = iterator.next();
  const promise = iteration.value;
  promise
    .then(res => {
      return iterator.next(res).value;
    })
    .then(y => {
      // console.warn(y)
    });
  // console.warn(promise)
}

run(function*() {
  let url = "http://flonoware.herokuapp.com/homebrew";
  let response = yield fetch(url);
  const resData = yield response.json();
  // let stepTwo = yield getLocation;
  let coordsData = yield fetchWrapper();
  // let stepOne = yield setUserName(randomiZer());
});

let birdObj = {
  birdType: "Pelican",
  flightRange: 9,
  region: `South Africa`
};

let birdFinder = obj => {
  console.log(`This bird is a ${obj.birdType} from the ${obj.region}!`);
};

let birdStore = obj => {
  return birdFinder(obj);
};

birdStore(birdObj);

let log = x => console.log(x);
let json = x => {
  return JSON.stringify(x, null, 2);
};

let Flock = function(n) {
  this.hawks = n;
};

Flock.prototype.conjoin = function(other) {
  this.hawks += other.hawks;
  return this;
};

Flock.prototype.breed = function(other) {
  this.hawks = this.hawks * other.hawks;
  return this;
};

let flock_a = new Flock(4);
let flock_b = new Flock(2);
let flock_c = new Flock(0);

let result = flock_a
  .conjoin(flock_c)
  .breed(flock_b)
  .conjoin(flock_a.breed(flock_b)).hawks;

console.log(result);

let add = (x, y) => x + y;

let multiply = (x, y) => x * y;

flock_a = 4;
flock_b = 2;
flock_c = 0;

result = add(
  multiply(flock_b, add(flock_a, flock_c)),
  multiply(flock_a, flock_b)
);

console.log(result);
result = multiply(flock_b, add(flock_a, flock_a));
console.log(result);

let hi = x => {
  return console.log(x);
};

let greeting = function(x) {
  return hi(x);
};

greeting("Sup!");

let curryAdd = x => y => x + y;
let increment = curryAdd(1);
let addTen = curryAdd(10);
console.log(addTen(40));
console.log(curryAdd(10)(100));

// let match = curry((what, str) => str.match(what));
// let match = ((what) => (str) => str.match(what));

let match = what => {
  return str => {
    return str.match(what);
  };
};

let replace = curry((what, rplcmt, str) => str.replace(what, rplcmt));
let filter = curry((f, arr) => arr.filter(f));
let map = curry((f, arr) => arr.map(f));
log(match(/\s+/g, "hello world"));
log(match(/\s+/g)("My name is Brendan"));
let hasSpaces = match(/\s+/g);
log(hasSpaces("I love Chanel"));
log(filter(hasSpaces, ["tori_spelling", "tori amos"]));

var compose = function(x, y) {
  return function(z) {
    return x(y(z));
  };
};

const toUpperCase = function(x) {
  return x.toUpperCase();
};
const exclaim = x => x + "!";

const shout = compose(
  exclaim,
  toUpperCase
);
log(shout("bring me the money"));
// CH 4:
//
//

const albumSales = (x, b) => {
  return y => {
    log(y);
    log(x * y + y);

    return x * y + y;
  };
};

albumSales(0.1208)(Math.random() * 1000);

let Container = function(x) {
  // log(x);
  this._value = x;
};
Container.prototype.map = function(f) {
  return Container.of(f(this._value));
};

Container.of = x => {
  return new Container(x);
};

Container.of(2).map(x => x * 10);

log(
  Container.of("protocol oriented programming").map(foo => foo.toUpperCase())
);
log(Container.of("bombs away").map(foo => shout(foo)));

// CH 5:
// CH 6:
// CH 7:
// CH 8:

let Maybe = function(x) {
  this._value = x;
};

Maybe.of = x => {
  return new Maybe(x);
};

Maybe.prototype.isNothing = function() {
  // this returns true if _value is null or undefined
  return this._value === null || this._value === undefined;
};

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this._value));
};

log(Maybe.of("Anna Anaa").map(match(/n/gi)));
log(Maybe.of(null).map(match(/a/gi)));

log(Maybe.of("who whoa").map(x => shout(x)));

// CH 8.2 LEARNING PROTOTYPES
function timRR(x) {
  return x * 25;
}
log(timRR(5));

let Booger = function(x) {
  this._value = x;
};
Booger.prototype.timRR = function(cb) {
  return cb(this._value);
};

let booger = new Booger(100);

log(
  booger.timRR(x => {
    return x * 3;
  })
);
