const express = require('express')
const app = express()
const router = require('./routes/index.js')
const db = require('./db/db.js')
router(app)

app.listen('3000',()=>{
    console.log('3000')
})