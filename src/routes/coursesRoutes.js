const express = require('express');
const coursesRouter = express.Router();
const ctrl = require('../controllers/courses');
const { ctrlWrapper } = require('../helpers');
const { validateBody, isUserAuthorized } = require("../middlewares");
//const { joiAddTransactionSchema } = require("../models/transaction")

coursesRouter.get('/all', ctrlWrapper(ctrl.getAllCourses));

module.exports = coursesRouter;