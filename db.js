const mongoose = require('mongoose')

const mongouri = "mongodb+srv://SinghYuvraj0506:Yohoney%402002@cluster0.nuuez0u.mongodb.net/amazon_Clone?retryWrites=true&w=majority"
//const mongouri = "mongodb://localhost:27017/amazon_Clone"


const connectToMongo = () =>{
    mongoose.connect(mongouri,()=>{
        console.log("Connectd to Mongo Succesfully")
    })
} 

module.exports= connectToMongo;