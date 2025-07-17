import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewAll from './components/ViewAll';
import Register from './components/Register';
import CompleteProfile from './components/CompleteProfile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewAll />} />
          <Route path="/register" element={<Register />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
