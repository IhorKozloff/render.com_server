const { createError } = require("../../helpers");
const { User } = require("../../models/user");

const login = async (req, res) => {
    const {email, lessonsProgress, liked_courses_ids} = req.body;
    console.log(email, lessonsProgress, liked_courses_ids)
    const user = User.findOne({email});

    if (!user) {
        throw createError(401, "Email not found")
    }
    
    await user.updateOne({ lessonsProgress, liked_courses_ids });
    
    res.json({
        status: 200,
        message: "Ok"
    })
}

module.exports = login;
