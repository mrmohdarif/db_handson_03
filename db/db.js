const {MongoClient}=require("mongodb")
const url="mongodb://localhost:27017"
const mongoclient=new MongoClient(url)
try{
    
    mongoclient.connect()
    console.log("connection is runnnig")
}
catch(err)
{
    console.log("connection not running",err);
}

const database=mongoclient.db("Human_resource") //database name
module.exports={database}