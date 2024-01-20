import express from 'express';
const router = express.Router();
import Student from '../models/student.js';


router.post('/register-student', async (req, res) => {
    try {
      const { username, password, grade } = req.body;
      const student = new Student({ username, password, grade });
      await student.save();
      res.status(201).json({ message: 'Student registered successfully' });
    } catch (error) {
      console.error('Error registering student:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  export default router;