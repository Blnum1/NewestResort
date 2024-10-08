const express = require("express");
const router = express.Router();
const User = require('../models/user');


router.post("/register", async (req, res) => {
    const newUser = new User(req.body); 

    try {
        const user = await newUser.save(); 
        res.status(201).json({ message: 'User registered successfully', user }); 
    } catch (error) {
        return res.status(400).json({ error: error.message }); 
    }
});


router.post("/login", async (req, res) => { 
    const { email, password } = req.body;

    try {
  
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' }); 
        }

        
        if (user.password !== password) { 
            return res.status(401).json({ message: 'Invalid password' }); 
        }

        res.status(200).json({ message: 'Login successful', user }); 
    } catch (error) {
        return res.status(500).json({ error: error.message }); 
    }
});

module.exports = router; 
