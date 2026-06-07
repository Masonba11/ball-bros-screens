import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { CITIES } from './data/site';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'));
const Installation = lazy(() => import('./pages/Installation'));
const Calculator = lazy(() => import('./pages/Calculator'));
const CityPage = lazy(() => import('./pages/CityPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Suspense fallback={<div className="route-loading" aria-live="polite">Loading page…</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service-areas" element={<ServiceAreas />} />
          <Route path="solar-screen-installation" element={<Installation />} />
          <Route path="calculator" element={<Calculator />} />
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
    </Suspense>
  );
}
