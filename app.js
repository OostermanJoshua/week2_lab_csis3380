const express = require('express');
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res) => {
    res.send(`<h1>Hello ${req.body.user} </h1>
    <br>
    <h2> your password is ${req.body.password} </h2>`);

});

app.get('*', (req, res) => {
    res.send("Page Not Found")
});


app.listen(5000, () => {
    console.log('server is running on port 5000')
})
