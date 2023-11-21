import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MichiganNewsView from './views/MichiganNewsView';
import NationalNewsView from './views/NationalNewsView';
import LocalNews from './views/LocalNewsView';
import LoginView from './views/LoginView';
import SignUpView from './views/SignUpView';
import MyFeedView from './views/MyFeedView';
import CreatePost from './views/admin/CreatePost';
import Edit from './views/admin/Edit';
import ArchiveView from './views/ArchiveView';
import EditAnnounce from './views/admin/EditAnnounce';
import DeletePost from './views/admin/DeletePost';
import SearchView from './views/SearchView';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<LocalNews />} />
            <Route path="/state-news" element={<MichiganNewsView />} />
            <Route path="/national-news" element={<NationalNewsView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/signup" element={<SignUpView/>} />
            <Route path="/my-feed" element={<MyFeedView/>}/>
            <Route path ="/create-post" element={<CreatePost/>}/>
            <Route path ="/edit" element={<Edit/>}/>
            <Route path ="/delete-post" element={<DeletePost/>}/>
            <Route path = "/edit-announcement" element ={<EditAnnounce/>}/>
            <Route path = '/archive' element={<ArchiveView/>}/>
            <Route path = '/search' element={<SearchView/>}/>

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
