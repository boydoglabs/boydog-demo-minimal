const http = require("http")
const express = require('express')
const app = express()
const server = http.createServer(app)
const boydog = require('boydog')
const boy = boydog(server)

var scope = {
  editor: "boydog"
}

boy.attach(scope)

app.get('/', (req, res) => {
  return res.sendFile(__dirname + "/index.html")
})

server.listen(3091, () => console.log("Example app listening on 3091"))
