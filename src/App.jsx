import Topbar from './components/Topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/About/About';
import Works from './components/works/Works';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import './app.scss';
import { useState } from 'react';


export default function App() {
    const[menuOpen,setMenuOpen]=useState(false);
    return (
        <div className="app">
           <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
           <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
           <div className="sections">
           <Intro/>
           <About/>
           <Portfolio/>
           <Skills/>
           <Works/>
           <Contact/>
           </div>
        </div>
    )
}
