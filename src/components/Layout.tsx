import React, { useState } from "react"
import { Link, Script } from 'gatsby'
import styled from 'styled-components';
import '../styles/global.css'

const Wrapper = styled.div`
  padding-top: 50px;
`;

const NavBar = styled.nav`
  background-color: #f8f8f8;
  border: 1px solid transparent;
  border-color: #448B44;
  border-radius: 0;
  border-width: 0 0 1px;
  margin-bottom: 0;
  min-height: 50px;
  position: fixed; top: 0; right: 0; left: 0;
  z-index: 1030;
`;

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media(min-width: 768px) {
    width: 750px;
  }

  @media(min-width: 992px) {
    width: 970px;
  }

  @media(min-width: 1200px) {
    width: 1170px;
  }
`;

const NavBarHeader = styled.div`
  float: left;
  margin-right: 0; margin-left: 0;
`;

const NavList = styled.ul`
  display: flex;
  float: right;
  list-style: none;
  margin: 0 -15px 0 0;
  padding-left: 0;

  li a {
    color: #777;
    padding: 15px;
    text-decoration: none;
  }
`;

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> 
            </button>
            <a className="navbar-brand" href="index.html">Geo-Enterprises</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/geothermal-101">Geo 101</Link></li>
              <li><a href="http://www.geo-depot.com">Store</a></li>  
              <li><Link to="/contact">Contact</Link></li> 
            </ul>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer className="final">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <p className='pull-left copy'>&copy;{new Date().getFullYear()} Geo-Enterprises, Inc.</p>
              <div className='social pull-right'>
                <a href='https://www.facebook.com/geoEnterprises'><i className="fa fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Script id="jquery" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" onLoad={() => setLoaded(true)} />
      {loaded && <Script id="bootstrap" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js" />}
    </>
  )
}

export default Layout