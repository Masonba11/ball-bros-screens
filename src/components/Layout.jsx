import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileSticky from './MobileSticky';
import SocialFloating from './SocialFloating';
import RevealOnScroll from './RevealOnScroll';

export default function Layout() {
  return (
    <>
      <Header />
      <RevealOnScroll>
        <Outlet />
      </RevealOnScroll>
      <Footer />
      <SocialFloating />
      <MobileSticky />
    </>
  );
}
