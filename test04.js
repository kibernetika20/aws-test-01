var server = require('http').createServer(handler); // on req uporabimo "handler" funkcijo;
var fs = require("fs"); // variable for file system for providing html
console.log("Starting the code");

const port = 8080;

function handler(req, res) {
    
    if(req.url === '/') {
        fs.readFile(__dirname + "/test04.html",function(err,data){
            // Upoštevanje napake ("Error handling")
            if (err) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            return res.end("Error loading html page.");
            }
            
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            res.end();
            });
            }
            
            else if(req.url === '/test04.css') {
                fs.readFile(__dirname + "/test04.css",function(err,data){
                // Upoštevanje napake ("Error handling")
                if (err) {
                    res.writeHead(500, {"Content-Type": "text/plain"});
                    return res.end("Error loading css file.");
                }
                res.writeHead(200,{"Content-Type": "text/css"});
                res.write(data);
                res.end();
                });
            }


}

server.listen(8080, '172.31.32.198'); // Or 8081 or 8082 instead of 8080. Or '127.0.0.1' instead of 'localhost'.