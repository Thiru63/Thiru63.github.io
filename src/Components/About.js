import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import { pro } from "../Components/pro.jsx";
import Coder from "../LottieFiles/coder.json";
import { BsBootstrap } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import pdf from "../Thirumalai-E-Resume.pdf";
import Thiru from '../images/Thirumalai-lb.png'


const About = () => {
  return (
    <section className="AboutPage about section" id="about">
      <br></br>
      <br></br>
      <br></br>
      <div>
        <img src={Thiru} style={{ width: "50%" ,borderRadius:"20px"}} alt="Thirumalai"></img>
      </div>
      <div className="AboutText" id="user-detail-intro">
        <h1 className="AboutTextHeading main-title">About Me</h1>
        <p>
          Hi, i am <b>Thirumalai E</b> and I am from Kallakurichi, Tamil Nadu, India. I'm a{" "}
          <b>
            Proficient in MERN Stack
            JavaScript,Java,HTML,CSS,Bootstrap,Express,Node,MongoDB
          </b>{" "}
          and a working professional currently working as <b>Node js Developer</b> in{" "}
          <b>Ecfile Solutions Pvt. Ltd.</b>. <br />
          <br />I am pursing my <b>B.Sc</b> in{" "}
          <b>Computer Science</b> from{" "}
          <b>Alagappa University Karaikudi</b> through distance education. I love to create
          projects with beautiful designs, you can check out some of my work in
          the projects section.
          <br />
          <br />I am <b>open</b> to new collaborations or work where I can
          contribute and grow. Feel free to connect with me, links are in the
          footer.
          <br />
          <button
            id="resume-button-2"
            style={{
              background: "transparent",
              color: "white",
              border: "0px solid white",
              fontSize: "Large",
            }}
          >
            <a
              href={pdf}
              id="resume-link-2"
              target="_blank"
              class="nav-link resume"
              onClick={() => window.open(pdf)}
              download="Thirumalai-E-Resume"
            >
              Resume <FaDownload />
            </a>
          </button>
        </p>
      </div>

      <div>
        <pro />
      </div>
    </section>
  );
};

export default About;
