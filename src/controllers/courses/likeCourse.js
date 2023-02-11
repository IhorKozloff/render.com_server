const { Course }  = require('../../models/courses')

const likeCourse = async (req, res, next) => {

    const { courseId } = req.params;
    const { email } = req.body;
    console.log(email)
    const result = await Course.findById(courseId);
   
    console.log(result.users_likes_emails)

        const currentUserHasLiked = result.users_likes_emails.find(item => item === email);

        let message = '';

        if (currentUserHasLiked) {
            const newLikedArr = result.users_likes_emails.filter(item => item !== email);
            const newLikesCount = result.likes - 1;
            await Course.findByIdAndUpdate(courseId, {users_likes_emails: newLikedArr, likes: newLikesCount})
            message = "Disliked"
        } else {
            const newLikedArr = [...result.users_likes_emails, email];
            const newLikesCount = result.likes + 1;
            await Course.findByIdAndUpdate(courseId, {users_likes_emails: newLikedArr, likes: newLikesCount})
            message = "Liked"
        }

    res.json({
        status: "success",
        code: 200,
        message
    })
}

module.exports = likeCourse;
