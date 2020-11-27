const express1=require('express');

const User=require('../models/signin');

const Srouter=express1.Router();

Srouter.route('/allusers').get((req,res,next) => {
    User.find({})
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

Srouter.route('/addUser').post((req,res,next) => {
    User.create(req.body)
    .then((resp) => {
        res.send(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

Srouter.route('/getUser/:email/:password').get((req,res,next) => {
    User.find({email: req.params.email, password: req.params.password})
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

module.exports=Srouter;
