const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = "kjvbdkasbv;abwv;baw;";

router.post('/createuser', [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('name').isLength({ min: 5 }).withMessage('Name should be at least 5 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long')
], async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: secPassword,
        });

        res.json({ success: true, user });
    } catch (error) {
        console.error('Error creating user:', error);
        next(error);
    }
});

router.post('/loginuser', [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long')
], async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) {
            return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
        }

        const data = {
            userdata: {
                id: user.id
            }
        };

        const authToken = jwt.sign(data, jwtSecret);

        return res.json({ success: true, authToken });
    } catch (error) {
        console.error('Error logging in user:', error);
        next(error);
    }
});

module.exports = router;
