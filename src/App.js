import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Activity from './components/Activity/Activity';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import './App.css';
import { themeContext } from './Context';
import { useContext } from 'react';
function App() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
    <div className="App"
    style={{background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : '',
    }}>
      <NavBar/>
      <Intro/>
      <Services/>
      <Activity/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
