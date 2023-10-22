const mongoose=require("mongoose");
const Product=require("./models/Product");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceWebsite2")
.then(()=> console.log("db connected sucessfully".yellow))
.catch((err)=> console.log(err));



const products=
[{
    "top":0,
    "name": "H&m Jacket",
    "category": "Jacket",
    "gender": "Men",
    "img": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb0%2F54%2Fb054eea1c1bb844f294c524fdcfe78ead033ff23.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "price": 5000,
    "desc": "Jacket in cotton corduroy with a lined collar. Buttons down the front, a yoke front and back and flap front pockets with a button."
    ,"frequencyOfPurchase":1
},
{
    "top":0,
    "name": "Levis Jeans",
    "category": "Jeans",
    "gender": "Women",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyU6Vlo5I1nH78HvwfY702t5zRS6Kv7xMnJXALAdMVbFniw4wGbeEf1ORfNZnsE1awl8&usqp=CAU",
    "price": 2500,
    "desc": "Straight fit jeans"
},
{
    "top":0,
    "name": "Bata Shoes",
    "category": "Shoes",
    "gender": "Women",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzilXrmrkVq7f_-VnACayM7JOQxuFdKyJ_A&usqp=CAU",
    "price": 1500,
    "desc": "This limited edition sneakers is of Bata"
},
{
    "top":0,
    "name": "Boat Wireless Earphones",
    "category": "Earphones",
    "gender":"Anyone",
    "img": "https://www.jiomart.com/images/product/original/493711847/boat-nirvana-ion-true-wireless-earbuds-charcoal-black-digital-o493711847-p599729528-0-202303230132.jpeg?im=Resize=(420,420)",
    "price": 2200,
    "desc": "Wireless Earphones by Boat upto 120Hrs of playtime"
},
{
    "top": 0,
    "name": "Lavie Handbag",
    "category": "Bags",
    "gender": "Women",
    "img": "https://m.media-amazon.com/images/I/71Fn+A6IekS._UY695_.jpg",
    "price": 1000,
    "desc": "This is a stylish handbag by Lavie,suited for all occasions."
},
{
    "top": 0,
    "name": "Boat Speakers",
    "category": "Speakers",
    "gender": "Anyone",
    "img": "https://m.media-amazon.com/images/I/41TAKjYMgxL._SX300_SY300_QL70_FMwebp_.jpg",
    "price": 900,
    "desc": "Boat Speakers with updo 12Hrs of Total Playtime"
},
{
    "top": 0,
    "name": "Samsung Galaxy M34 5G",
    "category": "Smartphone",
    "gender": "Anyone",
    "img": "https://m.media-amazon.com/images/I/91fonhAtoAL._SX679_.jpg",
    "price": 17000,
    "desc": "Samsung Galaxy M34 5G (Midnight Blue,6GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|12GB RAM with RAM+"
    ,"frequencyOfPurchase":1
},
{
    "top":0,
    "name": "L'Oreal Paris Moisture Filling Shampoo",
    "category": "Shampoo",
    "gender": "Women",
    "img": "https://m.media-amazon.com/images/I/51WWiqR0GDL._SX679_.jpg",
    "price": 689,
    "desc": "L'Oreal Paris Moisture Filling Shampoo, With Hyaluronic Acid, For Dry & Dehydrated Hair, Adds Shine & Bounce, Hyaluron Moisture 72H, 1L"
},
{
    "top":0,
    "name": "Fire-Bott Smartwatch",
    "category": "Watch",
    "gender":"Anyone",
    "img": "https://m.media-amazon.com/images/I/61AHiYyu3ZL._SX679_.jpg",
    "price": 20000,
    "desc": "Fire-Boltt Ninja Call Pro Plus 1.83, Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution"
},
{
    "top": 0,
    "name": "Adidas Shoes",
    "category": "Shoes",
    "gender": "Men",
    "img": "https://m.media-amazon.com/images/I/71sfbi31lhL._UX695_.jpg",
    "price": 3000,
    "desc": "Adidas Men's Clinch-X M Running Shoe"
},
{
    "top":0,
    "name": "Puma Shoes",
    "category":"Shoes",
    "gender":"Men",
    "img": "https://m.media-amazon.com/images/I/71l9T0FBHYL._AC_UL480_FMwebp_QL65_.jpg",
    "price": 1500,
    "desc": "Puma Mens Ultimate Ease Walking Shoe"
},
{
    "top":0,
    "name": "Sony Noise cancellation Headphones",
    "category":"Earphones",
    "gender":"Anyone",
    "img": "https://m.media-amazon.com/images/I/51KGPDttQhL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
    "price": 25000,
    "desc": "Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones,8 Mics for Clear Calling,40Hr Battery,3 Min Quick Charge = 3 Hours Playback"
},
{
    "top":0,
    "name": "Sony Bluetooth Speakers",
    "category": "Speakers",
    "gender":"Anyone",
    "img": "https://m.media-amazon.com/images/I/61MosTpKiPL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
    "price": 4000,
    "desc": "Sony Srs-Xb13 Wireless Extra Bass Portable Bluetooth Speaker with 16 Hours Battery Life, Type-C, Ip67 Waterproof, Dustproof, Speaker with Mic, Loud Audio for Phone Calls/Work from Home (Blue), Small"
    ,"frequencyOfPurchase":1
},
{
    "top":0,
    "name": "Casio Watch",
    "category":"Watch",
    "gender":"Anyone",
    "img": "https://m.media-amazon.com/images/I/61PRynUbNBL._UX522_.jpg",
    "price": 4500,
    "desc": "Casio Vintage Digital Rose-Gold Dial Unisex B650WC-5ADF (D200)"
},
{
    "top":0,
    "name": "Sonata Men's watch",
    "category":"Watch",
    "gender":"Men",
    "img": "https://m.media-amazon.com/images/I/81sa6HPlKeL._UY550_.jpg",
    "price": 1200,
    "desc": "Sonata Analog White Dial Men's Watch"
},
{
    "top":0,
    "name":"Give Gold Diamond Ring",
    "category": "jewellery",
    "gender":"Women",
    "img": "https://m.media-amazon.com/images/I/41n0xjPE5-L._UY695_.jpg",
    "price": 12000,
    "desc": "GIVA 14K Yellow Gold Love for Sparkles Diamond Ring,Fixed Size"
},
{
    "top":0,
    "name": "Giva Silver Necklace",
    "category":"jewellery",
    "gender":"Women",
    "img": "https://m.media-amazon.com/images/I/61G3XnVaI3L._UY695_.jpg",
    "price": 1400,
    "desc": "GIVA 925 Sterling Silver Dew Necklace with Box Chain"
},
{
    "top":0,
    "name": "Women Ethnic Suit by W",
    "category": "dresses",
    "gender":"Women",
    "img": "https://m.media-amazon.com/images/I/81EBE42CThL._UX569_.jpg",
    "price": 2300,
    "desc": "W for Woman Rayon Regular fit suit"
    ,"frequencyOfPurchase":1
},
{
    "top":0,
    "name": "Indo Era Kurti for Women",
    "category":"dresses",
    "gender":"Women",
    "img": "https://m.media-amazon.com/images/I/71iwhn0t7cL._AC_UL480_FMwebp_QL65_.jpg",
    "price": 500,
    "desc": "INDO ERA Women's Cotton Embllished A-Line Kurti"
},
{
    "top":0,
    "name": "Levis T-shirt For Women",
    "category":"dresses",
    "gender":"Women",
    "img": "https://m.media-amazon.com/images/I/51MLCbhGC0L._UX679_.jpg",
    "price": 500,
    "desc": "Levi's Women T-Shirt"
},
{
    "name": "Liberty shoes",
    "img": "https://www.libertyshoesonline.com/pub/media/catalog/product/cache/036e1f77cd3178c76f889f39e301037b/m/o/montes-22_maroon_1.jpg",
    "price": 1000,
    "desc": "Force 10 Sports Slip On Shoes Mens (MAROON) MONTES-22 By Liberty"
},
{
    "top":0,
    "name": "Oppo Enco X",
    "category":"Earphones",
    "gender":"Anyone",
    "img": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR4lO_yM8NqtD4Eiv8IFvBgfWg4tx2197BvtA5ewI90H0TVbkDin-0wk1yLiU_vBSwACPjBpEiQbeeZH6CFiy5moUVj43biJJrLQmc85yxurWPEp59eXvLu4p6QHL0LKRj2Qoemkw&usqp=CAc",
    "price": 9500,
    "desc": "Oppo Enco X Bluetooth Truly Wireless in Ear Earbuds with Mic (White)"
    ,"frequencyOfPurchase":1
},
{
    "top":0,
    "name": "Samsung Galaxy S23",
    "category":"Smartphone",
    "gender":"Anyone",
    "img": "https://m.media-amazon.com/images/I/41kyuER2HjL._SX300_SY300_QL70_FMwebp_.jpg",
    "price": 129000,
    "desc": "Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage)"
},
{
    "top":0,
    "name": "AJILE Black Solid Full Length Casual Women Loose Fit Pants",
    "category":"dresses",
    "gender":"Women",
    "img": "https://imagescdn.pantaloons.com/img/app/product/9/906969-11186370.jpg?q=75&auto=format&w=250&h=400",
    "price": 1000,
    "desc": "Constructed with the best quality material, that allows a pleasant and fuss-free wearing expertise."
}

]

async function seedProducts(){


    await Product.deleteMany({})
    await Product.insertMany(products);

   console.log("products have been seeded sucessfully")

}
seedProducts();

