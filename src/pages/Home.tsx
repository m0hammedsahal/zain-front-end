import { useState, useEffect } from 'react';
import SplineBackground from '../components/SplineBackground';
import Collaboration from '../components/Collaboration';
import Consultation from '../components/Consultation';
import About from '../components/About';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import Spinner from '../components/Spinner';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
        <Spinner/>
    );
  }

  return (
    <div className="relative min-h-screen">
      <SplineBackground />
      <Hero />
      <About />
      <Projects />
      <Collaboration />
      <Consultation />
    </div>
  );
};

export default Home;