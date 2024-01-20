import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import Student from '../models/student.js';
import jwt from "jsonwebtoken";
import cookie from 'cookie-parser';
router.use(cookie());
import authenticateToken from '../middleware/studentAuthMiddleware.js';


router.post('/register-student', async (req, res) => {
    try {
      const { username, password } = req.body;
      const existingStudent = await Student.findOne({ username });
    if (existingStudent) {
      return res.status(400).json({ error: 'Student  already registered' });
    }

    const token = Math.random().toString(36).substr(2, 10);
      const student = new Student({ username, password,password_token: token, });
      await student.save();
      res.status(201).json({ message: 'Student registered successfully' });
    } catch (error) {
      console.error('Error registering student:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



  router.post('/login',async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the client by email in the database
      const student = await Student.findOne({ username });
  
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
       
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, student.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Create a JWT token
      const token = jwt.sign(
        { studentId: student._id, username: student.username },
        'thisisthesecretkeyforthisproject'
      );
      
      res.cookie("jwtoken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 100000000
      });
      
      res.status(200).json({ userType: 'student', message: 'Login successful' });
      
      // console.log(token)
      // res.send(req.rootUser)
      return res.status(200).json({ message: 'Login successful'});
      
    } catch (err) {
      // Handle errors
      return res.status(500).json({ error: 'Failed to log in', message: err.message });
    }
  });

  router.get('/user', authenticateToken, (req, res) => {
    try {
        const userData = req.user;
        res.status(200).json({ user: userData });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
  });

  export default router;