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
      <form onSubmit={handleSubmit} className='login-form'>
      <h2 style={{marginBottom:"20px",textAlign:'center'}}>Login</h2>
        <label>
         <h2>Username:</h2>
        </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className='form-input'
          />
        <br />
        <label>
          <h2>Password:</h2>
        </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='form-input'
          />
        <br />
        <button type="submit" className='login-button'>Login</button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
