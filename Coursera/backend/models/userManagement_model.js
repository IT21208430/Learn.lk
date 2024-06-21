const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    companyName: { type: String, required: true },
    password: { type: String, required: true },
    nationalIdentityCardNumber: { type: String, required: true, unique: true },
    role: {
        type: String,
        required: true
    },

    enrolledCourses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Course",
        default: []
    },
    status:{
        type:String,
        default:'pending'
    }
});

module.exports = mongoose.model('User', userSchema);
