import React, { useEffect } from 'react'
import styled from 'styled-components'
import BackGround from '../../../assets/Images/1156488.png'
// import BackGround from '../../../assets/Images/Project Image/ProjectCV/cv1.PNG'
import BackGround1 from '../../../assets/Images/Project Image/ProjectCV/cv1.PNG'
import cv2 from '../../../assets/Images/Project Image/ProjectCV/cv2.PNG'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import AOS from 'aos';


function MyCVExplanation() {
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
            <h1><span>My</span> CV</h1>
            <div className="container mt-4">
             
                <div className="row" data-aos="fade-right">
                    <div className="col-6">
                        <img className='img-fluid ' style={{ borderRadius: 15 }} src={BackGround1} alt="background" />
                    </div>
                    <div className="col-6">
                        <article>
                        The project is to summarize some of my selected works <br />
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
                                        <td>React Hooks</td>
                                        <td>Some popular Hooks to handle page and user behavior (useState, useEffect)</td>
                                    </tr>
                                    <tr>
                                        <td>Frame-Motion</td>
                                        <td>Create creative animation for page (loader, 1st coming of seperated components)</td>
                                    </tr>

                                    <tr>
                                        <td>AOS</td>
                                        <td>Animate On Scroll Library, will listen to user's scroll behavior then triggering animation for components </td>
                                    </tr>
                             
                                </tbody>
                            </table>

                        </article>

                    </div>
                </div>
                <div className="row " style={{paddingBottom:100}} data-aos="fade-left">
                    <div className="col-6">
                        <img className='img-fluid' src={cv2} alt="login-nav" />
                    </div>
                    <div className="col-6">
                        <article>
                            A brief explanation of each project, included some typical of how i build these project.
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
                                        <td>React-Router-Dom</td>
                                        <td>Navigate from selected project to explanation page.</td>
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

export default MyCVExplanation

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
    /* padding: 60px 0 60px 0; */
    margin-top: 60px;
    /* margin-bottom: 100px; */
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