import "./contact.scss";
import CallIcon from '@material-ui/icons/Call';
import { useState } from "react";
import React from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="top">
        <div className="left">
          <h1>Info.</h1>
          <div className="leftone">
            <h4> ☎ My Contact Number</h4>
            <p>(+91) 8924895591</p>
          </div>
          <div className="leftone">
            <h4>✉ My Email</h4>
            <p>anchal2000pandey@gmail.com</p>
          </div>
          <div className="leftone">
            <h4>🏠 Address</h4>
            <p>Mirzapur,Uttar Pradesh,India,231001.</p>
          </div>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <h2>Contact Me :) </h2>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
      </div>
      <div className="down">
        <p>made by anchal pandey</p>
      </div>
    </div>
  );
}
