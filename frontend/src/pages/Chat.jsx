import { CometChatUsersWithMessages } from '@cometchat/chat-uikit-react';//import the component in your App.js file
import { CometChatUIKit,UIKitSettingsBuilder } from "@cometchat/chat-uikit-react";
// import { CometChatUIKit } from "@cometchat/chat-uikit-react";

const COMETCHAT_CONSTANTS = {
APP_ID: "2514408236d4298f", //Replace with your App ID
REGION: "US", //Replace with your App Region
AUTH_KEY: "fbf0f8b13bc1b30487c8e574fa1809fca0c6c96a" //Replace with your Auth Key
}

//create the builder
const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForFriends()
  .build();

//Initialize CometChat UIKit
CometChatUIKit.init(UIKitSettings).then(() => {
  console.log("Initialization completed successfully");
  // You can now call login function.
}).catch(console.log);


const Chat = () => {

 return (
      	<CometChatUsersWithMessages />
	);
}

const UID = "superhero1"; //Replace with your UID

CometChatUIKit.getLoggedinUser().then((user) => {
  if (!user) {
    //Login user
    CometChatUIKit.login(UID).then((user) => {
      console.log("Login Successful:", { user });
      //mount your app
    })
      .catch(console.log);
  } else {
    //mount your app
  }
});
export default Chat;