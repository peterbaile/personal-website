import React from 'react'

import Nav from '../components/Nav'
import SEO from '../components/seo'

import ResearchJSON from '../json/research.json'

const { paper, projects } = ResearchJSON

const Paper = ({ title, authors, conference, links }) => (
  <>
    <p style={{ fontSize: '1.2rem' }}>
      <b> {title} </b>
    </p>
    <p style={{ fontSize: '0.9rem' }}>
      <em> {conference} </em>
    </p>
    <p style={{ fontSize: '0.9rem' }}> {authors} </p>
    {Object.keys(links).map(k => (
      <a href={`${links[k]}`}> [{k}] </a>
    ))}
  </>
)

const Project = ({ head, desc, links }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <b style={{ fontSize: '1.2rem' }}> {head} </b>
    {Boolean(desc.length) && (
      <ul>
        {desc.map(e => (
          <li> {e} </li>
        ))}
      </ul>
    )}
    {Object.keys(links).map(k => (
      <a href={`${links[k]}`}> [{k}] </a>
    ))}
  </div>
)

const Research = () => (
  <>
    <SEO title="Professional" />
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />

        <div
          className="col-md-9"
          style={{ marginTop: '5em', padding: '0 5rem' }}
        >
          Paper
          {paper.map(e => (
            <Paper {...e} />
          ))}
          <div style={{ margin: '3rem 0' }} />
          <h2> Projects </h2>
          {projects.map(e => (
            <Project {...e} />
          ))}
        </div>
      </div>
    </div>
  </>
)

export default Research
