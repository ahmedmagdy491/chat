var express = require('express');

var socket = require('socket.io')

var app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index')
})
var server = app.listen(4000,()=>{
    console.log('listenning to port 4000')
});

//Socket io

var io = socket(server);

io.on("connection",(socket)=>{
    console.log("made Socket connection",socket.id);
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
    })
})
