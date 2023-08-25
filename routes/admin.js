const express = require('express');
const path = require('path');
const rootDir = require('../util/path')
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    console.log('in another middle ware');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})

// /admin/add-product => POST
router.post('/add-product',(req, res, next) => {
    console.log('Title:', req.body.title);
    console.log('Size:', req.body.size);
    res.redirect('/');
})

module.exports = router;