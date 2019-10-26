var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true, useUnifiedTopology: true });
var products = [
    new Product({
        imagePath: 'data:image/jpeg;base64,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',
        title: 'Lash Detox',
        description: 'Bella’s Lash Detox is a foaming, lightweight, oil-free eyelash extension cleanser that can be used as an add-on service for clients to remove make-up from the eye area..',
        price: 15
    }),
    new Product({
        imagePath: 'https://www.essentialmedtools.com/site/wp-content/uploads/intelliseal2.jpg',
        title: 'Intelliseal',
        description: 'A limited-edition, subtly tinted lip moisturizer that instantly infuses lips with soothing hydration while improving the appearance and volume of lip contours.',
        price: 25
    }),
    new Product({
        imagePath: 'https://www.essentialmedtools.com/site/wp-content/uploads/AftercareEssentialKitWEB31.jpg',
        title: 'Essential Kit',
        description: 'The Essential Kit is perfect for resale, increasing lash life and keeping your client’s lashes healthy and full.',
        price: 90
    }),
    new Product({
        imagePath: 'https://www.beelineindustries.com/assets/images/bl137.jpg',
        title: 'Perfect Touch Mascara',
        description: 'Phase Two of the Perfect Touch Mascara features intelliSeal technology , which increases extension life with fast acting binders while providing a light mascara look.',
        price: 25
    }),
    new Product({
        imagePath: 'https://www.essentialmedtools.com/site/wp-content/uploads/Detox-Brush-1.jpg',
        title: 'Lash Brush',
        description: 'The Bella Brush was created specifically for use with the Lash Detox to thoroughly clean between the lashes, ensuring longer retention. ',
        price: 5
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0527/3001/products/Sephora_Collection_Disposable_Mascara_Wands_Fall_2014_2__32263_2048x.jpeg?v=1527643830',
        title: 'Silicone Mascara Wands',
        description: 'No snag, smooth gliding silicone brushes are essential for any lash artist. These wands will help comb, separate and smooth lashes instead of fluffing and deep brushing. ',
        price: 9
    })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}