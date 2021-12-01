import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Character from "./components/Character/Character";
import Principal from "./components/Principal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/:id" element={<Character />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
