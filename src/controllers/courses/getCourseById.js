const { Course }  = require('../../models/courses')

const getCourseById = async (req, res, next) => {

    const { id: _id } = req.params;
    const result = await Course.findOne(_id);

    res.json({
        status: "success",
        code: 200,
        result
    })
}

module.exports = getCourseById;
