/**
 * HTTP Server code
 * Created by mike on 15/08/15.
 */

var http = require("http");
var url = require("url");

function start(route, handle) {

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    }

    const server = http.createServer(onRequest);

    server.listen(8080, "0.0.0.0", () => {
        const { address, port } = server.address();
        console.log(`Server running at http://${address}:${port}`);
    });
}

exports.start = start;
