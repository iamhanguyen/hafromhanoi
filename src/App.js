import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import './NavBar.css'
// import { EasybaseProvider, useEasybase } from 'easybase-react';
// import ebconfig from "./ebconfig";
import NavBar from './NavBar';
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import emailjs from '@emailjs/browser';

function App() {
  return (
    <>
      {/* <EasybaseProvider ebconfig={ebconfig}> */}
      <Example />
      {/* </EasybaseProvider> */}

    </>
  );
}

export default App;

function Example() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      // display alert
      showAlert(true, 'danger', 'Please enter the values')
    } else {
      // show alert
      // add item to list
      const emailMessage = `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
            `
      emailjs
        .send('service_ts05ew6', 'template_o789mcq', {
          message: emailMessage
        }, 'ZJgVnjod6pL6Dc4xG')
        .then(
          () => {
            showAlert(true, 'success', 'Form submission successful!')
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
  }
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Portfolio />
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Me</h2>
            <div className="text-center mb-3">
              <a href="mailto:hafromhanoi@gmail.com" title="Email Hà">hafromhanoi@gmail.com</a>
            </div>
            <h3 className="section-subheading text-muted mb-3">Or enter your details below!</h3>

          </div>
          <form id="contactForm" onSubmit={handleSubmit}>
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  {/*  <!-- Name input--> */}
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  {/* <!-- Email address input--> */}
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mb-md-0">
                  {/*  <!-- Phone number input--> */}
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  {/* <!-- Message input--> */}
                  <textarea className="form-control" id="message" placeholder="Your Message *" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
              </div>
            </div>
            <div className="text-center"><SubmitButton name={name} email={email} phone={phone} message={message} /></div>
          </form>
        </div>
      </section>
    </>
  )
}

function SubmitButton({ name, email, phone, message }) {
  // const { db } = useEasybase();

  const handleAdd = async () => {
    // if (!name || !email || !phone || !message) {

    // } else {
    //   await db('CONTACTFORM').insert({ name: name, email: email, phone: phone, message: message  }).one()
    // }
  }
  return <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit" onClick={handleAdd}>Send Message</button>
}

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000)
    return () => clearTimeout(timeout)
  }, [removeAlert])
  return (
    <>
      <p className={`alert alert-${type}`}>{msg}</p>
    </>
  )
}