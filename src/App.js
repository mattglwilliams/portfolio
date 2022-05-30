import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home/index";
import About from "./pages/About/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
