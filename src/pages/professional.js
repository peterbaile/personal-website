import React from 'react'

import Nav from '../components/Nav'
import SEO from '../components/seo'

import ProfJSON from '../json/professional.json'

const clubs = ProfJSON.slice(0, 2)
const teaching = ProfJSON.slice(2)

const Experience = ({ head, img, desc, time }) => (
  <div className="row" style={{ marginBottom: '1.5rem' }}>
    <div className="col-md-1">
      <img src={`/images/${img}`} className="img-fluid" width="50px" />
    </div>
    <div className="col-md-11">
      <b style={{ fontSize: '1.2rem' }}> {head} &#124;</b>&nbsp;
      <text style={{ color: '#677885', fontSize: '90%' }}>{time}</text>
      {Boolean(desc.length) && (
        <ul>
          {desc.map(e => (
            <li> {e} </li>
          ))}
        </ul>
      )}
    </div>
  </div>
)

const Professional = () => (
  <>
    <SEO title="Professional" />
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />

        <div
          className="col-md-9"
          style={{ marginTop: '5em', padding: '0 5rem' }}
        >
          Clubs
          {clubs.map(e => (
            <Experience {...e} />
          ))}
          Teaching
          {teaching.map(e => (
            <Experience {...e} />
          ))}
        </div>
      </div>
    </div>
  </>
)

export default Professional
