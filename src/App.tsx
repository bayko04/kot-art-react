import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Author from "./pages/Author/Author";
import HeaderLayout from "./layouts/HeaderLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PaintingDetails from "./pages/PaintingDetails/PaintingDetails";

function App() {
  const { burger } = useSelector((state: any) => state.burger);

  useEffect(() => {
    burger
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [burger]);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/author" element={<Author />} />
            <Route path="/painting-details" element={<PaintingDetails />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
