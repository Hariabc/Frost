// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRouter from './routers/studentRoutes.js';
import teacherRouter from './routers/teacherRoutes.js';


const app = express();
const port = process.env.PORT || 6000;

app.use(cors({
  origin: 'http://localhost:5173', // Change this to your React app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials (if required)
}));

const uri = "mongodb+srv://venumadhav821:Venu21@hackathon.aobrttr.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
