import React from 'react'
import CTABtn from '../CTABtn/CTABtn'
import './style.css'
import { NavLink } from 'react-router-dom'
import film1 from '../../assets/Images/Project Image/Project film/Normal film/2022-05-18 22 21 15.png'
import adminPic from '../../assets/Images/Project Image/Project film/admin/Admin big panel.png'
import cvPic from '../../assets/Images/Project Image/ProjectCV/cv-big.png'
import PharmarPic from '../../assets/Images/Project Image/Pharmar/pharmar2.png'
function Portfolio() {
    const data = {
        projects: [
            {
                id: 1, title: 'E-Theater', desc: 'E-theater is online booking ticket web application', image: film1,
                technology: ["React", "Redux-Thunk", "React-Router-Dom", "Ant-Design", "Formik", "Yup", "Boostrap", "axios", "i18n"],
                to: '/E-Movie-Explanation'
            },
            {
                id: 2, title: 'E-Theater Dashboard', desc: 'An expansion of E-theater booking ticket. Including manage user, films', image: adminPic,
                technology: ["React", "Redux-Thunk", "React-Router-Dom", "Ant-Design", "Formik", "Boostrap", "axios", "Form data"],
                to: '/Dashboard-Admin-Explanation'
            },
            {
                id: 3, title: 'My Online CV',
                desc: 'An porfolio make with React',
                image: cvPic,
                technology: ["React", "React-Router-Dom", "Ant-Design", "Boostrap", "Aos", "Framer-motion"],
                to: '/My-CV-Explanation'
            },
            {
                id: 4, title: 'Dietary Supplement Page ',
                desc: 'An landing page for Dietary Supplement',
                image: PharmarPic,
                technology: ["HTML", "CSS", "Boostrap", "Javascripts","Jquery"],
                to: '/Dietary-Supplement-LandingPage-Explanation'
            },

        ]
    }
    return (

        <div className="portfolio" data-aos="fade-left" data-toggle="modal" data-target="#modelId">
            <h1>Selected Project</h1>
            <div className="seperator50"></div>
            <div className="projects-list">
                <div className="row justify-content-center">
                    {data.projects.map(elem => {
                        console.log(elem.to)
                        return (
                            <NavLink to={`${elem.to}`} className="col-xl-4  col-md-6 col-12 "
                                onClick={() => {

                                }}
                            >
                                <div className="text-center">
                                    <div key={elem.id} className="project-card">
                                        <h2>{elem.title}</h2>
                                        <img src={elem.image} alt={"image" + elem.id}></img>
                                        <div style={{minHeight:80}}>
                                            <div className='d-flex wrap-tech mt-2 justify-content-center' >
                                                {elem.technology?.map((item, index) => {
                                                    console.log(item)
                                                    return <div className='tag-tech ' key={index}>
                                                        {item}
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                        <p style={{ minHeight: 60 }}>{elem.desc}</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
                {/* <div className='text-center w-100'>
                    <CTABtn
                        text="See more!"
                        // link="https://drive.google.com/file/d/1_cAMkys07aDdbtoDAwwCRVtqqoJzfbbe/view?usp=sharing"
                        padding="clamp(8px, 2px + 1vw, 10px)"
                        width="clamp(120px, 90px + 10vw ,220px)"
                    />
                </div> */}
            </div>
        </div>

    )
}

export default Portfolio