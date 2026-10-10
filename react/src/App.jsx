import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lecturers from './pages/Lecturers';
import LecturerDetail from './pages/LecturerDetail';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Partners from './pages/Partners';
import Contacts from './pages/Contacts';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (path === '/') return <Home navigate={navigate} />;
    if (path === '/lecturers') return <Lecturers navigate={navigate} />;
    if (path.startsWith('/lecturers/')) {
      const id = path.split('/')[2];
      return <LecturerDetail id={id} navigate={navigate} />;
    }
    if (path === '/courses') return <Courses navigate={navigate} />;
    if (path.startsWith('/courses/')) {
      const id = path.split('/')[2];
      return <CourseDetail id={id} navigate={navigate} />;
    }
    if (path === '/about') return <About />;
    if (path === '/partners') return <Partners />;
    if (path === '/contacts') return <Contacts />;
    if (path === '/faq') return <FAQ />;
    return <NotFound navigate={navigate} />;
  };

  return (
    <>
      <Header navigate={navigate} path={path} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </>
  );
}