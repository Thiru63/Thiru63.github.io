import React from "react";
import {
  FaGithub,
  FaPhone,
  FaLinkedin,
  FaMailBulk,
  FaMapPin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>
          <b style={{ fontSize: "36px", color: "white" }}>Contact</b>
        </h1>
      </div>
      <br></br>
      <br></br>
      <section id="contact">
        <div className="contactCard" id="contact-email">
          <h2>
            <FaEnvelope />
          </h2>
          <h2>Gmail</h2>
          <h3>sureshganga12007@gmail.com</h3>
          <button className="projectbtn">mail me</button>
        </div>
        <div className="contactCard" id="contact-linkedin">
          <h2>
            <FaLinkedin />
          </h2>
          <h2>linkedin</h2>
          <h3>thirumalai-web-developer/</h3>
          <button className="projectbtn">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.linkedin.com/in/thirumalai-web-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect
            </a>
          </button>
        </div>
        <div className="contactCard" id="contact-phone">
          <h2>
            <FaPhone />
          </h2>
          <h2>Phone</h2>
          <h3>+916382176848</h3>
          <button className="projectbtn"> Contact</button>
        </div>
        <div class="contactCard" id="contact-github">
          <h2>
            <FaGithub />
          </h2>
          <h2>Github</h2>
          <h3>https://github.com/Thiru63</h3>
          <button className="projectbtn">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://github.com/Thiru63"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>{" "}
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
