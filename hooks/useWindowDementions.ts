import { useState, useEffect, useMemo } from 'react';

function getWindowDimensions() {
  if (typeof window === 'undefined') return;

  const { innerWidth: width, innerHeight: height } = window;
  const isMobile = width < 375;
  const isTablet = width < 768;

  // lg: '1060px',
  // xl: '1920px',

  return {
    width,
    height,
    isMobile,
    isTablet,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
