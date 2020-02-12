let express = require("express") 
let server = express()

server.use(express.urlencoded({extended: false}))
server.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p>what color is the sky ona clear and sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})

server.post('/answer', function(req, res) {
    if(req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
        <h1>Right Answer!!</h1>
        <a href="/">Back to homepage </a>
        `)
    }else {
        res.send(`
        <h1>Wrong Answer!!</h1>
        <a href="/">Back to homepage </a>
        `)
    }
})
server.get('/answer', function(req, res) {
    res.send("thank you")
})
server.listen(8000)