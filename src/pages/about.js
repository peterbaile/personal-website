import React from 'react'

// import components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const AboutPage = () => (
    <div>
        <Nav/>
        <hr/>
        <div class="content" style={{
            margin: "2%"
        }}>
        <h1 class="has-text-centered"> Something Interesting :) </h1>
        <p class="has-text-centered"> Hi, I am Peter, I was born in  </p>
        </div>
    </div>
)

export default AboutPage;