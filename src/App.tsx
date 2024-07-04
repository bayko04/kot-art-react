import React from "react"
import "./App.css"
import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
