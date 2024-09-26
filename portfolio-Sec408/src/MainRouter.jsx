import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Webpages/about';
import Contact from './Webpages/contact';  
import Services from './Webpages/services';
import Project from './Webpages/project'; 
import Layout from './Components/Layout';
import './components/LayoutStyle.css'; // Ensure you import the CSS file

const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
 <Route exact path="/" element={<Home />} />
 <Route exact path="/about" element={<About />} />
 <Route exact path="/services" element={<Services />} />
 <Route exact path="/project" element={<Project />} />
 <Route exact path="/contact" element={<Contact />} />
 
 </Routes>
 </div>
)
}
export default MainRouter
