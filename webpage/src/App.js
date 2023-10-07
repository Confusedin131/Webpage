import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import LocalNews from './components/LocalNews';
import MichiganNews from './components/MichiganNews';
import NationalNews from './components/NationalNews';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<LocalNews />} />
            <Route path="/state-news" element={<MichiganNews />} />
            <Route path="/national-news" element={<NationalNews />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
