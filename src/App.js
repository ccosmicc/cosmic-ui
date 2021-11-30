import "./App.css";
import Header from "./components/Header";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
