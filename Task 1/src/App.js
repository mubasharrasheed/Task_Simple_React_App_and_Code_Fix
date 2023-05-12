import React, { useEffect } from "react";
import "./App.css";
import Index from "./components/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./assets/css/style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
