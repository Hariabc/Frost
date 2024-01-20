import express from 'express';
const router = express.Router();
import Teacher from '../models/teacher.js';


router.post('/register-teacher', async (req, res) => {
    try {
      const { username, password, subjects } = req.body;
      const teacher = new Teacher({ username, password, subjects });
      await teacher.save();
      res.status(201).json({ message: 'Teacher registered successfully' });
    } catch (error) {
      console.error('Error registering teacher:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  export default router;
