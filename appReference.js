// AN OBJECCT I PLAN ON USING TO MAKE CALLS TO IG EASIER
var igEndPoints = {
    from_the_docs: {
        url: 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + instagramAccessCode,
        method: 'GET'

    },
    media_search: {
        url: 'https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=' + instagramAccessCode,
        method: 'GET'
    },

    popular_media_search: {
        url: 'https://api.instagram.com/v1/media/popular?access_token=' + instagramAccessCode,
        method: 'GET'
    },

    from_SO_search: {
        url: 'https://api.instagram.com/v1/tags/res/media/recent?client_id=' + instagram_client_id + '&callback=' +
            instagram_redirect_uri + '&access_token=' + instagramAccessCode,
        method: 'GET'
    },
    from_SO_search: {
        url: 'https://api.instagram.com/v1/tags/res/media/recent?client_id=' + instagram_client_id + '&callback=' +
            instagram_redirect_uri + '&access_token=' + instagramAccessCode,
        method: 'GET'
    },

    user_search_by_name: {
        url: 'https://api.instagram.com/v1/users/search?q=cthagod&access_token=' + instagramAccessCode,
        method: 'GET'
    },

    // THESE WORK - thisIsCamelCaseAsAnExample this

    self_search: {
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + instagramAccessCode + '&count=300',
        method: 'GET'
    },
    popular_tag_search: {
        url: 'https://api.instagram.com/v1/tags/search?q=red&access_token=' + instagramAccessCode,
        method: 'GET'
    },

    search_popular_by_tag_name: {
        url: 'https://api.instagram.com/v1/tags/nodejs?access_token=' + instagramAccessCode,
        method: 'GET'
    },
    popular_tag_search_tag_name_recent: {
        url: 'https://api.instagram.com/v1/tags/dev/media/recent?access_token=' + instagramAccessCode + '&count=200',
        method: 'GET'
    }
};

// app.post('/ig', function (req, res, next) { 'REQUEST OPTIONS'
var from_the_docs = {
    url: 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + instagramAccessCode,
    method: 'GET'

};
var media_search = {
    url: 'https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=' + instagramAccessCode,
    method: 'GET'
};

var popular_media_search = {
    url: 'https://api.instagram.com/v1/media/popular?access_token=' + instagramAccessCode,
    method: 'GET'
};

var from_SO_search = {
    url: 'https://api.instagram.com/v1/tags/res/media/recent?client_id=' + instagram_client_id + '&callback=' +
        instagram_redirect_uri + '&access_token=' + instagramAccessCode,
    method: 'GET'
}
var from_SO_search = {
    url: 'https://api.instagram.com/v1/tags/res/media/recent?client_id=' + instagram_client_id + '&callback=' +
        instagram_redirect_uri + '&access_token=' + instagramAccessCode,
    method: 'GET'
}

var user_search_by_name = {
    url: 'https://api.instagram.com/v1/users/search?q=cthagod&access_token=' + instagramAccessCode,
    method: 'GET'
}

// THESE WORK - thisIsCamelCaseAsAnExample this

var self_search = {
    url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + instagramAccessCode + '&count=300',
    method: 'GET'
};

var popular_tag_search = {
    url: 'https://api.instagram.com/v1/tags/search?q=red&access_token=' + instagramAccessCode,
    method: 'GET'
};

var search_popular_by_tag_name = {
    url: 'https://api.instagram.com/v1/tags/nodejs?access_token=' + instagramAccessCode,
    method: 'GET'
};
var popular_tag_search_tag_name_recent = {
    url: 'https://api.instagram.com/v1/tags/dev/media/recent?access_token=' + instagramAccessCode + '&count=200',
    method: 'GET'
};

////////
// app.post('/instaInputQuery', function (req, res, next) { 'REQUEST OPTIONS'
var from_the_docs = {
    url: 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + instagramAccessCode,
    method: 'GET'

};
var media_search = {
    url: 'https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=' + instagramAccessCode,
    method: 'GET'
};

var popular_media_search = {
    url: 'https://api.instagram.com/v1/media/popular?access_token=' + instagramAccessCode,
    method: 'GET'
};

var from_SO_search = {
    url: 'https://api.instagram.com/v1/tags/res/media/recent?client_id=' + instagram_client_id + '&callback=' +
        instagram_redirect_uri + '&access_token=' + instagramAccessCode,
    method: 'GET'
}
var from_SO_search = {
    url: 'https://api.instagram.com/v1/tags/res/media/recent?client_id=' + instagram_client_id + '&callback=' +
        instagram_redirect_uri + '&access_token=' + instagramAccessCode,
    method: 'GET'
}

var user_search_by_name = {
    url: 'https://api.instagram.com/v1/users/search?q=cthagod&access_token=' + instagramAccessCode,
    method: 'GET'
}

// THESE WORK

var self_search = {
    url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + instagramAccessCode + '&count=300',
    method: 'GET'
};

var popular_tag_search = {
    url: 'https://api.instagram.com/v1/tags/search?q=red&access_token=' + instagramAccessCode,
    method: 'GET'
};

var search_popular_by_tag_name = {
    url: 'https://api.instagram.com/v1/tags/' + req.body.query + '?access_token=' + instagramAccessCode,
    method: 'GET'
};

var popular_tag_search_tag_name_recent = {
    url: 'https://api.instagram.com/v1/tags/' + req.body.query + '/media/recent?access_token=' + instagramAccessCode + '&count=200',
    method: 'GET'
};
