import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat name="Sarah" message="Hey you!" timestamp=" 35 minutes ago" />
    </div>
  );
}

export default Chats;
