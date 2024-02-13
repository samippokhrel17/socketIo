///......basic informations........///...about how to connect frontend and backend... conceot of .on and .emit..

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


// var users = 0;

// // Socket.IO connection 
// io.on("connection", function(socket) { 
//     console.log("A User connected");  


//     users++;
//     socket.emit("newuserconnect",{message:' Hii, Welcome Brother' }); //this is for new user who is connected  
//     socket.broadcast.emit('newuserconnect',{message: users + "users connected"})
//     // io.sockets.emit is for all the users 
//     // io.sockets.emit("broadcast",{message: users+'users connected!' });   //this for broadcasting i.e all the users will get messages
//     // setTimeout(() => {
//     //     // socket.send("Send Message from server side by prereserved events");
//     //     socket.emit("myCustomEvent",{description:'A custom message from serer side'})//to create constom event emit is used to catch in client side
          
//     //  }, 3000);

//     socket.on('disconnect',function(data){
//         console.log("A user Disconnected");
//         users--;
//         socket.broadcast.emit('newuserconnect',{message: users + "users disconnected"})
//     })
     
// //on works is to catch any events

//     socket.on("disconnect", function() { 
//         console.log("a user disconnected");
//     });
// });

// http.listen(3000, function(){
//     console.log("server is running in port 3000");
// });
 