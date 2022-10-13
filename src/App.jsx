import React, { useReducer } from "react";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initialState, themeReducer } from "./utils";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} exact></Route>
            <Route path="/home" element={<Home />} exact></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
