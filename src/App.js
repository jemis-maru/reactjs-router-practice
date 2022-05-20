import { Route, Routes } from 'react-router-dom';
import AllMeetups from './AllMeetups.js';
import NewMeetup from './NewMeetup.js';
import Favourites from './Favourites.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/newMeetup" element={<NewMeetup />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;