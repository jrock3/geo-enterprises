import * as React from 'react'
import { useState } from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"

const AboutPage: React.FC<PageProps> = () => {
  const [state, setState] = useState({});
  
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  };
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setState({ ...state, [target.name]: target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formError = form.querySelector('.error');
    if (formError) formError.classList.remove('error');
    const formName = document.getElementById('name') as HTMLInputElement;
    const formEmail = document.getElementById('email') as HTMLInputElement;
    const formMsg = document.getElementById('message') as HTMLTextAreaElement;
    if (!formName.value) return formName.classList.add('error');
    else if (!validateEmail(formEmail.value)) return formEmail.classList.add('error');
    else if (!formMsg.value) return formMsg.classList.add('error');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name')!,
        ...state,
      }),
    })
      .then(() => form.classList.add('submitted'))
      .catch((error) => alert(error))
  };

  return (
    <Layout>
      <section className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 col-md-offset-1'>
              <StaticImage src="../../static/images/contact.jpg" alt="symbols for email, phone, and computer mouse" />
            </div>
          </div>
          <div className='row' style={{ paddingTop: '4%' }}>
            <div className='col-md-10 col-md-offset-1'>
              <h1>Contact</h1>
              <p>Please feel free to send us a message or reach us by phone with the office listings below.</p>
              <form className="form-horizontal" data-netlify="true" data-netlify-honeypot="bot-field" method="post" name="contact-form" onSubmit={handleSubmit} role="form">
                <input type="hidden" name="form-name" value="contact-form" />
                <div className="form-group">
                    <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" aria-required="true" className="form-control" id="name" name="name" onChange={handleChange} placeholder="First & Last Name"/>
                    </div>
                </div>
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <div className="form-group">
                    <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" aria-required="true" className="form-control" id="email" name="email" onChange={handleChange} placeholder="example@domain.com"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="col-sm-2 control-label">Message</label>
                    <div className="col-sm-10">
                        <textarea aria-required="true" className="form-control" rows={4} id="message" name="message" onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                        <button id="submit" name="submit" type="submit" value="Send" className="btn btn-primary">Send</button>
                    </div>
                </div>
                <div className="form-group thank-you">
                  <p>Thank you for your message. We will be in touch with you soon!</p>
                </div>
              </form> 
              <div className="row text-center">
                <div className="col-sm-6">
                  <p><span style={{ fontWeight: 'bold' }}>Main Offices</span><br />2640 N. Hwy 167<br />Catoosa, OK 74015<br />(918) 625-2141 Phone<br /></p>
                </div>
                <div className="col-sm-6">
                  <p><span style={{ fontWeight: 'bold' }}>Mailing Address</span><br />PO Box 250<br />Catoosa, OK 74015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Contact</title>

export default AboutPage