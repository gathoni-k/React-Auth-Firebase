import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Menu/Navbar';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
