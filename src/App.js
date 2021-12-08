import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import { Header, Sidebar, Chat } from "./components/index";

const AppBodyWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        {/* AppBodyWrapper includes the SideBar and Chat Section*/}
        <AppBodyWrapper>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Chat />} />
          </Routes>
        </AppBodyWrapper>
      </Router>
    </div>
  );
}

export default App;
