import './App.css';
import Home from './components/Home/Home.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Home/Login.jsx';
import Sign from './components/Home/Register.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
