import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Nav } from '../navbar';

import Resume from '../../pages/resume';
import About from '../../pages/about'
import Portfolio from '../../pages/portfolio'
import Contacts from '../../pages/contacts'

import logo from './img/logo.png'

import './sidebar.css'
import SocialMedia from '../socialMedia';

function Sidebar() {
    return (
        
        <BrowserRouter>
            <div className='sidebar'>
            <div className="logo">
                <img className='logo__img' src={logo} alt="logo" />        
            </div>
            <Nav />
            <SocialMedia />
            </div>

            <Routes>
                <Route path='/' element={<Resume />} />
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </BrowserRouter>
     );
}

export default Sidebar;