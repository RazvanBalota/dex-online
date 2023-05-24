import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/dex-online" element={<Home />} />
        <Route path="/word/:word" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
