import Adventures from './components/Adventures';
import logo from './images/wknd-logo-dk.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="Home">
        <header>
          <img src={logo} className="logo" alt="WKND Logo"/>
          <hr />
        </header>
        <Adventures />
      </div>
    </div>
  );
}

export default App;
