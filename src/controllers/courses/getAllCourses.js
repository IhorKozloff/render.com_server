const { Course }  = require('../../models/courses')

const getAllCourses = async (req, res, next) => {

    const courses = await Course.find();

    const result = courses.map(item => {

        return {
            id: item._id,
            title: item.title,
            popularity: item.popularity,
            poster_path: item.poster_path,
            author: item.author,
            popularity_tags: item.popularity_tags,
            categories: item.categories,
            total_lessons: item.course_general_info.total_lessons,
        }
    })
    res.json({
        status: "success",
        code: 200,
        result: [...result]
    })
}

module.exports = getAllCourses;
