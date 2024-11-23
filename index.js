// importingr
const express = require("express")
//initialize
const app= new express()
app.use(express.json())

const dbArray = [
    {name:"Zera",age:10},
    {name:"Siya",age:14},
    {name:"Miya",age:14},
];
//api creation
app.get('/',(req,res)=>{
    res.send("message from the server")
})
app.get('/trial',(req,res)=>{
    res.send("trial message")
})
//update method
app.put('/edit',(req,res)=>{
    dbArray.splice(1,1,req.body)
    res.send("Update successfully!!");
});
//delete
app.delete('/del',(req,res)=>{
    dbArray.pop();
    res.send("delete successfully!!")
})

app.get('/view',(req,res)=>{
    res.send(dbArray)
})
app.post('/add',(req,res)=>{
    console.log(req.body)
    dbArray.push(req.body)
    res.send("data add");
    
})
//port
app.listen(8085,()=>{
    console.log("port is running")
})
