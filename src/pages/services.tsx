import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 col-md-offset-1'>
              <StaticImage src="../../static/images/install.jpg" alt="" />
            </div>
          </div>
          <div className='row' style={{ paddingTop: '4%' }}>
            <div className='col-md-10 col-md-offset-1'>
            <h1>Our Services</h1>
            <p>Geo-Enterprises specializes in the design and application of geothermal heating and cooling systems. We can provide the information, supplies, training and contract services needed for your geothermal heating and cooling application.</p>
            <p>Our services include:</p>
            <ul>
              <li>Thermal Conductivity Testing</li>
              <li>Energy Field Modeling</li>
              <li>Field Pipe Design Assistance</li>
              <li>Complete Turnkey Loop Field Installations</li>
              <li>Residential Geothermal System Installations</li>
              <li>Planned Maintenance Agreements</li>
              <li>Complete Materials Supplier</li>
              <li>Butt and Socket Fusion Training and Certification</li>
              <li>IGSHPA Accredited Installer Training</li>
            </ul>
            <p><a href="contact.html">Contact Us</a> today to see how we can help you with your geothermal project.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>About Me</title>

export default AboutPage