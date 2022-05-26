import React from "react";
import "./style.css";

import { AboutInfo } from "../../data/Info";


const data = [

  {
    id: 1, character: "Willingness to learn", image: require('../../assets/Images/Project Image/About/learner.jpg'),
  },
  {
    id: 2, character: "Focus and concentrate on work", image: require('../../assets/Images/Project Image/About/concentrate.png'),
  },
  {
    id: 3, character: "Strong comunication skills", image: require('../../assets/Images/Project Image/About/Effective-Business-Communication.jpg'),
  },
  {
    id: 4, character: "Open-minded and Team working", image: require('../../assets/Images/Project Image/About/team.jpg'),
  },
  {
    id: 5, character: "Self task management", image: require('../../assets/Images/Project Image/About/taskmanage.png'),
  },
  {
    id: 6, character: "Self improving mindset", image: require('../../assets/Images/Project Image/About/improve.jpg'),
  },


]


const AboutText = () => {
  const renderCharacter = () => {
    return data.map((item, index) => {
      return <div className="col-xl-4 col-md-6 col-12" key={index}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="tab-character mt-3">
                <img src={item.image} className="img-fluid" alt={index} />
                <div className="text-card">
                  {item.character}
                </div>
              </div>
            </div>

            <div className="flip-card-back">
             <div className="tab-character mt-3">
               <div className="overlay-card"></div>
                <img src={item.image} className="img-fluid card-img2" alt={index} />
                <div className="text-card-back">
                  {item.character}
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    })
  }

  return (
    <div className="about-text">


      <div>
        <nav>
          <div className="nav d-flex nav-tabs" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Quick view</a>
            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Some words</a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="row mt-1">
              {renderCharacter()}

            </div>
          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <AboutInfo />
          </div>
          
        </div>
      </div>



    </div>

  )


};

export default AboutText;





