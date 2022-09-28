import Home from './views/Home/Home';
import Login from './views/Login/Login'; 
import { BrowserRouter, Switch, Routes, Route, Link} from 'react-router-dom';
import { Router } from '@mui/icons-material';

function App() {
  return (
    <>
      <BrowserRouter>
          <div>
            <Routes>
              <Route  path="/login" element={<Login />} exact></Route> 
              <Route  path="/home" element={<Home />} exact></Route> 
            </Routes>
          </div>

      </BrowserRouter> 
      </>
  );
}

export default App;
   