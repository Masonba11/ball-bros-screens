import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceAreas from './pages/ServiceAreas';
import Installation from './pages/Installation';
import CityPage from './pages/CityPage';
import NotFound from './pages/NotFound';
import { CITIES } from './data/site';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service-areas" element={<ServiceAreas />} />
        <Route path="solar-screen-installation" element={<Installation />} />
        {CITIES.map((city) => (
          <Route
            key={city.path}
            path={city.path.replace(/^\//, '')}
            element={<CityPage slug={city.slug} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
