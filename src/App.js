import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import "./App.css";
import { Header, Sidebar, Chat } from "./components/index";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

const AppBodyWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Router>
        {isLoggedIn ? (
          <>
            <Header />
            {/* AppBodyWrapper includes the SideBar and Chat Section*/}
            <AppBodyWrapper>
              <Sidebar />
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Chat chatType="direct-message" />}
                />
              </Routes>
            </AppBodyWrapper>
          </>
        ) : (
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
