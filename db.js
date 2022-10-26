const mongoose = require('mongoose')


const connectToMongo = () =>{
    mongoose.connect(process.env.MONGOURI,()=>{
        console.log("Connectd to Mongo Succesfully")
    })
} 

module.exports= connectToMongo;