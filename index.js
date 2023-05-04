const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const allChefs = require('./data.json')

app.get('/', (req, res) => {
    res.send('Welcome to chef area')
})
app.get('/allData', (req, res) => {
    res.send(allChefs)
})

app.get('/allData/:id', (req, res) =>{

    const id = req.params.id;
    const selectedNews = allChefs.find(n=> n.id == id);
    res.send(selectedNews)
})

app.listen(5000, () => {
    console.log('server is running on port 5000');
})


