import React from "react";
import Ios from "./iOS";

function ProjectsIOS() {
  return (
    <div>
      <Ios
        videoSrc="./Image/iOSCalculator.mov"
        title="BARBIE CALCULATOR"
        techStack={ "Swift UIKit" }
        repoLink="https://github.com/MariolaH/BarbieCalculatorSwift"
      />
    </div>
  );
}
export default ProjectsIOS;
