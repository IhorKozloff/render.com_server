const express = require('express');
const testRouter = express.Router();
const fs = require('fs/promises')




testRouter.get('/all', async (req, res) => {

    try {
        const courses = await fs.readFile('./db/dbWithID.json');

        const parsedCourses = JSON.parse(courses)
        const result = parsedCourses.map(item => {
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

      } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Whats wrong beeeeeeeee"
        })
      }
})
testRouter.get('/:courseId', async (req, res) => {
    const { courseId } = req.params;
    console.log(courseId)
    try {
        const result = await fs.readFile('./db/dbWithID.json');
        const allCourses = JSON.parse(result)
        const course = allCourses.find(item => item._id === courseId)
        res.json(course);

      } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Whats wrong beeeeeeeee"
        })
      }
})

module.exports = testRouter;