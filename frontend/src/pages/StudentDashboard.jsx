import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsChatDots } from "react-icons/bs";
import { MdHelpOutline } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { IoNotificationsOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { useEffect } from "react";
import axios from 'axios';
import "./pages.css"
import Chat from "./Chat.jsx";
import LiveClass from "./LiveClass.jsx";
import student from '../assets/student.png'

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
    const handleVideoClick = () => {
      setSelectedComponent(<LiveClass/>);
      setActiveIcon('video');
    };

    const closeComponents = () => {
      setSelectedComponent(null);
    };
  
    return (
      <div className="dashboard-container">
        <div className="sidebar">
          <img
            src={student}
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
          <FiVideo
            size={40}
            color="#fff"
            style={{ paddingTop: '15px', cursor: 'pointer' }}
            className={activeIcon === 'video' ? 'active' : ''}
            onClick={handleVideoClick}/>
        </div>
  
        <div className="main-content">
          <div className="header">
            <div className="user-info">
              <div className="user-name" style={{color:'white',marginLeft:"20px"}}>{userData ? userData.firstName : 'No username available'}</div>
            </div>
            <div className="notification-icon">
              <IoNotificationsOutline size={30} style={{color:'white'}} />
              <div className="logout-button" style={{paddingLeft:"20px"}}> 
              <button style={{padding:"10px",width:"150px",borderRadius:"4px"}}>Logout</button>
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
        <UnitComponent/>
    )
}
const Profile=()=>{
    return(
        <h1>Profile</h1>
    )
}

const UnitComponent = () => {
  const unitsData = {
    unit1: {
      topics: [
        { title: 'Topic 1.1', content: 'hi' },
        { title: 'Topic 1.2', content: 'URL_TO_PDF_1_2' },
        { title: 'Topic 1.3', content: 'URL_TO_PDF_1_3' },
      ],
      videoUrl: 'https://www.youtube.com/embed/sample_video_id',
      quiz: {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'London', 'Madrid'],
        correctAnswer: 'Paris',
      },
    },
    unit2: {
      topics: [
        { title: 'Topic 2.1', content: 'URL_TO_PDF_2_1' },
        { title: 'Topic 2.2', content: 'URL_TO_PDF_2_2' },
        { title: 'Topic 2.3', content: 'URL_TO_PDF_2_3' },
      ],
      videoUrl: 'https://www.youtube.com/embed/sample_video_id',
      quiz: {
        question: 'What is the capital of Germany?',
        options: ['Paris', 'Berlin', 'London', 'Madrid'],
        correctAnswer: 'Berlin',
      },
    },
    unit3: {
      topics: [
        { title: 'Topic 3.1', content: 'URL_TO_PDF_3_1' },
        { title: 'Topic 3.2', content: 'URL_TO_PDF_3_2' },
        { title: 'Topic 3.3', content: 'URL_TO_PDF_3_3' },
      ],
      videoUrl: 'https://www.youtube.com/embed/sample_video_id',
      quiz: {
        question: 'What is the capital of the United Kingdom?',
        options: ['Paris', 'Berlin', 'London', 'Madrid'],
        correctAnswer: 'London',
      },
    },
  };

  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container">
      <div className="unit-container">
        <h1 style={{ color: 'black', marginBottom: '20px', marginLeft: 'none' }}>Units</h1>
        {Object.keys(unitsData).map((unit) => (
          <button key={unit} className="unit-button" onClick={() => setSelectedUnit(unit)}>
            {unit}
          </button>
        ))}
      </div>
      <div className="topic-container">
        <h2 style={{ marginBottom: '20px' }}>Topics</h2>
        {selectedUnit && (
          <ul className="topic-list">
            {unitsData[selectedUnit].topics.map((topic) => (
              <li key={topic.title} className="topic-item" onClick={() => setSelectedTopic(topic)}>
                {topic.title}
              </li>
            ))}
          </ul>
        )}

        {selectedTopic && (
          <div>
            <h3 className="topic-heading">Selected Topic: {selectedTopic.title}</h3>
            <div className="options-container">
              <button className="option-button" onClick={() => handleOptionClick('Read Content')}>
                Read Content
              </button>
              <button className="option-button" onClick={() => handleOptionClick('Take Quiz')}>
                Take Quiz
              </button>
              <button className="option-button" onClick={() => handleOptionClick('Watch Video')}>
                Watch Video
              </button>
            </div>
          </div>
        )}

        {selectedOption === 'Take Quiz' && selectedTopic && (
          <div>
            <h2 className="topic-heading-quiz" style={{padding:"20px 0"}}>Quiz Question:</h2>
            <p style={{fontSize:"30px"}}>{unitsData[selectedUnit].quiz.question}</p>

            <form>
              {unitsData[selectedUnit].quiz.options.map((option) => (
                <div key={option} className="quiz-option" style={{padding:"10px"}}>
                  <input
                    type="radio"
                    id={option}
                    name="quizOption"
                    value={option}
                    checked={selectedTopic.content === option}
                    onChange={() => setSelectedTopic({ ...selectedTopic, content: option })}
                    style={{paddingLeft:"10px"}}
                  />
                  <label htmlFor={option} style={{display:"inline",fontSize:"20px"}}>{option}</label>
                </div>
              ))}
            </form>

            <button className="quiz-submit-button" onClick={() => handleOptionClick('Submit Quiz')}>
              Submit Quiz
            </button>
          </div>
        )}

        {selectedOption === 'Submit Quiz' && (
          <div className="content-container">
            <p>
              Your answer is{' '}
              {selectedTopic.content === unitsData[selectedUnit].quiz.correctAnswer ? 'correct!' : 'incorrect.'}
            </p>
          </div>
        )}

        {selectedOption === 'Read Content' && (
          <div className="content-container">
            <p>{selectedTopic.content}</p>
          </div>
        )}

        {selectedOption === 'Watch Video' && (
          <div className="content-container">
            <iframe className="iframe-container" title="YouTube Video" src={unitsData[selectedUnit].videoUrl} />
          </div>
        )}
      </div>
    </div>
  );
};

