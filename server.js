const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//middleware
app.use(express.static("/views"));
app.use(bodyParser.urlencoded({extended: true}));
app.set(" view.engine", 'ejs');

//setup listener for server
const server = app.listen(8080, function(){
    console.log("Listening on port: 8080")
})
// set up socketio
const io = require('socket.io')(server);
io.sockets.on('connection', function(socket){
    console.log("Socket connecttion completed")

    socket.on('red', function(color){
        color = "red"
        io.emit('response', color)
    })
    socket.on('green', function(color){
        color = "green"
        io.emit('response', color)
    })
    socket.on('blue', function(color){
        color = "blue"
        io.emit('response', color)
    })



})



// render index.ejs file
app.get('/', function(req, res) {
    
    res.render("index.ejs");
});




