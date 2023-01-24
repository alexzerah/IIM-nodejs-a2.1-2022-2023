const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log(req.query.year);
    res.json({msg: "Hello world"});
});

app.get('/school', (req, res) => {
    console.log(req.params);
    res.json({msg: "Hello world"});
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.listen(port, () => {
    console.log(`On écoute sur le port ${port}`);
});