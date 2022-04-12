import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";
function ChatScreen() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "...",
      message: "What's up!",
    },
    {
      message: "Pretty Good wby?",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH Sarah ON 04/10/2022
      </p>

      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt="{message.name}"
              src="{message.image}"
            />
            <p className="chatScreen__text">{message.message}</p>{" "}
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message"
          type="text"
        ></input>
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
export default ChatScreen;
