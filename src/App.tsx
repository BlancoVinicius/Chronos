import './styles/global.css';
import './styles/theme.css';

import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPomodoro } from './pages/AboutPomodoro';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='sobre/' element={<AboutPomodoro/>}/>
        <Route path='sobre/' element={<AboutPomodoro/>}/>
        <Route path='notfound/' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
