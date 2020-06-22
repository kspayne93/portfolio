import React, { useEffect } from 'react';
import 'normalize.css';
import './App.scss';
import routes from './routes';

function getWindowDimensions() {
  const { innerHeight, innerWidth } = window;
  const height = `${innerHeight / 100}px`;
  const width = `${innerWidth / 100}px`;

  return {height, width};
}

const { height, width } = getWindowDimensions();
document.querySelector(':root').style.setProperty('--vh', height);
document.querySelector(':root').style.setProperty('--vw', width);

function App () {
  useEffect(() => {
    function handleOrientationChange() {
      const { height, width } = getWindowDimensions();
      document.querySelector(':root').style.setProperty('--vh', height);
      document.querySelector(':root').style.setProperty('--vw', width);
    }

    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };

  }, []);

  return (
    <div className="App">
      { routes }
    </div>
  );
}

export default App;
