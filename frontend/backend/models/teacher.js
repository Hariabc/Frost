// teacher.js
import mongoose from 'mongoose';


const teacherSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  
});


const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher;
