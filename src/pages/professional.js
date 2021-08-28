import React from 'react'

import Nav from '../components/Nav'
import SEO from '../components/seo'

import ProfJSON from '../json/professional.json'

const Experience = ({ head, img, desc, time }) => (
  <div className="row" style={{ marginBottom: '1.5rem' }}>
    <div className="col-md-1">
      <img src={`/images/${img}`} className="img-fluid" width="50px" />
    </div>
    <div className="col-md-11">
      <text style={{ fontSize: '1.2rem', fontWeight: '600' }}>
        {head} &#124;
      </text>
      &nbsp;
      <text style={{ color: '#677885', fontSize: '90%' }}>{time}</text>
      {Boolean(desc.length) && (
        <ul>
          {desc.map(e => (
            <li style={{ fontWeight: '300' }}> {e} </li>
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
          className="col-md-9 body-content"
          style={{ marginTop: '4em', padding: '0 5rem' }}
        >
          {Object.keys(ProfJSON).map(k => (
            <>
              <p style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.6rem' }}>{k}</p>
              {ProfJSON[k].map(e => (
                <Experience {...e} />
              ))}
              <div style={{ margin: '3rem 0' }} />
            </>
          ))}
        </div>
      </div>
    </div>
  </>
)

export default Professional
