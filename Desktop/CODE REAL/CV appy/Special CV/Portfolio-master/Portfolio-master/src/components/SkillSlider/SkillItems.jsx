import React from 'react'
import './style.css'
import htmlLogo from '../../assets/Images/Logo Skill/html.png'
import cssLogo from "../../assets/Images/Logo Skill/png-clipart-css3-badge-blue-and-white-css-icon.png"
import javaScriptLogo from "../../assets/Images/Logo Skill/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png"
import scss from "../../assets/Images/Logo Skill/pngfind.com-sass-logo-png-4521456.png"
import react from "../../assets/Images/Logo Skill/react-1-logo-png-transparent.png"
import bootsrap from "../../assets/Images/Logo Skill/boostrap logo.png"
import thunk from "../../assets/Images/Logo Skill/thunk.png"
import saga from "../../assets/Images/Logo Skill/Redux-Saga-Logo-Portrait.png"
import redux from "../../assets/Images/Logo Skill/redux-logo.png"
import routerDom from "../../assets/Images/Logo Skill/router-dom.png"
import spring from "../../assets/Images/Logo Skill/spring-icon.png"
import styleComponent from "../../assets/Images/Logo Skill/style-component.png"
import AOS from 'aos';
function SkillItems() {

    const listSkill = [
        {
            name: "React",
            logo: react,
            toolKit: [
                { name: "Redux", logo: redux },
                { name: "React Router Dom", logo: routerDom },
                { name: "Redux Thunk", logo: thunk },
                { name: "Redux Saga", logo: saga },
                { name: "Styled Component", logo: styleComponent },
                { name: "React Spring", logo: spring },

            ]
        },
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "JavaScript", logo: javaScriptLogo },
        { name: "Sass", logo: scss },
        { name: "Bootstrap", logo: bootsrap },

    ]

    //Trigger AOS motion
    AOS.init({ duration: 2500, delay: 2000 })

    return (
        <div className='container skill-items' >
            <div className="row justify-content-between align-items-center " data-aos="fade-right">
                {listSkill.map((skill, index) => {
                    if (skill.name === "React") {
                        return <div key={index} className='col-lg-2 col-md-3 col-sm-4 col-6 text-center'>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                    <div style={{ height: '100%' }}>
                                        <div style={{ height: '100%' }}>
                                            <h2 style={{ height: 70 }}>{skill.name}</h2>
                                            <img src={skill.logo} alt="123" style={{ width: 100, height: 100, borderRadius: "50%" }} className='img-fluid' />
                                        </div>
                                    </div>

                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" data-aos="fade-up">
                                    {skill.toolKit.map((item, index) => {
                                        return <div key={index} className="dropdown-item col-lg-2 col-md-3 col-sm-4 col-6" style={{ height: '100%' }}>
                                            <h2 className='text-center' style={{ height: 60, fontSize: 25, color: 'white' }}>{item.name}</h2>
                                            <img src={item.logo} alt="123" style={{ width: 70, height: 70, borderRadius: "10px" }} className='img-fluid' />
                                        </div>
                                    })}

                                </div>
                            </div>
                        </div>

                    } else {
                        return <div className='skill-item col-lg-2 col-md-3 col-sm-4 col-6 text-center' key={index}>
                            <div style={{ height: '100%' }}>
                                <h2 style={{ height: 100, color: "white" }}>{skill.name}</h2>
                                <img src={skill.logo} alt="123" style={{ width: 100, height: 100, borderRadius: "50%" }} className='img-fluid' />
                            </div>
                        </div>
                    }

                })}
            </div>




        </div>
    )
}

export default SkillItems