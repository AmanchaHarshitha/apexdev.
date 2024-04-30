import React from "react";
import "./SuperProjectCard.css";
import Images from "../../assets/images.png";

function SuperProjectCard({project}) {
  // Return function with HTML code
  return (
    <div className="superproject-card">
      <div className="project-card-top">
        <img src={Images} alt="" />
        <h2>{project.title}</h2>
      </div>
      <div className="project-card-mid">
        <img src={project.imagelink} alt=""/>
      </div>
      <div className="project-card-bottom">
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default SuperProjectCard;
