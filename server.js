// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// const Feedback = require("./models/feedback");

// dotenv.config();

// const app = express();

// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static("public"));

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI)
//     .then(() => {
//         console.log("MongoDB connected successfully");
//     })
//     .catch((error) => {
//         console.log("MongoDB connection error:", error);
//     });

// app.post("/feedback", async (req, res) => {

//     try {

//         const newFeedback = await Feedback.create(req.body)

//         res.status(201).json({
//             message: "Feedback submitted successfully"
//         });

//     } catch (error) {

//         console.log("Error saving feedback:", error);

//         res.status(500).json({
//             message: "Failed to submit feedback"
//         });

//     }

// });

// app.get("/feedback", async (req, res) => {

//     try {

//         const feedbacks = await Feedback.find();

//         res.json(feedbacks);

//     }catch (error) {
//     console.log("ERROR:", error);

//     res.status(500).json({
//         message: "Failed to submit feedback",
//         error: error.message
//     });
// }

// });

// app.delete("/feedback/:id", async (req, res) => {
//     try {
//         const feedbacks = await Feedback.findByIdAndDelete(req.params.id)
//         console.log(feedbacks)
        

//     } catch (error) {
//         console.log(error)
        
//     }
// })
// // Start Server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });



// require("dotenv").config()
// const express = require("express");
// const mongoose = require("mongoose")
// const app = express();
// const User = require("./models/feedback")
// app.use(express.json());

// app.get("/" , (req,res) => {
//     console.log("crude opration");
    
// })

// mongoose.connect(process.env.MONGODB_URI)
//     .then(() =>{
//       console.log("mongodb connecting ");
      
//     })
//     .catch((error) => {
//      console.error("mongodb not connecting" , error);
     
//     })

// app.post("/user" , async (req,res) => {
    
//     try{
        
//         const {name, email, age} = req.body

//         const newUser = new User({
//             name,
//             email,
//             age
//         })

//         const createSave =  await newUser.save()
//         res.status(201).json({
//             message:"data is create sucessfully",
//             User:newUser
//         })

//     }catch(error){
//     console.error("error" , error.message);
    
//     }

// })

// app.listen(3000 , () => {
//     console.log("server running on 3000" );
    
// })




// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");

// const studentSchema = mongoose.Schema({
//   name:{
//     type:String,
//     require:true
//   },
//   email:{
//     type:String,
//     require:true
//   },
//   age:{
//     type:Number,
//     require:true
//   }
// });

// const Student = mongoose.model("student", studentSchema)

// const app = express();
// app.use(express.json());

// // CREATE
// app.post("/students", async (req, res) => {
//   res.json(await Student.create(req.body));
// });

// // READ ALL
// app.get("/students", async (req, res) => {
//   res.json(await Student.find());
// });

// // READ ONE
// app.get("/students/:id", async (req, res) => {
//   res.json(await Student.findById(req.params.id));
// });

// // UPDATE
// app.put("/students/:id", async (req, res) => {
//   res.json(
//     await Student.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     )
//   );
// });

// // DELETE
// app.delete("/students/:id", async (req, res) => {
//   res.json(await Student.findByIdAndDelete(req.params.id));
// });

// // START SERVER
// mongoose.connect(process.env.MONGODB_URI).then(() => {
//   console.log("MongoDB connected successfully");

//   const PORT = process.env.PORT || 5000;

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });


// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");

// const studentSchame = mongoose.Schema({
//    name:{
//     type:String,
//     require:true
//    },
//    email:{
//    type:String,
//    require:true
//    },
//    age:{
//     type:Number,
//     require:true
//    }

// })

// const Student = mongoose.model("Student" , studentSchame);

// const app = express()
// app.use(express.json())

// app.get("/" , (req,res) => {
// res.send("CRUD")
// })

// app.post("/students" , async (req,res) => {
//   res.json(await Student.create(req.body))
// })

// app.get("/students", async (req,res) => {
//   res.json(await Student.find(req.body))
// })

// app.get("/students/:id", async (req,res) =>{
//   res.json(await Student.findOne(res.parema.id))
// })

// app.put("/students/:id" , async (req,res) => {
//   res.json( await Student.findByIdAndUpdate(
//     req.body,
//     res.parema.id
//   ))
// })

// app.delete("/students/:id" ,async (req,res) => {
//   res.json(res.parema.id)
// })
  
// mongoose.connect(process.env.MONGODB_URI).then(()=> {
//   console.log("mongodb connecting sucessfully");
  
// })

// app.listen(3000)