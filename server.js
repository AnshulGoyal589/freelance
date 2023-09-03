const express = require('express');
const flash = require('connect-flash');
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const colors = require("colors");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const PORT=8000;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User=require("./models/User");
const FacebookStrategy=require("passport-facebook").Strategy;
const {isLoggedIn}=require("./middleware");



mongoose.connect("mongodb://127.0.0.1:27017/ecomm-careerbootcamp")
.then(()=> console.log("db connected sucessfully".yellow))
.catch((err)=> console.log(err));



const sessionConfig = {

    secret: 'weneedagoodsecret', 
    resave: false,
    saveUninitialized: true,
    cookie : {
  
      expire : Date.now() + 7*24*60*60*1000
    }
  }



 
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
  

app.engine("ejs", ejsMate); 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method")); 
app.use(cookieParser('keyboardcat'));
app.use(session(sessionConfig)); 
// app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'));
app.use(flash());

app.use(function (req, res, next) {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser=req.user;
    next();
})
 

app.use("/products", productRoutes);
app.use( reviewRoutes);
app.use( authRoutes);
app.use( cartRoutes);

passport.use(new LocalStrategy(User.authenticate()));
// passport.use(new FacebookStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen(PORT, () => 
    console.log("Server listening at port".blue ,`http://localhost:${PORT}/products`.red)
)