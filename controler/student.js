const {database}=require("../db/db")

const model=require('../controler/schemavalidation')
// console.log(model());
// const customer_data=database.collection("employee")

const insertData=async(req,res)=>{
const {name,salary,experience,yearGrad,lastCompany}=req.body;
const tempobj= await model({
name:name,
salary:salary,
experience:experience,
yearGrad:yearGrad,
 lastCompany: lastCompany
   
});
const user=await tempobj.save()
console.log(user)
//return res.send(({message:"data push sucessfully",result:user}))
}
const fetchData=async(req,res)=>{
 const allData=await model.find()
 res.send({"alldata":allData})
}
const range=async(req,res)=>{
    const data=req.body;
    const result=await model.find({"salary":{"$gt":"30000"}}).toArray()
    // result.push(data) 
    res.send({"msg":result})
}
const exp=async(req,res)=>{
    const data=req.body;
    const result=await model.find({"overallExp":{"$gt":"2"}}).toArray()
    // result.push(data) 
    res.send({"msg":result})
}

const gra_year=async(req,res)=>{
    const data=req.body;
    const result=await model.find({"yearGrad":{"$gt":"2015"},"overallExp":{"$gt":"1"}}).toArray()
    // result.push(data) 
    res.send({"msg":result})
}

const Update_salary=async(req,res)=>{
    const data=req.body;
    const result=await model.updateMany({"salary":{"$gt":"70000"}},{$set:{"salary":"65000"}})
    // result.push(data) 
    res.send({"msg":result})
}

const delete_data=async(req,res)=>{
    const data=req.body;
    const result=await model.deleteMany({"lastCompany":"Y"})
    // result.push(data) 
    res.send({"msg":result})
}

module.exports={insertData,fetchData,range,exp, gra_year,Update_salary,delete_data,}

