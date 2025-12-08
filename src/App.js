import logo from './logo.svg';
import './App.css';
import INICIOO from './INICIOO';
import Leccion1 from './Leccion1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {/* <INICIOO/> */}
         <Leccion1/>
        </p>
       
      </header>
    </div>
  );
}

export default App;
