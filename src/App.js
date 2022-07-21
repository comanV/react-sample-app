import Adventures from './components/Adventures';
import logo from './images/wknd-logo-dk.svg';
import './App.scss';
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

import React, { createContext, useState, useEffect } from "react";

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
          <Adventures />
        </EditorContext.Provider>
      </div>
    </div>
  );
}

export default App;
