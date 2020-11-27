const mongoose=require('mongoose');

const Grossoryproduct=new mongoose.Schema({
    position: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports=mongoose.model('Product',Grossoryproduct);