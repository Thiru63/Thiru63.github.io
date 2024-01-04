import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import logo2 from '../images/logo-2.png'

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo2} alt="trydo"/>
      </div>
      <div className="footerLinks">
        <a href="https://github.com/Thiru63" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/thirumalai-web-developer/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:sureshganga12007@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
