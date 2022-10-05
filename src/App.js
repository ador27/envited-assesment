import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEvent from './Components/CreateEvent/CreateEvent';
import Events from './Components/Events/Events';
import LandingPage from './Components/Landing Page/LandingPage';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<Events />} />
      </Routes>

    </div>
  );
}

export default App;
