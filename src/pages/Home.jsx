import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import other sections below as we build

const Home = () => {
  return (
    <>
      <Router basename="/portfolio/">
        <div className='flex flex-col min-h-screen px-12 bg-gradient-to-br from-gray-50 to-blue-50'>
          <Header />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/education' element={<Education />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default Home;
