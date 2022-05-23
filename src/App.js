import { Route, Routes } from 'react-router-dom';
import TheNavbar from './components/TheNavbar.js';
import AllMeetups from './components/AllMeetups.js';
import NewMeetup from './components/NewMeetup.js';
import Favourites from './components/Favourites.js';
import './App.css';

function App() {
  return (
    <div>
      <TheNavbar />
      <div className="mainClass">
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/newMeetup" element={<NewMeetup />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;