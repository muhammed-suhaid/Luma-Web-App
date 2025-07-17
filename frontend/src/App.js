import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewAll from './components/ViewAll';
import Register from './components/Register';
import HomePage from './components/HomePage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/view" element={<ViewAll />} />
          <Route path="/explore" element={<LoadingScreen redirectTo="/view" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
