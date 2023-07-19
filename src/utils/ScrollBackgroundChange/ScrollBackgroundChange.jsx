import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const ScrollBackgroundChange = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll events
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: scrollPosition > 100 ? '#3498db' : '#f0f0f0', // Change the scroll threshold and background colors as needed
        zIndex: -1,
      }}
    />
  );
};

export default ScrollBackgroundChange;
