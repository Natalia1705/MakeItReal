import Counter from "./components/Conter";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>

          <Provider store={store}>
            <Counter></Counter>
          </Provider>

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
