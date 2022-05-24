import React, { useEffect } from 'react'
import styled from 'styled-components'
import BackGround from '../../../assets/Images/Project Image/Project film/Normal film/E-movie-BG.jpg'
import BackGround1 from '../../../assets/Images/Project Image/Project film/Normal film/FilmDetail/E-Film/Efilm1.PNG'
import login from '../../../assets/Images/Project Image/Project film/Normal film/FilmDetail/E-Film/login.PNG'
import nav from '../../../assets/Images/Project Image/Project film/Normal film/FilmDetail/E-Film/nav.png'
import infoUser from '../../../assets/Images/Project Image/Project film/Normal film/FilmDetail/E-Film/infoUser.PNG'
import list from '../../../assets/Images/Project Image/Project film/Normal film/FilmDetail/E-Film/list.png'
import booking from '../../../assets/Images/Project Image/Project film/Normal film/FilmDetail/E-Film/booking.PNG'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import AOS from 'aos';


function EMovieExplantion() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const navigate = useNavigate()

    const TextVarient = {
        initial: {
            y: 60,
        },
        animate: {
            y: 0,
            transition: {
                duration: 1,
                delay: 1,
            },
        },
    };

    //Trigger AOS motion
    AOS.init({ duration: 2000, delay: 150 })

    return (
        <Container style={{ backgroundImage: `url("${BackGround}")` }}>
            <div className="navigate-bar" data-aos="fade-down" >
                <div className='inside'>
                    <button className='btn btn-secondary ml-3'
                        onClick={() => {
                            navigate(-1)
                        }}

                    >Back</button >

                    <motion.a href="http://e-theater.surge.sh/"
                        target="_blank" rel="noreferrer" alt="gdsfg"
                        variants={TextVarient}
                        initial="initial"
                        animate="animate"
                    >
                        <button className='go mr-3'>
                            Go To
                        </button>
                    </motion.a>
                </div>
            </div>
            <div className="overlay2"></div>
            <h1><span>E</span>Theater Project</h1>
            <div className="container mt-4">
                <div className="row" data-aos="fade-left">
                    <div className="col-6">
                        <img className='img-fluid' src={BackGround1} alt="background" />
                    </div>
                    <div className="col-6">
                        <article>
                            This project is to interact with customer for them to get the details of Shows, Booking, Movie, their own info (if login).<br></br>
                            It tracks all the details about the Booking history, Movie, Customer onto the server.<br></br>
                            This webpage manage user <span className='highlight'>Role-Based Authorization</span>: User - Admin.<br></br>
                            I worked 100% for UI and logic of Frontend side for this Project.
                        </article>
                    </div>
                </div>
                <div className="row" data-aos="fade-right">
                    <div className="col-6">
                        <img className='img-fluid' src={login} alt="login-efilm" />
                    </div>
                    <div className="col-6">
                        <article>
                            To <span className='highlight'>Login</span> for booking and see others interesting functions i created. <br></br>
                            <div className='mt-4'>Kindly input:</div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>anhhung321</td>
                                        <td>321321</td>
                                    </tr>
                                </tbody>
                            </table>
                          <div className=''>  What i used:</div>
                    
                            <table class="table table-2">
                                <thead>
                                    <tr>
                                        <th>Tech</th>
                                        <th>Used for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Formik</td>
                                        <td>Collect info from user input</td>
                                    </tr>
                                    <tr>
                                        <td>Yup</td>
                                        <td>Validate user input</td>
                                    </tr>

                                    <tr>
                                        <td>React-Router-Dom</td>
                                        <td>Navigate user after login succeed</td>
                                    </tr>
                                    <tr>
                                        <td>Redux-Thunk</td>
                                        <td>Dispatch asynchronous function using Axios</td>
                                    </tr>
                                </tbody>
                            </table>

                        </article>

                    </div>
                </div>
                <div className="row" data-aos="fade-left">
                    <div className="col-6">
                        <img className='img-fluid' src={nav} alt="login-nav" />
                        <img className='img-fluid mt-4' src={infoUser} alt="login-nav2" />
                    </div>
                    <div className="col-6">
                        <article>
                            You can access and update your user account after login. <br></br>
                            Also you can check all of your ticket that you have booked.
                            <br></br>
                            <div className='mt-3'>  What i used:</div>

                            <table class="table table-2">
                                <thead>
                                    <tr>
                                        <th>Tech</th>
                                        <th>Used for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>I18n</td>
                                        <td>Translate page to specific chosen language</td>
                                    </tr>
                                    <tr>
                                        <td>Formik</td>
                                        <td>Collect info from user input</td>
                                    </tr>
                                    <tr>
                                        <td>Yup</td>
                                        <td>Validate user input</td>
                                    </tr>
                                    <tr>
                                        <td>Redux</td>
                                        <td>Transfer state between component and store</td>
                                    </tr>
                                    <tr>
                                        <td>React-Router-Dom</td>
                                        <td>Navigate user after login succeed</td>
                                    </tr>
                                    <tr>
                                        <td>Redux-Thunk</td>
                                        <td>Dispatch asynchronous function using Axios</td>
                                    </tr>
                                </tbody>
                            </table>

                        </article>

                    </div>
                </div>
                <div className="row" data-aos="fade-right">
                    <div className="col-6">
                        <img className='img-fluid' src={list} alt="login-nav" />
                    </div>
                    <div className="col-6">
                        <article>
                            This session is the main heart for user to chose movie<br></br>
                            I used 3 types of slider library for this project, just to practice more about slider section !
                            <br></br>

                          <div className='mt-3'>  What i used:</div>
                            <table class="table table-2">
                                <thead>
                                    <tr>
                                        <th>Tech</th>
                                        <th>Used for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ant Slider, Slick, Swiper</td>
                                        <td>Make beautiful slider</td>
                                    </tr>
                                    <tr>
                                        <td>Ant Tab</td>
                                        <td>Make primary frame for movie's brand vs movie's info</td>
                                    </tr>
                                    <tr>
                                        <td>Redux</td>
                                        <td>Transfer state between component and store</td>
                                    </tr>
                                    <tr>
                                        <td>React-Router-Dom</td>
                                        <td>Navigate user after login succeed</td>
                                    </tr>
                                    <tr>
                                        <td>Redux-Thunk</td>
                                        <td>Dispatch asynchronous function using Axios</td>
                                    </tr>
                                </tbody>
                            </table>

                        </article>

                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-6">
                        <img className='img-fluid' src={booking} alt="login-booking" />
                    </div>
                    <div className="col-6">
                        <article>
                            This session is really interesting, the logic behind really challenge my brain someday!<br></br>
                            <br></br>

                            What i used:
                            <table class="table table-2">
                                <thead>
                                    <tr>
                                        <th>Tech</th>
                                        <th>Used for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ant Design</td>
                                        <td>Making Tab Pane - The logic to navigate from tab to tab of Ant Design is quite interesting when making also.</td>
                                    </tr>
                                   
                                    <tr>
                                        <td>Redux</td>
                                        <td>Transfer state between component and store</td>
                                    </tr>
                                    <tr>
                                        <td>React-Router-Dom</td>
                                        <td>Navigate user after login succeed</td>
                                    </tr>
                                    <tr>
                                        <td>Redux-Thunk</td>
                                        <td>Dispatch asynchronous function using Axios</td>
                                    </tr>
                                </tbody>
                            </table>

                        </article>

                    </div>
                </div>

            </div>
        </Container>
    )
}

