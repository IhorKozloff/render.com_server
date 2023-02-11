const { Schema, model} = require("mongoose");
const Joi = require("joi");


const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const LessonProgresItemSchema = Schema(
    {
        lessonId: {
            type: String,
            default: ''
        },
        progressTime: {
            type: Number,
            default: 0
        },
        isWatched: {
            type: Boolean,
            default: false
        },
        isOnPause: {
            type: Boolean,
            default: false
        },
        isOnPlay: {
            type: Boolean,
            default: false
        }
    }
);


const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: emailRegexp,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    token: {
        type: String,
        default: ''
    },
    liked_courses_ids: {
        type: [String],
        default: []
    },
    lessonsProgress: {
        type: [LessonProgresItemSchema],
        default: []
    }
}, {versionKey: false, timestamps: true});

const User = model("user", userSchema);

const register = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).max(16).required()
})
const login = Joi.object({

    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).max(16).required()
})

const schemas = {
    register,
    login
}
module.exports = {
    User,
    schemas
}