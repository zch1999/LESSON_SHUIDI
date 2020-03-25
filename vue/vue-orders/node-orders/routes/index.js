const express = require('express');
const orders = express.Router();
const db = require('../db/db.js');
const Order = require('../models/order.js');

orders.get('/', async(req, res) => {
  // res.json({
  //   mes: "ok"
  // })
  let { page = 1, limit = 20 } = req.query
  Order.countDocuments({}, (err,count) => {
    if(err){
      res.json({
        status: 400,
        msg: JSON.stringify(err)
      })
    }else{
      Order
        .find({})
        .skip((page - 1)*limit)
        .limit(limit)
        .sort(
          {
            'orderDate': -1
          }
        ).exec((err,docs) => {
          if(err){
            res.json({
              status: 400,
              msg: JSON.stringify(err)
            })
          }else{
            res.json({
              
            })
          }
        })
    }
  })
})


module.exports =  (app) => {
  app.use('/orders', Order);
}