import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileSticky from './MobileSticky';
import RevealOnScroll from './RevealOnScroll';

export default function Layout() {
  return (
    <>
      <Header />
      <RevealOnScroll>
        <Outlet />
      </RevealOnScroll>
      <Footer />
      <MobileSticky />
    </>
  );
}
