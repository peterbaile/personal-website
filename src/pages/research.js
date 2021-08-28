import React from 'react'

import Nav from '../components/Nav'
import SEO from '../components/seo'

import ResearchJSON from '../json/research.json'

const { paper, projects } = ResearchJSON

const Paper = ({ title, authors, conference, links }) => (
  <li>
    <p style={{ fontSize: '1.2rem', margin: '0'}}>
      <em> {title} </em> | {conference}
    </p>
    <p style={{ fontSize: '0.9rem', margin: '0' }}> {authors} </p>
    {Object.keys(links).map(k => (
      <a href={`${links[k]}`}> [ {k} ] </a>
    ))}
  </li>
)

const Project = ({ head, desc, links }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <em style={{ fontSize: '1.2rem' }}> {head} </em>
    {Boolean(desc.length) && (
      <ul style={{ marginBottom: '0' }}>
        {desc.map(e => (
          <li style={{ fontWeight: '300' }}> {e} </li>
        ))}
      </ul>
    )}
    {Object.keys(links).map(k => (
      <a href={`${links[k]}`}> [ {k} ] </a>
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
          className="col-md-9 body-content"
          style={{ marginTop: '4em', padding: '0 5rem' }}
        >
          <p style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>paper</p>
          <ul>
          {paper.map(e => (
            <Paper {...e} />
          ))}
          </ul>
          <div style={{ margin: '4rem 0' }} />
          <p style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>projects</p>
          {projects.map(e => (
            <Project {...e} />
          ))}
        </div>
      </div>
    </div>
  </>
)

export default Research
