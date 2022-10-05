import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEvent from './Components/CreateEvent/CreateEvent';
import LandingPage from './Components/Landing Page/LandingPage';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>

    </div>
  );
}

export default App;
