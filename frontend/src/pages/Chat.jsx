// import React from "react";
// import { useState,useEffect } from "react";
// import { App as SendbirdApp } from "sendbird-uikit";
// import "sendbird-uikit/dist/index.css";
// import axios from 'axios';
// export default function Chat() {    
//     const APP_ID = "EAD127B3-C2FC-47A7-B744-D1F2DE076DB5";

//     const [userData, setUserData] = useState({});

//     useEffect(() => {
//         const fetchUserData = async () => {
//           try {
//             const response = await axios.get('http://localhost:5000/client/user', { withCredentials: true });
//             setUserData(response.data.user);
//           } catch (error) {
//             console.error('Error fetching user data:', error);
//           }
//         };
    
//         fetchUserData();
//       }, []);
      
// return (
//     <div className="App" style={{
//         height:"100vh"
//     }}>
//         <SendbirdApp appId={APP_ID} userId={userData.username} />
//     </div>
// );
// }