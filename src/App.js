import './styles/main.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import Project from './pages/Project'

import ScrollToTol from './utils/scrollToTol'

function App() {

    return (
        <div className='App'>
            <Router>
                <ScrollToTol />
                <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/contacts' element={<Contact />} />
                        <Route path='/project/:id' element={<Project />} />
                    </Routes>
                <Footer />
            </Router>
                
        </div>
    );
}

export default App;
