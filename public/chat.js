//make connection

var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message')
    handle = document.getElementById('handle')
    output = document.getElementById('output')
    btn = document.getElementById('send')
    feedback = document.getElementById('feedback')

btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message : message.value,
        handle : handle.value
    })
    
})

socket.on('chat',(data)=>{
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>'+ data.handle + '</strong>: ' + data.message + '</p>'
    
})

message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value)
})

socket.on('typing',(data)=>{
    feedback.innerHTML = '<p><em>' + data +' is typing a message ...'+'</em></p>'
})