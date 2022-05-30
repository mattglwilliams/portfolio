import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
