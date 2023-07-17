import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
function App() {
  const [theme, setTheme] = useState('light');
  const themeInvert = theme === 'light' ? 'dark' : 'light';
  const darkMode = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <Router>
      <div>
      <Navbar theme={theme} darkMode={darkMode} themeInvert={themeInvert} />

      <Routes>
          <Route path='/' element={ <Textform />} />
          <Route path='/about' element={ <About />} />
      </Routes>
          
      </div>
    </Router>

  );
}

export default App;
