const express = require('express');
// here we set up express router, it is like subpackage that express shipd up
// it gives us diffrent to handle diffrent capabilities to handle diffrent routes
const router = express.Router();
//here we want to handle get request for '/products' but here we gave url as '/' because i want to send request to this
//produts.js file for incoming request targetting anything with  '/products' at begining of url
//so anything reaching here will already have '/products' at begining of url, so i need to parse after that
router.get('/',(req,res,next)=> {
    res.status(200).json({
        message: 'Handling GET Request tto /products'
    });
});
router.post('/',(req,res,next)=> {
    const product ={
        //we have body property on req because we used body-parser as middle ware
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling POST Request to /products',
        createdProduct: product
    });
});
// here productId is variable and we can extract the value of it
router.get('/:productId',(req,res,next)=> {
     const id = req.params.productId;
     if(id === 'special')
     {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
     }
     else {
         res.status(200).json({
             message: 'You passes an ID' 
         });
     }
});


router.patch('/:productId', (req,res,next)=>{
    // here we are not returning the response because there is no code running after this
    //we dnt make it into next handle i.e delete bcoz we want either patch or delete to be executed

    //we need to use return if we also have have some code running after sending repsonse , where we potentially 
    //send back another resonse, like this-
    // return res.status(200).json({
    //     message: 'This is First Response'
    // });
    // res.status(200).json({
    //     message: 'This is Second Repsonse'
    // });
    res.status(200).json({
        message: 'Product updated'
    });
});
router.delete('/:productId',(req,res,next) =>{
    res.status(200).json({
        message: 'Product Deleted'
    });
});
//here we exporting the configured router, so that it can be used in other files like app.js, where we import
//these routes 
module.exports = router;
