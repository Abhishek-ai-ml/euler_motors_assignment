import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import Game from './pages/Game';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='youtubeVideo' element={<Video/>}/>
        <Route path='game' element={<Game/>}/>
      </Routes>
    </div>
  );
}

export default App;
