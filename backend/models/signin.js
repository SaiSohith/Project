const mongoose1=require('mongoose');

<<<<<<< HEAD
const Cart=new mongoose.Schema({
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
    },
    quantity: {
        type: Number
    }
});

=======
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
const user=new mongoose1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
<<<<<<< HEAD
    },
    cart: [Cart],
=======
    }
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
});

module.exports=mongoose1.model('User',user);