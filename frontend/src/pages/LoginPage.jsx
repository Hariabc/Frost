import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import left from "../assets/login-home.jpg"
const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    console.log('Submitted data:', formData);

    // Simulate successful login
    const userType = 'student';

    // Redirect based on user type using useNavigate
    if (userType === 'teacher') {
      navigate('/teacher');
    } else if (userType === 'student') {
      navigate('/student');
    }
  };

  return (
    <div className="login-home" style={{height:"100vh"}}>
      <div className="login-left">
        <img src={left} alt="" className='login-home-img'/>
      </div>
    <div className="login-page">
      <h2 style={{marginBottom:"20px"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
        </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        <br />
        <label>
          Password:
        </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
