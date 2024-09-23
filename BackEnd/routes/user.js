const express = require('express');
const router = express.Router();
const { signupBody, signinBody } = require('./types');
const {User, Cart} = require('../DataBase/db')
const bcrypt = require("bcrypt");

router.post("/signup", async(req, res)=>{
    const { success } = signupBody.safeParse(req.body);
    if(!success){
        return res.status(403).json({
            message: "Invalid Inputs"
        })
    }

    const  existingUser = await User.findOne({
        username: req.body.username
    })
    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    const salt =await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)
    // const verify = await bcrypt.compare(req.body.password, secPass)

    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: secPass
    })
    const userId = user._id;

    await Cart.create({
        userId,
        balance: Math.floor(1 + Math.random() * 10000)
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
});


router.post('/signin', async(req, res)=>{
    const { success } = signinBody.safeParse(req.body);
    if(!success){
        
    }
})



module.exports = router;
