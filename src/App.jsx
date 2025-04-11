import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import themeStyles from "./styles/theme.module.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home themeStyles={themeStyles} />} />
        {/* more routes.... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