export default EMovieExplantion

const Container = styled.div`
@font-face {
    font-family: 'MyWebFont';
    src: url('./KungFuMasterAcademy-w1j02.otf') ;
  }
body{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
position: relative;
background-size: cover;
width: 100%;
min-height: 100vh;
background-repeat: repeat-y;
background-attachment: fixed;
.overlay2{
    background-color: rgba(0, 0, 0, 0.847);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    /* background-attachment: fixed; */
}
h1{
    text-align: center;
    span{
        font-size: 80px;
        font-weight: bold;
    }
    color: #518afb;
    position: relative;
    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  
}
.container{
    width: 80%;
    position: relative;
    gap: 160px;
    padding: 60px 0 100px 0;
    article{
        color: #dd8b08;
        font-size: 20px;
    }
    .highlight{
        background-color: #646670;
        padding: 5px;
        border-radius: 5px;
        color: black;
        font-weight: bold;
    }
    .table{
        text-align: left;
        color:white
    }
    
    .table-2{
        text-align: left;

    }
}
.navigate-bar{
    display: flex;
    align-items: center;
    height: 100px;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    width: 100%;
    .inside{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: auto;
    }
    .go{
        padding: 10px 30px;
        border-radius: 10px;
        background-image: linear-gradient(45deg,  #00bfff,#3c00ff);
        color: white;
        font-weight: bold;
        letter-spacing: 2px;

        &:hover{
        /* background-image: linear-gradient(-45deg,  #00bfff,#3c00ff); */
        animation: turnColor 0.5s ease-in-out;
        /* letter-spacing: 5px; */
        }
        @keyframes turnColor {
            from{
                 background-image: linear-gradient(45deg,  #00bfff,#3c00ff);
                letter-spacing: 2px;
            }
            from{
                 background-image: linear-gradient(90deg,  #00bfff,#3c00ff);
                letter-spacing: 5px;
            }
          
        }
    }

}



`