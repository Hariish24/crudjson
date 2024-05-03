
import express from "express"
import fs from "fs"

const apirouter = express.Router()

apirouter.get("/",(req,resp)=>{
    resp.send("api Request")
})

apirouter.get("/read",(req,resp)=>{
    let employees=getEmployees()
    console.log(employees);
    resp.status(200).json(employees)
    resp.send(employees)
})

let getEmployees = ()=>{
    let flag = fs.readFileSync("emp.json","utf-8")
    return JSON.parse(flag)

    let saveEmployees = (employees)=>{
        fs.writeFileSync("emp.json",JSON.stringify(employees))
      }
}




export default apirouter