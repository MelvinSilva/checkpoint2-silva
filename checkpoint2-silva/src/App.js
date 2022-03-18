import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameDetails from './components/GameDetails';
import GameList from './components/GameList';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title={"Jeux-Vidéo.melvin"} />
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
