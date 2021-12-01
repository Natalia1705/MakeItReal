import "./App.css";
import { Board } from "./components/Board";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterDetail } from "./components/CharacterDetail/CharacterDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/characters/:pagination" element={<Board />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/*" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
