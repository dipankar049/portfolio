import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <div className='min-h-dvh flex flex-col bg-blue-50 dark:bg-gray-700'>
            <Header />
            <div className='my-14 py-4 px-[5vw] grow'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/education" element={<Education />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
