const { Schema, model} = require("mongoose");

const courseSchema = Schema({
    title: {
        type: String,
        required: true
    },
    popularity: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    preview_video_path: {
        type: String,
        required: true
    },
    popularity_tags: {
        type: Array,
        required: true
    },
    categories: {
        primary_direction: {
            type: Array,
            required: true
        },
        secondary_direction: {
            type: Array,
            required: true
        }
    },
    coures_general_info: {
        total_sections: {
            type: Number,
            required: true
        },
        total_lessons: {
            type: Number,
            required: true
        },
        total_time_minutes: {
            type: Number,
            required: true
        },
        learning_achivements: {
            type: Array,
            required: true
        },
        course_overview_description: {
            type: String,
            required: true
        }
    },
    course_content: [
        {
            part_title: {
                type: String,
                required: true
            },
            part_total_lessons: {
                type: Number,
                required: true
            },
            part_total_time_minutes: {
                type: Number,
                required: true
            },
            lessons: [
                {
                    lesson_type: {
                        type: String,
                        enum:['video', 'article'],
                        required: true
                    },  
                    lesson_title: {
                        type: String,
                        required: true
                    }, 
                    lesson_number: {
                        type: Number,
                        required: true
                    },
                    lesson_time_minutes: {
                        type: Number,
                        required: true
                    },
                    lesson_preview_text: {
                        type: String,
                        required: true
                    },  
                    lesson_transcription: {
                        type: String,
                        required: true
                    },
                    lesson_subtitle_file_path: {
                        type: String,
                        required: true
                    },
                    lesson_video_path: {
                        type: String,
                        required: true
                    },
                    lesson_attachment: [
                        {
                            file_name: {
                                type: String,
                                required: false
                            },
                            file_path: {
                                type: String,
                                required: false
                            },
                            file_size: {
                                type: String,
                                required: false
                            },
                        }
                    ]
                }
            ]
        }
    ]
  
}, {versionKey: false, timestamps: true});

const Course = model("course", courseSchema);
module.exports = {
    Course
}