import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="hero"></section>
      <section className="banner text-center">
        <h1>Geothermal Heating and Cooling<br /><span className="secondary">Quality, Cost Effective, and Renewable</span></h1>
        { /*  <!--Whisper Valley<br /><span class="secondary">The largest all-geothermal housing community in North America</span>--> */ }
      </section>
      <section className='statement'>
        <div className='container'>
            <div className='row text-center'>
              <div className='col-md-10 col-md-offset-1'>
              <h2>Who We Are</h2>
              <p>Geo-Enterprises is a leader in the geothermal heating and cooling industry.<br />We oversee the design and installation of geothermal systems in commercial, residential and government projects - on budget and on time.</p>
              </div>
            </div>
        </div>
      </section>
      <section className='info'>
        <div className='container'>
          <div className='row text-center features'>
            <article className='col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-3 col-md-offset-0'>
              <i className='glyphicon glyphicon-briefcase'></i>
              <h3>Our Services</h3>
              <p>From training to design and installation, Geo-Enterprises provides quality service within the geothermal industry.</p>
              <Link to="/services"><button type="button" className="btn btn-success">Read More</button></Link>
            </article>
            <article className='col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-3 col-md-offset-0'>
              <i className='glyphicon glyphicon-refresh'></i>
              <h3>Geothermal 101</h3>
              <p>Learn how to utilize this virtually limitless source of energy to heat and cool your home or business.</p>
              <Link to="/geothermal-101"><button type="button" className="btn btn-success">Read More</button></Link>
            </article>
            <article className='col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-3 col-md-offset-0'>
              <i className='glyphicon glyphicon-usd'></i>
              <h3>Tax Credits</h3>
              <p>Tax credits offered for residents who install geothermal systems in their homes.</p>
              <Link to="/tax-credits"><button type="button" className="btn btn-success">Read More</button></Link>
            </article>
          </div>
        </div>
      </section>
      <section className='store'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-10 col-md-offset-1'>
              <h2>The Geo Store</h2>
              <p className="lead">Browse our geothermal supplies catalog and purchase parts online.</p>
              <a href="http://www.geo-depot.com"><button type="button" className="btn btn-default">Browse Inventory</button></a>
            </div>
          </div>
        </div>
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
                <img src="images/suppliers1.png" style={{width: '100%'}} />
              </div>
              <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
                <img src="images/suppliers2.png" style={{width: '100%'}} />
              </div>
            </div>
          </div>
        </footer>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
