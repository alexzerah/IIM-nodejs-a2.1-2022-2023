const express = require("express");
const cors = require("cors");
const http = require('http');
const {Server} = require("socket.io");

const app = express();
const port = 3000;

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

// Middleware
app.use(express.json());
app.use(cors());

// Sockets
io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("/evenementRoute", (d) => {
        console.log(d);
    })
});

// Routes
app.get('/', (req, res) => {
    console.log(req.query.year);
    res.json({msg: "Hello world"});
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.get('/school', (req, res) => {
    console.log(req.params);
    res.json({msg: "Hello world"});
});

// Ecoute du server
httpServer.listen(port, () => {
    console.log(`On écoute sur le port ${port}`);
});