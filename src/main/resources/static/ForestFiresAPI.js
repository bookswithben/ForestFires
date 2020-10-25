// Post issue content to third-party tool and add response as a comment
var connection = new http.Connection('https://api.breezometer.com/fires/v1/current-conditions?lat=34.11&lon=-118.41&key=4a4528e2e1dc4bbcb6d8bd9e0870e168&radius=100');
connection.addHeader('Content-Type', 'text/html');
var response = connection.postSync('/issueRegistry', [], issue.description);
if (response && response.code === 200) {
    issue.addComment(response.response);
}