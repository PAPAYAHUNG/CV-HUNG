import React, { useEffect } from 'react'
import styled from 'styled-components'
import BackGround from '../../../assets/Images/1156488.png'
// import BackGround from '../../../assets/Images/Project Image/ProjectCV/cv1.PNG'
import BackGround1 from '../../../assets/Images/Project Image/Pharmar/pharmar2.png'
import cv2 from '../../../assets/Images/Project Image/Pharmar/pharmar3.png'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import AOS from 'aos';


function DietaryExplanation
    () {
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
            <h1><span>Landing page</span><br />
                Dietary Supplement
            </h1>
            <div className="container mt-4">

                <div className="row mt-4" data-aos="fade-right">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <img className='img-fluid  ' style={{ borderRadius: 15,maxHeight:610 }} src={BackGround1} alt="background" />
                            </div>
                            <div className="col-6">
                                <img className='img-fluid ' style={{ borderRadius: 15,maxHeight:610 }} src={cv2}alt="background" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <article>
                            This project is one of some landing page in my works.<br />
                            Which this one is to promote their Dietary Supplement to potential customer. <br />
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
                                        <td>HTML,CSS,Javascripts,Jquery</td>
                                        <td>This page is used with some primary technology, however it matched with the requirement from customer for promoting their product.</td>
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

export default DietaryExplanation


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