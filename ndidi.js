// const { log } = require("console")
// const http = require("http")
// this is for creating server with http
import http from "http"
const server = http.createServer((req, res) => {
   if(req.url == '/'){
    res.write ("We are home")
    res.end()
   } else if(req.url == "/away"){
    res.write ("We are away")
    res.end()
   } else {
    res.write ("We are no where")
    res.end()
   }
})
server.listen(3000, () => {
    console.log("listening on 3000");
    
})