import "./App.css";
import Navbar from "./components/Navbar";
// import About from './components/About';
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes, // Replaces Switch
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
      document.body.style.backgroundColor = "rgb(53, 53, 53)";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", ("success"))
  }  
  else {
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    showAlert("Light mode has been enabled", ("success"))
  }
};

return (
  <>
    {/* <Router> */}
      {/* Navbar */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* Navbar end */}

      {/* Alert */}
      <Alert alert={alert} />
      {/* Alert end */}

      {/* Container */}
      <div className="container my-3">
        {/* <Routes> */}
          {/* Replaces Switch */}
          {/* <Route exact path="/about" element={<About />} /> */}

          {/* <Route exact path="/"element= */}
          {<Textform showAlert={showAlert}heading="Enter the text to analyze below"mode={mode}/>}
          {/* /> */}
        {/* </Routes> */}
      </div>
      {/* Container end */}
    {/* </Router> */}
    
    </>
  );
}

export default App;

