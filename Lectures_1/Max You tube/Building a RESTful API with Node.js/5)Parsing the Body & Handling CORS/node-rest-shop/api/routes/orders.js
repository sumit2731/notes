const express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
});
router.post('/', (req,res,next)=>{
    const order ={
        productId: req.body.productId,
        quanity: req.body.quanity
    };
    res.status(200).json({
        message: 'Orders were Created',
        order: order
    });;
});
router.get('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message: 'Orders Details',
        orderId: req.params.orderId
    });
});
router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message: 'Orders Deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;