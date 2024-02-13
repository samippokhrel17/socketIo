// var express = require("express");
// var app = express();
// var http = require('http').Server(app); // Create HTTP server using Express app
// var io = require('socket.io')(http); // Pass the HTTP server to Socket.IO
// var path = require("path");

// app.get("/", function(req, res) {
//     var options = {
//         root: path.join(__dirname)
//     };
//     var fileName = "index.html";
//     res.sendFile(fileName, options); 
// });




// // Socket.IO connection and details here 

// var cnsp = io.of("/custom-namespace");



// cnsp.on("connection", function(socket) { 
//     console.log("A User connected");  
   
//     cnsp.emit('customEvent','Tester event call');

//     socket.on('disconnect',function(data){
//         console.log("A user Disconnected");
//     })
     


//     socket.on("disconnect", function() { 
//         console.log("a user disconnected");
//     });
// });

// http.listen(3000, function(){
//     console.log("server is running in port 3000");
// });
 
