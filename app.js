// app.js

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

var roomno = 1;

io.on("connection", function(socket) { 
    console.log("A user connected");

    // Joining a room
    socket.join("room-"+roomno); // This user joins room-1

    // Emitting to a specific room
    io.sockets.in("room-"+roomno).emit('connectedRoom', "You are connected to room no. "+roomno);

    socket.on("disconnect", function() { 
        console.log("A user disconnected");
    });
});

http.listen(3000, function(){
    console.log("Server is running on port 3000");
});
