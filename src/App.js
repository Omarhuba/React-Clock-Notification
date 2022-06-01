// import logo from './logo.svg';
import './App.css';
import Klocka from './components/Klocka'
import Time from './components/Time'
import Push from './components/Push'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Klocka/>
        <Time/>
        <Push/>




      </header>
    </div>
  );
}

export default App;
