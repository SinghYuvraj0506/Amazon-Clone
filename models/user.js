const mongoose = require("mongoose")

const {Schema} = mongoose;

const OrderSchema= new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    basket:{
        type:Object,
        required:true
    },
    amount:{
        type:Object,
        required:true
    },
    created:{
        type:Object,
        required:true
    },
    payment_id:{
        type:String,
        required:true
    }

})



module.exports = mongoose.model('order',OrderSchema)