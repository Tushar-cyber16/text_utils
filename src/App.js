import "./App.css";
import About from "./components/About";
import React, { useState } from "react";

import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#07125e";
      showalert("darkmode has been enabled", "success");
      document.title = "TextUtils- dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("lightmode has been enabled", "success");
      document.title = "TextUtils- light mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        {/* <TextForm showalert={showalert} text="enter text to analyze" mode={mode} /> */}
        <div className="container">
          {/* <About/> */}
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/" element={<TextForm showalert={showalert} text="Enter Text To Analyze" mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
