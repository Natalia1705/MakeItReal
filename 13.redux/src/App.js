import "./App.css";
import { Provider } from "react-redux";
import { Counter } from "";
import store from "./store/store";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          <Counter></Counter>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>

      </header>
    </div>
  );
}

export default App;
