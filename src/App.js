import './App.css';
import Home from './routes/Home';
import Friends from './routes/Friends';
import Restauraunts from './routes/Restauraunt';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <SearchBar placeholder="tacos, cheap dinner, Max's" />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/restauraunts" element={<Restauraunts />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
