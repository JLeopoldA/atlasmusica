import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Venues from './pages/Venues/Venues';
import Artists from './pages/Artists/Artists';
import Submit from './pages/Submit/Submit';


function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={ <Home /> }/>
      <Route path="/about" element={ <About /> } />
      <Route path="/venues" element={ <Venues /> } />
      <Route path="/artists" element={ <Artists /> } />
      <Route path="/submit" element={ <Submit /> } />
    </Routes>
  </Router>
  );
}

export default App;
