const { Course }  = require('../../models/courses')

const getCourseById = async (req, res, next) => {

    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    
    const result = {
            title: course.title,
            popularity: course.popularity,
            likes: course.likes,
            poster_path: course.poster_path,
            author: course.author,
            preview_video_path: course.preview_video_path,
            popularity_tags: course.popularity_tags,
            categories: course.categories,
            course_general_info: course.course_general_info,
            course_content: course.course_content
    }
    res.json({
        status: "success",
        code: 200,
        result
    })
}

module.exports = getCourseById;
