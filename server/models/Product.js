import mongoose, { model, models } from 'mongoose';

const ProductModel = mongoose.Schema({
    name: String,
    location: String,
    type: String
});

module.exports = mongoose.model('Product', ProductModel);