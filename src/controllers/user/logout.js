const { User } = require("../../models/user");

const logout = async (req, res) => {
    const { email } = req.body;
    await User.findOneAndUpdate(email, {token: ""});

    res.json({
        status: 204,
        message: "user logged out"
    })
}

module.exports = logout;