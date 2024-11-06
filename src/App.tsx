import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Author from "./pages/Author/Author";
import HeaderLayout from "./layouts/HeaderLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/author" element={<Author />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
