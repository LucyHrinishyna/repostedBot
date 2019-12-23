const express = require('express');
const axios = require('axios').default;
const app = express();
const PORT = 8080;
const FB = require('fb');
let body;

axios.post('https://waiviodev.com/api/user/openseed/blog').then(response => body = response.data);
app.get('/', (req, res) => {
    res.send(body);
});
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});

FB.setAccessToken('EAAGQgZAhJ3e0BALWz1sxMYIme0QbLGcZBLAsHJAPW5ZBu5aga0BSb4N9kpDrI4dDjlnjPKNJTiSRqQsIZCkRUXZB7fy1l1UzB2jmZC86o3AGcFVekwc33FgaTqWggZBEMAgrGe3BQZCDqT72jZAolqZCf2lJxqgPY0mI9lRSducjOi9vXXgU5pGA5zaapZAMO25yWlZAAR3HUSCb050tgSxijxiP95fMx7URkWEZD');

const wallPost = {
    access_token: "EAAGQgZAhJ3e0BALWz1sxMYIme0QbLGcZBLAsHJAPW5ZBu5aga0BSb4N9kpDrI4dDjlnjPKNJTiSRqQsIZCkRUXZB7fy1l1UzB2jmZC86o3AGcFVekwc33FgaTqWggZBEMAgrGe3BQZCDqT72jZAolqZCf2lJxqgPY0mI9lRSducjOi9vXXgU5pGA5zaapZAMO25yWlZAAR3HUSCb050tgSxijxiP95fMx7URkWEZD",
    message: 'Hello, World!'
};

var bodyl = 'My first post using facebook-node-sdk';
var message = 'Hi from facebook-node-js';
FB.api('', 'post', {
    batch: [
        { method: 'post', relative_url: 'me/feed', body:'message=' + encodeURIComponent(message) }
    ]
}, function (res) {
    var res0;

    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    res0 = JSON.parse(res[0].body);

    if(res0.error) {
        console.log(res0.error);
    } else {
        console.log('Post Id: ' + res0.id);
    }
});
