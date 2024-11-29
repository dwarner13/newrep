import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Areas from './pages/Areas';
import ServiceArea from './pages/ServiceArea';
import Contact from './pages/Contact';
import Troubleshooting from './pages/Troubleshooting';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import RepairCalculator from './pages/RepairCalculator';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas/:slug" element={<ServiceArea />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/calculator" element={<RepairCalculator />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}