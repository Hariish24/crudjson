import express from "express"
import dotenv from "dotenv"
import apirouter from "./router/apirouter.js"


dotenv.config({"path":"./setting/config.env"})

let port = process.env.PORT
let host = process.env.HOST

const app = express()

app.get("/",(req,resp)=>{
    resp.send("Root Request")
})

app.use("/api",apirouter)
app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`sever running successfully : http://${host}:${port}`); //http://127.0.0.1:5050
})