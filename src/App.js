import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(53, 53, 53)";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    }
     else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>

      <div className="container my-3">

        <Routes>
          <Route exact path="/"element={
              <Textform showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Clear text" mode={mode}/>
            }/>

          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;




