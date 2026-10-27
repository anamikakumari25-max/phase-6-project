// const mongoose = require("mongoose");

// const feedbackSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },

//     rating: {
//         type: Number,
//         required: true
//     },

//     comment: {
//         type: String,
//         required: true
//     }
// });

// const Feedback = mongoose.model("Feedback", feedbackSchema);

// module.exports = Feedback;




const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  course: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Student", studentSchema);
