import React from "react";
import Header from "./Header";
import "./App.css";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>PolyPlay begins</h1>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TinderCards /> <SwipeButtons />
              </>
            }
          />

          <Route path="/chat" element={<h1>I am chat</h1>} />
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
