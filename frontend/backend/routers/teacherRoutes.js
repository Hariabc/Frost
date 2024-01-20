import express from 'express';
const router = express.Router();
import Teacher from '../models/teacher.js';
import jwt from "jsonwebtoken";
import cookie from 'cookie-parser';
router.use(cookie());
import authenticateToken from '../middleware/teacherAuthMiddleware.js';

router.post('/register-teacher', async (req, res) => {
    try {
      const { username, password } = req.body;
      const existingTeacher = await Teacher.findOne({ username });
    if (existingTeacher) {
      return res.status(400).json({ error: 'Teacher already registered' });
    }

    const token = Math.random().toString(36).substr(2, 10);
      const teacher = new Teacher({ username, password ,password_token: token,});
      await teacher.save();
      res.status(201).json({ message: 'Teacher registered successfully' });
    } catch (error) {
      console.error('Error registering teacher:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  router.post('/login',async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the client by email in the database
      const teacher = await Teacher.findOne({ username });
  
      if (!teacher) {
        return res.status(404).json({ error: 'Teacher not found' });
      }
  
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, teacher.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Create a JWT token
      const token = jwt.sign(
        { teacherId: teacher._id, username: teacher.username },
        'thisisthesecretkeyforthisproject'
      );
      
      res.cookie("jwtoken", token, {
        httpOnly: true,
        secure: true,
        maxAge: 100000000
      });
      
      res.status(200).json({ userType: 'teacher', message: 'Login successful' });
      
      
      
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
