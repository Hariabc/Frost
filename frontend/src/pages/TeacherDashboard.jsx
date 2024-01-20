import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsChatDots } from "react-icons/bs";
import { MdHelpOutline } from "react-icons/md";
import { IoNotificationsOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { useEffect } from "react";
import axios from 'axios';
import "./pages.css"

const StudentDashboard = () => {
    const [selectedComponent, setSelectedComponent] = useState(<HomeDashboard/>);
    const [userData, setUserData] = useState({});
    const [activeIcon, setActiveIcon] = useState('briefcase'); // Add state for active icon
    const navigate = useNavigate();
  
    const handleChatButtonClick = () => {
      setSelectedComponent(<Chat />);
      setActiveIcon('chat');
    };
  
    const handleProfileClick = () => {
      setSelectedComponent(<Profile />);
      setActiveIcon('profile');
    };
  
    const handleHomeClick = () => {
      setSelectedComponent(<HomeDashboard />);
      setActiveIcon('home');
    };
  
    const handleFaqClick = () => {
      setSelectedComponent(<RenderFaq />);
      setActiveIcon('faq');
    };

    const closeComponents = () => {
      setSelectedComponent(null);
    };
  
    const handleLogout = async () => {
      try {
        // Make a request to the logout endpoint
        await axios.post('http://localhost:5000/client/logout', null, {
          withCredentials: true,
        });
        navigate("/login")
        
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/client/user', { withCredentials: true });
          setUserData(response.data.user);
          setSelectedComponent(<BriefcaseDashboard />);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUserData();
    }, []);
  
    return (
      <div className="dashboard-container">
        <div className="sidebar">
          <img
            src=""
            alt="hari"
            style={{
              width: '50px',
              height: '50px',
              marginBottom: '100px',
            }}
          />
          <FiHome
            size={45}
            color="#fff"
            style={{ paddingTop: '15px', cursor: 'pointer' }}
            className={activeIcon === 'home' ? 'active' : ''}
            onClick={handleHomeClick}
          />
          <CgProfile
            size={45}
            color="#fff"
            style={{ paddingTop: '15px', cursor: 'pointer' }}
            className={activeIcon === 'profile' ? 'active' : ''}
            onClick={handleProfileClick}
            />
          <BsChatDots
            size={45}
            color="#fff"
            style={{ paddingTop: '15px', cursor: 'pointer' }}
            className={activeIcon === 'chat' ? 'active' : ''}
            onClick={handleChatButtonClick}        />
          <MdHelpOutline
            size={45}
            color="#fff"
            style={{ paddingTop: '15px', cursor: 'pointer' }}
            className={activeIcon === 'faq' ? 'active' : ''}
            onClick={handleFaqClick}        />
        </div>
  
        <div className="main-content">
          <div className="header">
            <div className="user-info">
              <div className="user-name" style={{color:'white',marginLeft:"20px"}}>{userData ? userData.firstName : 'No username available'}</div>
            </div>
            <div className="notification-icon">
              <IoNotificationsOutline size={30} style={{color:'white'}} />
              <div className="logout-button" style={{paddingLeft:"20px"}}> 
              <button onClick={handleLogout}>Logout</button>
            </div>
            </div>
          </div>
          <div className="dashboard-element-container">
            <div className="selected-component-container">
              {selectedComponent && <div className="selected-component">{selectedComponent}</div>}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default StudentDashboard;

const HomeDashboard=()=>{
    return(
        <h1>Teacher</h1>
    )
}
const Profile=()=>{
    return(
        <h1>Profile</h1>
    )
}
