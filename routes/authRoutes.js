const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const User=require("../models/User");
const passport = require('passport');
const flash = require('connect-flash');

router.get("/register",(req,res)=>{

    res.render("auth/register");
    
})
router.post("/register", async (req,res)=>{

    const {userName,emailId,password}=req.body;
    const user= new User({username:userName,email:emailId,totalCost:0,totalItems:0});
    const newUser= await User.register(user,password);
    req.flash("success","You have registered successfully!!")
    res.redirect("/login");
    
})
   
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true,
    successFlash:true 
  }), (req, res) => {
    req.flash('success', `Welcome ${req.user.username}`); 
    res.redirect('/products'); 
  });


// router.post("/loginFacebook",passport.authenticate('facebook',{


//     failureRedirect:"/login",
//     failureFlash: true,
//     successFlash:true 
//     }),({
//         clientID:"802864281533479",
//         clientSecret: "4bd43f75c3ff40c3e398dddfc500d72a",
//         callbackURL: "http://localhost:8000/products"
//       },async (accessToken, refreshToken, profile, cb)=>{
//         // console.log(accessToken);
//         await User.find({ username: profile.id }, function (err, user) {
//           return cb(err, user);
//         });
//       }
//     ))


router.get('/logout', function(req, res, next) {
    req.logOut(function(err) {
      if (err) {
         return next(err); 
      }
      req.flash("success","Logout Successful!!");
      res.redirect('/login'); 
    });
  });

router.get("/login",(req,res)=>{

    res.render("auth/login");
    
})



module.exports=router