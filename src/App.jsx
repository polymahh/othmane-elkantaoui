import "./App.css";
import Home from "./pages/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./refContext";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
