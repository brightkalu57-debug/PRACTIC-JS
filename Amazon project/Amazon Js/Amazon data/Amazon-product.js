class Product {
    id;
    img;
    name;
    ratingstars;
    ratingno;
    pricecents;
    keywords;

    constructor(ProductDetails){
        this.id =  ProductDetails.id
        this.img = ProductDetails.img
        this.name = ProductDetails.name
        this.ratingstars = ProductDetails.ratingstars
        this.ratingno = ProductDetails.ratingno
        this.pricecents = ProductDetails.pricecents
        this.keywords = ProductDetails.keywords
    }
}

class Clothing extends Product {
    constructor(ProductDetail){
        super(ProductDetail);
    }
}

export const product = [{
    id: 1,
    img: '../Amazon images/athletic-cotton-socks-6-pair. Amazon.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    ratingstars: '45',
    ratingno: 87,
    pricecents: 1090,
    type: Clothing,
    keywords: ["Socks", "Sox", "Hosiery", "Stockings", "Footwear"]
},{
    
    id: 2,
    img: '../Amazon images/intermediate-composite-basketball. Amazon.jpg',
    name: 'Intermediate Size Basketball',
    ratingstars: '4',
    ratingno: 127,
    pricecents: 2095,
    keywords: ["Size 7 basketball", "Size 6 basketball", "Size 5 basketball", "Mini basketball"]
},{ 
    id: 3,
    img: '../Amazon images/adults-plain-cotton-tshirt-2-pack-teal.Amazon.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    ratingstars: '45',
    ratingno: 56,
    pricecents: 799,
    type: Clothing,
    keywords: ["Adults Plain Cotton T-Shirt", "100% cotton short-sleeve shirt", "Classic crewneck t-shirt"]
},{
    id: 4,
    img: '../Amazon images/black-2-slot-toaster.Amazon.jpg',
    name: '2 Slot Toaster - Black',
    ratingstars: '5',
    ratingno: 2197,
    pricecents: 1899,
    keywords: ["2 slot toaster black", "Black 2-slice toaster", "Two slice toaster black"]
},{
    id: 5,
    img: '../Amazon images/6-piece-white-dinner-plate-set.Amazon.jpg',
    name: '6 Piece White Dinner Plate Set',
    ratingstars: '4',
    ratingno: 37,
    pricecents: 2067,
    keywords: ["6 piece white dinner plate set", "white dinner plates", "white dishes for 6","modern dinnerware"]
},{
    id: 6,
    img: '../Amazon images/6-piece-non-stick-baking-set.Amazon.webp',
    name: '6-Piece Nonstick, Carbon Steel Oven Bakeware Bakin',
    ratingstars: '45',
    ratingno: 175,
    pricecents: 3499,
    keywords: ["Carbon steel bakeware", "6-piece baking pan", "setNonstick oven bakeware", "Metal baking trays"]
},{
    id: 7,
    img: '../Amazon images/plain-hooded-fleece-sweatshirt-yellow.Amazon.jpg',
    name: 'Plain Hooded Fleece Sweatshirt',
    ratingstars: '45',
    ratingno: 175,
    pricecents: 2400,
    keywords: ["hoodie", "fleece", "sweatshirt", "plain", "outerwear"]
},{
    id: 8,
    img: '../Amazon images/luxury-tower-set-6-piece.Amazon.jpg',
    name: 'Luxury Towel Set - Graphite Gray',
    ratingstars: '45',
    ratingno: 144,
    pricecents: 3599,
    type: Clothing,
    keywords: ["Luxury Towel Set", "Graphite Gray", "Premium Cotton Towels", "Plush Bath Sheets", "Dark Gray Towels"]
},{
    id: 9,
    img: '../Amazon images/liquid-laundry-detergent-plain.Amazon.jpg',
    name: 'Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz',
    ratingstars: '45',
    ratingno: 305,
    pricecents: 2899,
    keywords: ["liquid", "laundry", "detergent", "110 loads", "82.5 oz"]
},{
    id: 10,
    img: '../Amazon images/knit-athletic-sneakers-gray.Amazon.jpg',
    name: 'Waterproof Knit Athletic Sneakers - Gray',
    ratingstars: '4',
    ratingno: 89,
    pricecents: 3390,
    keywords: ["waterproof", "knit", "athletic", "sneakers", "gray"]
},{
    id: 11,
    img: '../Amazon images/women-chiffon-beachwear-coverup-black.Amazon.jpg',
    name: `Women's Chiffon Beachwear Cover Up - Black`,
    ratingstars: '45',
    ratingno: 235,
    pricecents: 2070,
    type: Clothing,
    keywords: ["black chiffon cover up", "beach cover up", "swimwear coverup", "black beachwear"]
},{
    id: 12,
    img: '../Amazon images/round-sunglasses-black.Amazon.jpg',
    name: `Round Sunglasses`,
    ratingstars: '45',
    ratingno: 30,
    pricecents: 1560,
    keywords: ["round", "sunglasses", "vintage", "circle", "eyewear"]
},{
    id: 13,
    img: '../Amazon images/women-beach-sandals.Amazon.jpg',
    name: `Women's Two Strap Buckle Sandals - Tan`,
    ratingstars: '45',
    ratingno: 562,
    pricecents: 2499,
    keywords: ["sandals", "tan", "buckle", "straps", "women"]
},{
    id: 14,
    img: '../Amazon images/blackout-curtain-set-beige.Amazon.webp',
    name: `Blackout Curtains Set 4-Pack - Beige`,
    ratingstars: '45',
    ratingno: 232,
    pricecents: 4599,
    keywords: ["blackout", "curtains", "beige", "4-pack"]
},{
    id: 15,
    img: '../Amazon images/men-slim-fit-summer-shorts-gray.Amazon.jpg',
    name: `Men's Slim-Fit Summer Shorts`,
    ratingstars: '45',
    ratingno: 160,
    pricecents: 1699,
    type: Clothing,
    keywords: ["Summer", "Men's", "Slim-Fit", "Shorts", "chino"]
},{
    id: 16,
    img: '../Amazon images/electric-glass-and-steel-hot-water-kettle.Amazon.webp',
    name: `Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter`,
    ratingstars: '5',
    ratingno: 846,
    pricecents: 3074,
    keywords: ["electric kettle", "glass", "hot water", "1.7 liter kettle", "steel tea kettle"]
},{
    id: 17,
    img: '../Amazon images/facial-tissue-2-ply-18-boxes.Amazon.jpg',
    name: `Ultra Soft Tissue 2-Ply - 18 Box`,
    ratingstars: '4',
    ratingno: 99,
    pricecents: 2374,
    keywords: ["facial tissue", "ultra soft", "2-ply tissue", "tissue box", "bulk tissue"]
},{
    id: 18,
    img: '../Amazon images/straw-sunhat.Amazon.webp',
    name: `Straw Lifeguard Sun Hat`,
    ratingstars: '4',
    ratingno: 215,
    pricecents: 2200,
    keywords: ["Straw", "Lifeguard", "Sun", "Hat", "Beach"]
},{
    id: 19,
    img: '../Amazon images/sky-flower-stud-earrings.Amazon.webp',
    name: `Sterling Silver Sky Flower Stud Earrings`,
    ratingstars: '45',
    ratingno: 52,
    pricecents: 1799,
    keywords: ["Sterling", "Silver", "Sky", "Flower", "Stud"]
},{
    id: 20,
    img: '../Amazon images/women-stretch-popover-hoodie-black.Amazon.jpg',
    name: `Women's Stretch Popover Hoodie`,
    ratingstars: '45',
    ratingno: 2465,
    pricecents: 1374,
    type: Clothing,
    keywords: ["women", "stretch", "popover", "hoodie", "comfortable"]
},{
    id: 21,
    img: '../Amazon images/bathroom-rug.Amazon.jpg',
    name: `Bathroom Bath Rug Mat 20 x 31 Inch - Grey
    `,
    ratingstars: '45',
    ratingno: 119,
    pricecents: 1250,
    keywords: ["grey bath mat", "20x31 rug", "bathroom mat", "grey rug"]
},{
    id: 22,
    img: '../Amazon images/women-knit-ballet-flat-black.Amazon.jpg',
    name: `Women's Knit Ballet Flat`,
    ratingstars: '4',
    ratingno: 326,
    pricecents: 2640,
    keywords: ["women", "knit", "ballet", "flat"]
},{
    id: 23,
    img: '../Amazon images/men-golf-polo-t-shirt-blue.Amazon.jpg',
    name: `Men's Regular-Fit Quick-Dry Golf Polo Shirt`,
    ratingstars: '45',
    ratingno: 2556,
    pricecents: 1599,
    type: Clothing,
    keywords: ["men's golf polo", "quick dry", "regular fit", "athletic shirt", "mens polo shirt"]
},{
    id: 24,
    img: '../Amazon images/trash-can-with-foot-pedal-50-liter.Amazon.jpg',
    name: `Trash Can with Foot Pedal - Brushed Stainless Steel`,
    ratingstars: '45',
    ratingno: 2286,
    pricecents: 8300,
    keywords: ["trash can", "foot pedal", "brushed stainless steel", "step trash can", "metal bin"]
},{
    id: 25,
    img: '../Amazon images/duvet-cover-set-blue-twin.Amazon.jpg',
    name: `Duvet Cover Set with Zipper Closure`,
    ratingstars: '4',
    ratingno: 456,
    pricecents: 2399,
    keywords: ["duvet cover", "duvet cover set", "zipper duvet cover", "bedding set", "zipper closure duvet"]
},{
    id: 26,
    img: '../Amazon images/women-chunky-beanie-gray.Amazon.webp',
    name: `Women's Chunky Cable Beanie - Gray`,
    ratingstars: '5',
    ratingno: 23,
    pricecents: 1250,
    keywords: ["chunky beanie", "cable knit hat", "gray beanie", "womens winter hat", "cozy knit cap"]
},{
    id: 27,
    img: '../Amazon images/men-chino-pants-beige.Amazon.jpg',
    name: `Men's Classic-fit Pleated Chino Pants`,
    ratingstars: '45',
    ratingno: 9017,
    pricecents: 2290,
    keywords: ["Men's", "Classic-fit", "Pleated", "Chinos", "Pants"]
},{
    id: 28,
    img: '../Amazon images/men-athletic-shoes-green.Amazon.jpg',
    name: `Men's Athletic Sneaker`,
    ratingstars: '4',
    ratingno: 229,
    pricecents: 3890,
    type: Clothing,
    keywords: ["men's", "athletic", "sneakers", "running", "shoes"] 
},{
    id: 29,
    img: '../Amazon images/men-navigator-sunglasses-brown.Amazon.jpg',
    name: `Men's Navigator Sunglasses Pilot`,
    ratingstars: '35',
    ratingno: 42,
    pricecents: 1690,
    keywords: ["navigator", "pilot", "mens", "sunglasses", "aviator"]
},{
    id: 30,
    img: '../Amazon images/non-stick-cooking-set-15-pieces.Amazon.webp',
    name: `Non-Stick Cookware Set, Pots, Pans and Utensils - 15`,
    ratingstars: '45',
    ratingno: 511,
    pricecents: 6797,
    keywords: ["non-stick", "cookware", "pots", "pans", "utensils"]
},{
    id: 31,
    img: '../Amazon images/vanity-mirror-silver.Amazon.jpg',
    name: `Vanity Mirror with Heavy Base - Chrome`,
    ratingstars: '45',
    ratingno: 130,
    pricecents: 1649,
    keywords: ["heavy base mirror", "chrome vanity mirror", "weighted makeup mirror"]

},{
    id: 32,
    img: '../Amazon images/women-french-terry-fleece-jogger-camo.Amazon.jpg',
    name: `Women's Fleece Jogger Sweatpant`,
    ratingstars: '45',
    ratingno: 248,
    pricecents: 2400,
    type: Clothing,
    keywords: ["women", "fleece", "jogger", "sweatpants"]
},{
    id: 33,
    img: '../Amazon images/double-elongated-twist-french-wire-earrings.Amazon.webp',
    name: `Double Oval Twist French Wire Earrings - Gold`,
    ratingstars: '45',
    ratingno: 117,
    pricecents: 2400,
    keywords: ["gold earrings", "oval earrings", "twist earrings", "wire earrings", "double earrings"]
},{
    id: 34,
    img: '../Amazon images/round-airtight-food-storage-containers.Amazon.jpg',
    name: `Round Airtight Food Storage Containers - 5 Piece`,
    ratingstars: '4',
    ratingno: 126,
    pricecents: 2899,
    keywords: ["airtight", "storage", "containers", "kitchen", "plastic"]
},{
    id: 35,
    img: '../Amazon images/coffeemaker-with-glass-carafe-black.Amazon.jpg',
    name: `Coffeemaker with Glass Carafe and Reusable Filter -`,
    ratingstars: '45',
    ratingno: 1211,
    pricecents: 2250,
    keywords: ["coffee", "maker", "glass", "carafe", "filter"]
},{
    id: 36,
    img: '../Amazon images/blackout-curtain-set-beige.Amazon.webp',
    name: `Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels`,
    ratingstars: '45',
    ratingno: 363,
    pricecents: 3099,
    keywords: ["blackout curtains", "black curtains", "84 inch curtains", "2 panel curtains", "window curtains"]
},{
    id: 37,
    img: '../Amazon images/cotton-bath-towels-teal.Amazon.webp',
    name: `100% Cotton Bath Towels - 2 Pack, Light Teal`,
    ratingstars: '45',
    ratingno: 93,
    pricecents: 2110,
    keywords: ["cotton bath towels", "light teal towels", "bath towel set", "2 pack towels", "100% cotton"]
},{
    id: 38,
    img: '../Amazon images/knit-athletic-sneakers-pink.Amazon.webp',
    name: `Waterproof Knit Athletic Sneakers - Pink`,
    ratingstars: '4',
    ratingno: 89,
    pricecents: 3390,
    keywords: ["waterproof", "knit", "athletic", "sneakers", "pink"]
},{
    id: 39,
    img: '../Amazon images/countertop-blender-64-oz.Amazon.jpg',
    name: `Countertop Blender - 64oz, 1400 Watts`,
    ratingstars: '4',
    ratingno: 3,
    pricecents: 10747,
    keywords: ["blender", "countertop", "1400W", "64oz", "mixer"]
},{
    id: 40,
    img: '../Amazon images/floral-mixing-bowl-set.Amazon.jpg',
    name: `10-Piece Mixing Bowl Set with Lids - Floral`,
    ratingstars: '5',
    ratingno: 679,
    pricecents: 3899,
    keywords: ["mixing bowls", "floral bowls", "bowls with lids", "10 piece set"]
},{
    id: 41,
    img: '../Amazon images/kitchen-paper-towels-30-pack.Amazon.jpg',
    name: `2-Ply Kitchen Paper Towels - 30 Pack`,
    ratingstars: '45',
    ratingno: 1045,
    pricecents: 5799,
    keywords: ["2-ply", "kitchen", "paper", "towels", "30-pack"]
},{
    id: 42,
    img: '../Amazon images/men-cozy-fleece-zip-up-hoodie-red.Amazon.jpg',
    name: `Men's Full-Zip Hooded Fleece Sweatshirt`,
    ratingstars: '45',
    ratingno: 3157,
    pricecents: 2400,
    type: Clothing,
    keywords: ["mens hoodie", "full zip sweatshirt", "fleece jacket", "zipped hoodie", "mens fleece"]
}
].map((ProductDetail)=>{
    if (ProductDetail.type === Clothing){
       return new Clothing (ProductDetail)
    }
    return new Product(ProductDetail);
})
