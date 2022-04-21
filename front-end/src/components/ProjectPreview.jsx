import React from 'react';
import CalculatorSide from './CalculatorSide';
import DisplaySide from './DisplaySide';
import DisplayWriteUp from './DisplayWriteUp';

function ProjectPreview() {
  return (
    <div className="ProjectPreview">


      <div class="top">

      <div class="left">
      <div class ="calc-side">
      <CalculatorSide/>
      </div>
      </div>

      <div class="right">
      <div class ="display-side">
      <DisplaySide/>
      </div>
      </div>

      </div>



      <div class="bottom">

      <div class ="display-writeup">
      <DisplayWriteUp/>
      </div>

      </div>



    </div>
  );
}

export default ProjectPreview;
