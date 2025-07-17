import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewAll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
