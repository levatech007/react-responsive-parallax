import React from 'react';
import { withSiteData } from 'react-static';
import HeroContent from '../components/HeroContent';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import ContactForm from '../components/ContactForm';


export default withSiteData(() => (
  <div>
    <HeroContent />
    <Navbar />
    <Content />
    <ContactForm />
  </div>
))
