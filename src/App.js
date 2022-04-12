import React from "react";
import Header from "./Header";
import "./App.css";
import Chats from "./Chats";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      {/* <h1>PolyPlay begins</h1> */}

      <Router>
        <Routes>
          <Route
            path="/chat/:person"
            element={
              <>
                <Header backButton="/chat" />
                <ChatScreen />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </>
            }
          />

          <Route
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />
          <Route path="/homepage" element={<h1>I am a home</h1>} />
        </Routes>
        {/* Header */}
        {/* Profile cards */}
        {/* Feature buttons */}

        {/* Chat Screen */}
        {/* Dm screen */}
      </Router>
    </div>
  );
}

export default App;
