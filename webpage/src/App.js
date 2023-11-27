import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MichiganNewsView from './views/MichiganNewsView';
import NationalNewsView from './views/NationalNewsView';
import LocalNews from './views/LocalNewsView';
import LoginView from './views/Account/LoginView';
import SignUpView from './views/Account/SignUpView';
import MyFeedView from './views/Users/MyFeedView';
import CreatePost from './views/admin/CreatePost';
import Edit from './views/admin/Edit';
import ArchiveView from './views/ArchiveView';
import EditAnnounce from './views/admin/EditAnnounce';
import DeletePost from './views/admin/DeletePost';
import SearchView from './views/SearchView';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/local-news" />}
            />
            <Route
              path="/webpage"
              element={<Navigate to="/local-news" />}
            />
            <Route path="/local-news" element={<LocalNews />} />
            <Route path="/state-news" element={<MichiganNewsView />} />
            <Route path="/national-news" element={<NationalNewsView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/signup" element={<SignUpView />} />
            <Route path="/my-feed" element={<MyFeedView />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/delete-post" element={<DeletePost />} />
            <Route path="/edit-announcement" element={<EditAnnounce />} />
            <Route path='/archive' element={<ArchiveView />} />
            <Route path='/search' element={<SearchView />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
