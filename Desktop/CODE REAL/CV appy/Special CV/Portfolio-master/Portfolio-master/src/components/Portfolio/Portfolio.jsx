import React from 'react'
import CTABtn from '../CTABtn/CTABtn'
import './style.css'
import { NavLink } from 'react-router-dom'
import film1 from '../../assets/Images/Project Image/Project film/Normal film/2022-05-18 22 21 15.png'
import adminPic from '../../assets/Images/Project Image/Project film/admin/Admin big panel.png'
function Portfolio() {
    const data = {
        projects: [
            {
                id: 1, title: 'E-Theater', desc: 'E-theater is online booking ticket web application', image: film1,
                technology: ["React", "Redux-Thunk", "React-Router-Dom", "Ant-Design", "Formik", "Yup", "Boostrap", "axios", "i18n"],
                to: '/E-Movie-Explanation'
            },
            {
                id: 2, title: 'E-Theater Dashboard Admin', desc: 'An expansion of E-theater booking ticket. Including manage user, films', image: adminPic,
                technology: ["React", "Redux-Thunk", "React-Router-Dom", "Ant-Design", "Formik", "Boostrap", "axios", "Form data"],
                to: '/Dashboard-Admin-Explanation'
            },
            { id: 3, title: 'Udemy site', desc: 'Challenge of 24 hours to create a web app with react', image: 'https://www.techdiagonal.com/wp-content/uploads/2019/08/tech-diagonal-reactjs-create-react-app.jpg' },
            { id: 4, title: 'Lucky Rolling Game', desc: 'An funny game made by react', image: 'https://www.techdiagonal.com/wp-content/uploads/2019/08/tech-diagonal-reactjs-create-react-app.jpg' },
            { id: 4, title: 'Product Page', desc: 'An funny game made by react', image: 'https://www.techdiagonal.com/wp-content/uploads/2019/08/tech-diagonal-reactjs-create-react-app.jpg' },
            { id: 4, title: 'Lucky Rolling Game', desc: 'An funny game made by react', image: 'https://www.techdiagonal.com/wp-content/uploads/2019/08/tech-diagonal-reactjs-create-react-app.jpg' },

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
                            <NavLink to={`${elem.to}`}  className="col-4 "
                                onClick={() => {

                                }}
                            >
                                <div className="text-center">
                                    <div key={elem.id} className="project-card">
                                        <h2>{elem.title}</h2>
                                        <img src={elem.image} alt={"image" + elem.id}></img>
                                        <div className='d-flex wrap-tech mt-2'>
                                            {elem.technology?.map((item, index) => {
                                                console.log(item)
                                                return <div className='tag-tech' key={index}>
                                                    {item}
                                                </div>
                                            })}
                                        </div>
                                        <p>{elem.desc}</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
                <div className='text-center w-100'>
                    <CTABtn
                        text="See more!"
                        // link="https://drive.google.com/file/d/1_cAMkys07aDdbtoDAwwCRVtqqoJzfbbe/view?usp=sharing"
                        padding="clamp(8px, 2px + 1vw, 10px)"
                        width="clamp(120px, 90px + 10vw ,220px)"
                    />

                </div>
            </div>
        </div>

    )
}

export default Portfolio