const express=require('express')
const app=express()
const router=require('./route')

app.use(express.json())  //it is must to use this  middle ware when you get data from client
app.use("/api",router)

app.listen(4000,()=>{
 
    console.log("your are run");
})