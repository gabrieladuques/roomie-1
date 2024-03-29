import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
