import './App.css';
import NewsInfo from './components/NewsInfo';
import NavBar from './components/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import LocalNews from './components/LocalNews';
import StateNews from './components/StateNews';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<LocalNews />} />
            <Route path="/state-news" element={<StateNews />} />
            <Route path="/national-news" element={<NewsInfo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
