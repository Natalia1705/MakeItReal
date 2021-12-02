import "./App.css";
import { Provider } from "react-redux";
import { Counter } from "";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <div className="App">
            <Counter />
          </div>
        </Provider>
      </header>
    </div>
  );
}

export default App;
