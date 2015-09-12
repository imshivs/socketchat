//Add express for simplified http server
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
//Initiate http server
var app = express();


//Include static HTML in the 'html' directory
// app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

//Start the http server on port 4005
var server = app.listen(4005);
server.listen(4005, function() {
    console.log('Server listening at http://localhost:4005/');
});

// var io = sio.listen(server);

// io.on('connection', function(socket) {
// socket.on('sendMessage', function(message) {
//         socket.broadcast.emit('newMessage', message)
//         });
// });