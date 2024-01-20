import React from "react";
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import './chat.css'
export default function Chat() {  
    const userId="Hari"  
    const APP_ID = "EAD127B3-C2FC-47A7-B744-D1F2DE076DB5";   
return (
    <div className="App" style={{
        height:"100vh"
    }}>
        <SendbirdApp appId={APP_ID} userId={userId} />
    </div>
);
}