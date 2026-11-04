import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import HospitalDetails from './pages/HospitalDetails';
import MapView from './pages/MapView';
import Favorites from './pages/Favorites';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './utils/theme';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/hospital/:id" element={<HospitalDetails />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;