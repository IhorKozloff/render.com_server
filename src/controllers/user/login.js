const { createError } = require("../../helpers");
const { User } = require("../../models/user");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});

    if (!user) {
        throw createError(401, "Email not found")
    }

    if(password !== user.password) {
        throw createError(401, "Wrong password")
    }

    const payload = {
        id: user._id
    }

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '24h'});
    await User.findByIdAndUpdate(user._id, {token})
    
    res.json({
        status: 200,
        result: {
            token,
            liked_courses_ids: user.liked_courses_ids,
            lessonsProgress: user.lessonsProgress,
            name: user.name,
            email: user.email
        }
    })
}

module.exports = login;
