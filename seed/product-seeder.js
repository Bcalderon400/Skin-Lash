var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true, useUnifiedTopology: true });
var products = [
    new Product({
        imagePath: 'https://live-bellalash.nyc3.digitaloceanspaces.com/live-bellalash/media/products/BLA0070V0100/gallery/LashDetoxBundleWEB1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Credential=TS2CW7KGQ6BOJNYH6BNW%2F20191006%2Fnyc3%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20191006T232237Z&X-Amz-Signature=fcb1a7341d18903705f4855f46df2a1453fcf2a46f904cafd1b6db5c0d8300cd',
        title: 'Lash Detox',
        description: 'Bella’s Lash Detox is a foaming, lightweight, oil-free eyelash extension cleanser that can be used as an add-on service for clients to remove make-up from the eye area..',
        price: 15
    }),
    new Product({
        imagePath: 'https://live-bellalash.nyc3.digitaloceanspaces.com/live-bellalash/media/products/BL110/gallery/IntellisealWEB3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Credential=TS2CW7KGQ6BOJNYH6BNW%2F20191006%2Fnyc3%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20191006T232416Z&X-Amz-Signature=4809b11115d5c460a88f73cffe695c21d0e90de9da47036803db420231939b29',
        title: 'Intelliseal',
        description: 'A limited-edition, subtly tinted lip moisturizer that instantly infuses lips with soothing hydration while improving the appearance and volume of lip contours.',
        price: 25
    }),
    new Product({
        imagePath: 'https://live-bellalash.nyc3.digitaloceanspaces.com/live-bellalash/media/products/BLACEK/gallery/AftercareEssentialKitWEB1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Credential=TS2CW7KGQ6BOJNYH6BNW%2F20191006%2Fnyc3%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20191006T232643Z&X-Amz-Signature=38f7e223551d2a6bac1f1e43b9ef7a8b5bd071b2606eb9f8edf20c9d9b960ac7',
        title: 'Essential Kit',
        description: 'The Essential Kit is perfect for resale, increasing lash life and keeping your client’s lashes healthy and full.',
        price: 90
    }),
    new Product({
        imagePath: 'https://live-bellalash.nyc3.digitaloceanspaces.com/live-bellalash/media/products/BL137/gallery/perfecttouchgallery.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Credential=TS2CW7KGQ6BOJNYH6BNW%2F20191006%2Fnyc3%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20191006T233834Z&X-Amz-Signature=bb9852aa742fd533e7eee67ed2fbb729e37beebe6f2ea3c7fa4d9d5010739f68',
        title: 'Perfect Touch Mascara',
        description: 'Phase Two of the Perfect Touch Mascara features intelliSeal technology , which increases extension life with fast acting binders while providing a light mascara look.',
        price: 25
    }),
    new Product({
        imagePath: 'https://live-bellalash.nyc3.digitaloceanspaces.com/live-bellalash/media/products/BLLBD/gallery/brush.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Credential=TS2CW7KGQ6BOJNYH6BNW%2F20191006%2Fnyc3%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20191006T232740Z&X-Amz-Signature=0300c35e23dd2011a32f7145697cc9b2df3cfa5c2b29ff270b94906e7d1d0f83',
        title: 'Lash Brush',
        description: 'The Bella Brush was created specifically for use with the Lash Detox to thoroughly clean between the lashes, ensuring longer retention. ',
        price: 5
    }),
    new Product({
        imagePath: 'https://live-bellalash.nyc3.digitaloceanspaces.com/live-bellalash/media/products/BLS0440V0100/gallery/siliconebrush3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Credential=TS2CW7KGQ6BOJNYH6BNW%2F20191006%2Fnyc3%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20191006T233007Z&X-Amz-Signature=81c392e14eab053c0eb2e55f348f8f4b9f1ac0cfebd62345216d580d8d5706c3',
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