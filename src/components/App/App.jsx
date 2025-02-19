import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
