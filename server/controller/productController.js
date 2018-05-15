import Product from '../models/Product'

exports.indexProduct = (req, res, next) => {
    Product.find(null, (err, products) => {
        res.render('index', {
            products
        });
    })
    .catch(next);
};

exports.addProduct = (req, res,next) => {
    Product.create((req.body), (err,product) => {
        res.redirect('/');
    });
};

exports.updateProduct = (req, res, next) => {
    console.log(req.body);
    Product.findByIdAndUpdate(req.params.id, req.body, null, (err, product) => {
        res.redirect('/');
    });
};

exports.deleteProduct = (req, res, next) => {
    Product.findByIdAndDelete(req.params.id, null, (err, product) => {
        res.redirect('/');
    });
};