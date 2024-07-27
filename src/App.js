
import './App.css';
import Gallery from './components/Gallery';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={<Introduction />} />

         <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </div>
    </Router >
  );
}

export default App;
