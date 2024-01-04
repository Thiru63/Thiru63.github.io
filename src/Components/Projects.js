import React from "react";
import ProjectBox from "./ProjectBox";
import goal from "../images/goal-setter-app.png";
import movies from "../images/movies-app.png";
import moviestrailer from "../images/movies-trailer-app.jpg";


const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox
          projectPhoto={goal}
          stack={[ "Redux ","React ","Node ","Express ","Mongodb "]}
          projectName="GoalSetterApp"
        />
        <ProjectBox
          projectPhoto={movies}
          stack={["React ", "CSS ", "Redux ", "HTML ","CSS ","JS "]}
          projectName="MoviesApp"
        />
        <ProjectBox
          projectPhoto={moviestrailer}
          stack={["HTML ", "CSS ", "JS ","React "]}
          projectName="MoviesTrailerApp"
        />
        
      </div>
    </section>
  );
};

export default Projects;
