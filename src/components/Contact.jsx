import React from 'react';
import { useState } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_s6ic0ur", "template_aepcit6", templateParams, "Ldqv3K_HrWjd49bZr")
      .then((response) => {
        console.log("Email Sent", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.log("Error: ", err)
      })
  }

  return (
    <div className="container">
      <h3 className="title">Contact</h3>

      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Type your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input"
          type="text"
          placeholder="Type your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Type your message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Send" />
      </form>

    </div>
  );
};

export default Contact