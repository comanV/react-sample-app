import React, { createContext, useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './images/wknd-logo-dk.svg';
import './App.scss';
import AdventureDetail from "./components/AdventureDetail";
// import { EditorProvider } from '@aem-sites/universal-editor-react';

// function App() {
//   return (
//     <div className="App">
//       <div className="Home">
//         <header>
//           <img src={logo} className="logo" alt="WKND Logo"/>
//           <hr />
//         </header>
//         <EditorProvider>
//           <Adventures />
//         </EditorProvider>
//       </div>
//     </div>
//   );
// }

export const EditorContext = createContext(null);

function App() {
  const [isInEditor, setIsInEditor] = useState(false);
  useEffect(() => {
    window.addEventListener("enableEditing", () => setIsInEditor(true));
  }, []);

  return (
    <div className="App">
      <div className="Home">
        <header>
          <img src={logo} className="logo" alt="WKND Logo"/>
          <hr />
        </header>
        <EditorContext.Provider value={isInEditor}>
          <Router>
            <Routes>
              <Route path="/adventure:slug" element={<AdventureDetail />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </EditorContext.Provider>
      </div>
    </div>
  );
}

export default App;
