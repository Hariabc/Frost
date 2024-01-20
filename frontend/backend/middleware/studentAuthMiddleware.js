import jwt from 'jsonwebtoken';
import Student from '../models/student.js';
const authenticateToken = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken; // Ensure this matches the cookie name

        if (!token) {
            return res.status(401).json({ error: 'Token not provided' });
        }

        const decodedToken = jwt.verify(token, 'thisisthesecretkeyforthisproject');
        const user = await Student.findById(decodedToken.studentId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

export default authenticateToken;

