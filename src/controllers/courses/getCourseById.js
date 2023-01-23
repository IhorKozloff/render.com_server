const { Course }  = require('../../models/courses')

const getCourseById = async (req, res, next) => {

    const { courseId } = req.params;
    const result = await Course.findById(courseId);

    res.json({
        status: "success",
        code: 200,
        result
    })
}

module.exports = getCourseById;
