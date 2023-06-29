import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"

const AboutPage: React.FC<PageProps> = () => {
  // create email validation function
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleSubmit = (e: React.FormEvent) => {
    const form = document.querySelector('form');
    if (!form) return;
    const formError = form.querySelector('.error');
    if (formError) formError.classList.remove('error');
    const formName = document.getElementById('name') as HTMLInputElement;
    const formEmail = document.getElementById('email') as HTMLInputElement;
    const formMsg = document.getElementById('message') as HTMLTextAreaElement;
    const formHuman = document.getElementById('human') as HTMLInputElement;
    if (!formName.value) formName.classList.add('error');
    else if (!validateEmail(formEmail.value)) formEmail.classList.add('error');
    else if (!formMsg.value) formMsg.classList.add('error');
    else if (formHuman.value !== '5') formHuman.classList.add('error');
    else return form.classList.add('submitted');
    e.preventDefault();
  };

  return (
    <Layout>
      <section className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 col-md-offset-1'>
              <StaticImage src="../../static/images/contact.jpg" alt="" />
              {/*<img className='' src='' style={{ width: '100%' }}/>*/}
            </div>
          </div>
          <div className='row' style={{ paddingTop: '4%' }}>
            <div className='col-md-10 col-md-offset-1'>
              <h1>Contact</h1>
              <p>Please feel free to send us a message or reach us by phone with the office listings below.</p>
              <form className="form-horizontal" data-netlify="true" method="POST" name="contact-form" onSubmit={handleSubmit} role="form">
                <div className="form-group">
                    <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" name="name" placeholder="First & Last Name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" name="email" placeholder="example@domain.com"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="col-sm-2 control-label">Message</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" rows={4} id="message" name="message"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="human" className="col-sm-2 control-label">2 + 3 = ?</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="human" name="human" placeholder="Your Answer"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                        <input id="submit" name="submit" type="submit" value="Send" className="btn btn-primary"/>
                    </div>
                </div>
                <div className="form-group thank-you">
                  <p>Thank you for your message. We will be in touch with you soon!</p>
                </div>
              </form> 
              <div className="row text-center">
                <div className="col-sm-6">
                  <p><span style={{ fontWeight: 'bold' }}>Main Offices</span><br />2660 N. Hwy 167<br />Catoosa, OK 74015<br />(918) 379-0193 Phone<br />(800)-994-0428 Toll Free<br />(918) 379-0471 Fax</p>
                </div>
                <div className="col-sm-6">
                  <p><span style={{ fontWeight: 'bold' }}>Buffalo Offices</span><br />1919 N. Maple St.<br />Buffalo, MO 65622<br />(417) 345-7400 Phone<br />(417) 345-4255 Fax</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>About Me</title>

export default AboutPage