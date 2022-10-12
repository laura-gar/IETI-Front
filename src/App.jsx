import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} exact></Route>
            <Route path="/home" element={<Home />} exact></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
