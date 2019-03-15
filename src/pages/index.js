import React from 'react';
import { withSiteData } from 'react-static';
import Parallax from '../components/Parallax';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import ContactForm from '../components/ContactForm';


export default withSiteData(() => (
  <div>
    <Parallax />
    <Navbar />
    <Content />
    <ContactForm />
  </div>
))
