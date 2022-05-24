import React, { Component }  from 'react';
import './styles.css'
function Experience() {
    const data = {
        exp : [
            {id:1,post:'WEB Developer at Bosch',
            year:'2019-Now',
            desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi perspiciatis debitis veritatis, repudiandae officia impedit, quidem maxime, accusamus ea inventore dolores blanditiis eos cumque culpa. Quae unde natus quis possimus ad assumenda expedita, vel iure eum ex veniam. Expedita ipsa commodi minima pariatur nostrum voluptatum laudantium quo, explicabo aliquam incidunt non autem error officia quaerat iusto accusantium libero omnis facilis veritatis! Reiciendis aliquid voluptate excepturi incidunt? Dolorum earum atque neque.',image:'https://tunisie.co/uploads/images/content/darmounira-241219-1.jpg'}
            ,
            {id:2,post:'Freelancer Web Developer ',year:'2018-2019',desc:'Freelancer '},

        ]
    }
    var exp=data.exp;
    const image = (el,k) => {
        if (typeof el == "string"){
            return <img src={el} alt={"image"+k}></img>
        }
        
    }
  return (
    <div>
          <div className="experience" data-aos="fade-right">
                <h1>Experience</h1>
                <div className="seperator50"></div>
                <div className="experience-content">
                    {exp.map((elem,k)=>{return (
                    <div key={elem.id}>
                        <h2>{elem.post}</h2>
                        <h3>{elem.year}</h3>
                        <div className="desc">
                            {image(elem.image,elem.id)}
                            <p>{elem.desc}</p>
                        </div>
                    </div>
                    )})}
                </div>
            </div>
    </div>
  )
}

export default Experience