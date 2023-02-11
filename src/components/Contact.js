import React, { useRef } from 'react';
import chat from '../assets/chat.svg'
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_kvn0cym', 
      'template_j3q5u3d',
      form.current,
      'DMoNsbnO3nuJAVIcQ')
      .then((result) => {
          console.log(result.text);
          alert("message sent successfully");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  ;
  return (
    <section className='contact'>
      <h5>Let's Talk</h5>
      <h1>Contact me Down Below</h1>
      <div className='contact__form'>
        <div className='contact__svg'>
          <img src = {chat}/>
        </div>
        <div className='contact__content'>
          <form ref = {form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">First Name</label>
              <input type="text" name = "user_first_name" required className="form-control" id="firstName" placeholder="Enter first name" />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Last Name</label>
              <input type="text" name = "user_last_name" required className="form-control" id="lastName" placeholder="Enter last name" />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Email Address</label>
              <input type="email"name = "user_email"   required className="form-control" id="emaillAddress" placeholder="Enter Email address" />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Telephone</label>
              <input type="text" name = "user_telephone" required className="form-control" id="telepphone" placeholder="Enter telephone" />
            </div>
              <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" name="message" required rows="3" placeholder = "Enter message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact