import logo from "./logo.svg";
import "./App.css";
// import Ejercicio1 from "./Ejercicios/Ejercicio1";
// import Ejercicio2 from "./Ejercicios/Ejercicio2";
import Ejercicio3 from "./Ejercicios/Ejercicio3";
// import Ejercicio4 from "./Ejercicios/Ejercicio4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <Ejercicio1></Ejercicio1> */}
          {/* <Ejercicio2></Ejercicio2> */}
          <Ejercicio3></Ejercicio3>
          {/* <Ejercicio4></Ejercicio4> */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
