const { response } = require('express');
const express=require('express');
const product = require('../models/product');

const Product=require('../models/product');

const router=express.Router();

router.route('/products').get((req,res,next) => {
    Product.find({})
    .then((resp) => {
        if(resp.length==0)
        {
            const err=new Error({'message':'no details found'})
            throw err;
        }
        else
        {
            res.send(resp)
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});

router.route('/addProduct').post((req,res,next) => {
    Product.create(req.body)
    .then((resp) => {
        res.send(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

router.route('/getproducts/:name').get((req,res,next) => {
    Product.find({name: req.params.name})
    .then((resp) => {
        if(resp.length==0)
        {
            const err=new Error({'message':'no details found'})
            throw err;
        }
        else
        {
            res.send(resp)
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports=router;


