import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, stack }) => {
  const desc = {
    GoalSetterAppDesc:
      "This Goal Setter MERN stack website aims to provide users with a comprehensive platform for planning, tracking, and achieving their goals while incorporating collaboration and personalization features.It is implemented in mern stack",
      GoalSetterAppGithub: "https://github.com/Thiru63/Goal-Setter-App",
      GoalSetterAppWebsite: "https://mern-goalsetterapp.netlify.app/",

    MoviesAppDesc:
      "A Movies React website can be designed to create an interactive and user-friendly application for browsing, searching, and exploring information about movies.",
      MoviesAppGithub: "https://github.com/Thiru63/Movies-App",
      MoviesAppWebsite: "https://reactredux-movieapp.netlify.app/",

    MoviesTrailerAppDesc:
      "A Movies Trailer React website can be a dynamic and visually engaging application focused on showcasing trailers for various movies.",
      MoviesTrailerAppGithub: "https://github.com/Thiru63/Movies-Trailer-App",
      MoviesTrailerAppWebsite: "https://javaspringbootmongoreact-moviesapp.netlify.app/",

   
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox project-card">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3 className="project-title">{projectName}</h3>
        <br />
        <p className="project-description">{desc[projectName + "Desc"]}</p>

        <br />
        <p className="project-tech-stack">{stack}</p>
        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn project-github-link">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn project-deployed-link">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
