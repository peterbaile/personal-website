import React from 'react'

// import components
import Nav from '../components/Nav';
import SEO from '../components/seo';
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
    <div>
        <SEO title="Contact Me"/>
        <Nav />
        <hr />
        <ContactForm />
    </div>
)

export default ContactPage;