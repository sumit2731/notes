const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views','add-product.html'));
    // res.sendFile(path.join(__dirname, '../', 'views','add-product.html'));
    // res.sendFile(path.join(rootDir,'views', 'add-product.html'));
    res.render('./admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, req.body.imageUrl, req.body.description, req.body.price);
    console.log(product);
    product.save();
    res.redirect('/');
};

 exports.getProducts = (req,res,next) => {
     Product.fetchAll((products) => {
         // this path will also work /shop/products
         res.render('./admin/products', {
             prods: products,
             pageTitle: 'Admin Products',
             path: '/admin/products'
         });
     });
 };