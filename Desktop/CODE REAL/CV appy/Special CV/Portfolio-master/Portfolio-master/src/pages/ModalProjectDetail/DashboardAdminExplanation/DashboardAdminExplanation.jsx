import React, { useEffect } from 'react'
import styled from 'styled-components'
import BackGround from '../../../assets/Images/Project Image/Project film/Normal film/e-movie-2.jpg'
import login from '../../../assets/Images/Project Image/Project film/Normal film/FilmDetail/E-Film/login.PNG'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import AOS from 'aos';
function DashboardAdminExplanation() {
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
            <h1>Admin Dashboard</h1>
            <div className="container">
                <div className="row" data-aos="fade-left">
                    <div className="col-6">
                        <img className='img-fluid' src={require('../../../assets/Images/Project Image/Project film/admin/1.PNG')} alt="background" />
                    </div>
                    <div className="col-6">
                        <article>
                            This Dashboard is used for admin to manage User and Film .<br></br>
                            Using RESTful API with methods: GET, PUT, POST, DELETE .<br></br>
                            Only user with  <span className='highlight'>Admin</span> role can access this page.<br></br>
                        </article>
                    </div>
                </div>
                <div className="row" data-aos="fade-right">
                    <div className="col-6">
                        <img className='img-fluid' src={login} alt="login-efilm" />
                    </div>
                    <div className="col-6">
                        <article>
                            To <span className='highlight'>Login</span> with specific role. <br></br>
                            Kindly input:
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Role</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Admin</td>
                                        <td>taikhoanadmin</td>
                                        <td>123456</td>
                                    </tr>
                                    <tr>
                                        <td>Normal User</td>
                                        <td>1111</td>
                                        <td>1111</td>
                                    </tr>
                                </tbody>
                            </table>
                            What i used:
                            <table className="table table-2">
                                <thead>
                                    <tr>
                                        <th>Tech</th>
                                        <th>Used for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>React-Router-Dom</td>
                                        <td>Using <span className='highlight'>Protected Route</span> method to manage role-based authorization b/w user vs. admin</td>
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
                                        <td>Manage state between component and store</td>
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
                        <img className='img-fluid' src={require('../../../assets/Images/Project Image/Project film/admin/2.PNG')} alt="login-efilm" />
                    </div>
                    <div className="col-6">
                        <article>
                            RESTful API is used to manage movies and users <br></br>

                            What i used:
                            <table className="table table-2">
                                <thead>
                                    <tr>
                                        <th>Tech</th>
                                        <th>Used for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>React-Router-Dom</td>
                                        <td>Navigate from list movies to Edit or Edit Showtime page</td>
                                    </tr>
                                    <tr>
                                        <td>Ant Design</td>
                                        <td>Ant Table is used to make page list with pagination</td>
                                    </tr>
                                 
                                    <tr>
                                        <td>Redux</td>
                                        <td>Manage state between component and store</td>
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
                        <img className='img-fluid' src={require('../../../assets/Images/Project Image/Project film/admin/Edit film.PNG')} alt="login-efilm" />
                        <img className='img-fluid mt-4' src={require('../../../assets/Images/Project Image/Project film/admin/EditShow.PNG')} alt="login-efilm" />
                    </div>
                    <div className="col-6">
                        <article>
                            RESTful API is used to manage movies and users <br></br>

                            What i used:
                            <table className="table table-2">
                                <thead>
                                    <tr>
                                        <th>Tech</th>
                                        <th>Used for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>React-Router-Dom</td>
                                        <td>Navigate from between page</td>
                                    </tr>
                                    <tr>
                                        <td>Formik</td>
                                        <td>Collect info from user input <br></br>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Redux</td>
                                        <td>Manage state between component and store</td>
                                    </tr>
                                    <tr>
                                        <td>Redux-Thunk</td>
                                        <td>Dispatch asynchronous function using Axios</td>
                                    </tr>
                                    <tr>
                                        <td>Interesting process</td>
                                        <td>The data send to server under Form data format<br></br>
                                        Use FileReader to turn image into base 64 format to set the chosen thumbnail from user
                                        </td>

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

export default DashboardAdminExplanation

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
    height: 50px;
    top: 50%;
    transform: translateY(50%);

    span{
        font-size: 80px;
        font-weight: bold;
    }
    color: #518afb;
    font-weight: bold;
    position: relative;
    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  
}
.container{
    padding: 60px 0 120px 0;
    width: 80%;
    position: relative;
    gap: 160px;
    article{
        color: #dd8b08;
        font-size: 20px;
    }
    .highlight{
        background-color: #646670;
        padding: 4px;
        border-radius: 4px;
        color: black;
        font-weight: bold;
    }
    .highlight-2{
        background-color: #878890;
        padding: 4px;
        border-radius: 4px;
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
        background-image: linear-gradient(45deg, #00bfff,#3c00ff);
        color: white;
        font-weight: bold;
        letter-spacing: 2px;

        &:hover{
        /* background-image: linear-gradient(-45deg, #ff0015,#3c00ff); */
        animation: turnColor 0.5s ease-in-out;
        /* letter-spacing: 5px; */
        }
        @keyframes turnColor {
            from{
                 background-image: linear-gradient(45deg, #00bfff,#3c00ff);
                letter-spacing: 2px;
            }
            from{
                 background-image: linear-gradient(90deg, #00bfff,#3c00ff);
                letter-spacing: 5px;
            }
          
        }
    }

}



`