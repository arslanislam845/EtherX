import './App.css';
import UserInterface from './pages/UserInterface';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './pages/Home';
import GigsInfoPage from './pages/GigsInfoPage';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="marker:h-full scroll-smooth bg-white  ">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/interface" exact element={<UserInterface />} />
          <Route path="/giginfo" exact element={<GigsInfoPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;