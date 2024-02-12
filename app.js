var express = require("express");
var app = express();
var http = require('http').Server(app); // Create HTTP server using Express app
var io = require('socket.io')(http); // Pass the HTTP server to Socket.IO
var path = require("path");

app.get("/", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };
    var fileName = "index.html";
    res.sendFile(fileName, options); 
});

// Socket.IO connection
io.on("connection", function(socket) { 
    console.log("a user connected");  

    // setTimeout(() => {
    //     // socket.send("Send Message from server side by prereserved events");
    //     socket.emit("myCustomEvent",{description:'A custom message from serer side'})//to create constom event emit is used to catch in client side
          
    //  }, 3000);
     
//on works is to catch any events

    socket.on("disconnect", function() { 
        console.log("a user disconnected");
    });
});

http.listen(3000, function(){
    console.log("server is running in port 3000");
});
 