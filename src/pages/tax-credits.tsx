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
                <StaticImage src="../../static/images/banks.jpg" alt="" />
              </div>
            </div>
            <div className='row' style={{ paddingTop: '4%' }}>
              <div className='col-md-10 col-md-offset-1'>
                <h1>Geothermal Tax Credits</h1>
                <p>The American Recovery and Reinvestment Act of 2009 made significant changes to tax credits offered for residents who install geothermal systems in their homes.</p>
                <p>A one time tax credit is available on any Energy Star rated unit installed from 2009-2016 and the previous $2,000 credit cap has been removed. This means you can save a FULL 30% off of your complete geothermal installation. All eligible Energy Star labeled geothermal heat pumps qualify.</p>
                <p>If you'd like, Geo-Enterprises can work with you so that you are guaranteed to receive your credit. Simply use <a href="http://www.irs.gov/pub/irs-pdf/f5695.pdf">IRS Form 5695</a>.</p>
              </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>About Me</title>

export default AboutPage