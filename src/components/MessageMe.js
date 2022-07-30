import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';





const MessageMe = props =>{



  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState("SEND MESSAGE");
  const [placeholderText, setPlaceholderText] = useState("Send me a message!");

  const form = useRef();

  

  const sendEmail = (e) => {

    setButtonText("SENDING...");

    e.preventDefault();

    emailjs.sendForm('service_ux17cfc', 'template_6qsblgm', form.current, 'OiawIy6juunIIdd6k')
      .then((result) => {
        setButtonText("MESSAGE SENT!");
          console.log(result.text);

          setTimeout(() => {
            setButtonText("SEND ANOTHER");
            setMessage("");
            setName("");
            setEmail("");
            setPlaceholderText("Forget something? Send me another message!");
          e.target.reset();
          }, 2000);
          return () => clearTimeout();        


          
      }, (error) => {
        setButtonText("FAILED :(");
          console.log(error.text);
          console.log("message failed")
      });
  };

  return (
    <div className="messageme-container">
    <form className="messageme-form" ref={form} onSubmit={sendEmail}>
        <div className="namebox">
      <input className="messageme-input" value={name} onChange={event => setName(event.target.value)} placeholder="Your Name" type="text" name="user_name" /></div>
      <div className="mailbox">
      <input className="messageme-input" value={email} onChange={event => setEmail(event.target.value)} placeholder="Your Email" type="email" name="user_email" /></div>
      <div className="bodybox">
      <textarea className="messageme-body" placeholder={placeholderText} name="message" value={message} onChange={event => setMessage(event.target.value)} /></div>
      <button className="messageme-button" disabled={(!name || !email || !message)} type="submit">{buttonText}</button>
    </form>
    </div>
  );
};

export default MessageMe;