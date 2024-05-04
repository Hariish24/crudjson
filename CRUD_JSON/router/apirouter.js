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

apirouter.post("/create",(req,resp)=>{
    let emp = req.body
    console.log(emp);
    let employees=getEmployees()
    let flags = employees.find((employee)=>{
        return employee.id == emp.id
    })

    if(flags){
      return send.resp({"msg":"Employee already exist"})  
    }

    employees.push(emp)
    saveEmployees(employees)
    return resp.send({"msg":"Emyployees created successfully"})
})

let getEmployees = ()=>{
    let flag = fs.readFileSync("emp.json","utf-8")
    return JSON.parse(flag)
}

// let saveEmployees = (employees)=>{
//    let data = fs.writeFileSync("emp.json", JSON.stringify(employees))

//   }
let saveEmployees =(employees) =>{
    let data = fs.writeFileSync("emp.json",JSON.stringify(employees))
  }

export default apirouter