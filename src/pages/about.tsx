import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className='content'>
        <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-md-offset-1'>
                <StaticImage src="../../static/images/schoen.jpg" alt="" />
              </div>
            </div>
            <div className='row' style={{paddingTop: '4%'}}>
              <div className='col-md-10 col-md-offset-1'>
                <h1>About Us</h1>
                <p>Founded by Philip Schoen in 1997, Geo-Enterprises has grown rapidly to become a leader in the geothermal industry. Schoen brings 30+ years of industry experience and is the current Advisory Council member of the International Ground Source Heat Pump Association as well as a member of the board of directors for the Geothermal Heat Pump Consortium. An accredited installer since 1989, he has been instrumental in the development of many products in the geothermal industry, such as the now widely used Header Vault and the new Pressure Purge flush cart. He has also conducted training workshops since 1996.</p>
                <p>Under Schoen, Geo-Enterprises has designed and installed various types of ground heat exchanger piping systems, including those used in U.S. Department of Defense projects, U.S. Embassy housing, IHS Hospitals and Gaming Casinos and several types of commercial and educational campus buildings. The most notable recent international project was working with the PRC on use of GeoExchange® in the Bird’s Nest Stadium and other Olympic venues for the 2008 Olympics in Beijing, China.</p>
                <p>Read more about our <Link to="/services">Services</Link>.</p>
              </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>About</title>

export default AboutPage