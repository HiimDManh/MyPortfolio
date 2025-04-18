//import { useState, useEffect, React } from 'react'
import { ReactFullpage, Slide } from "@fullpage/react-fullpage";
import profileImg from '../assets/profileIMG.png'
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Home = () => (
    <div className="flex flex-col items-center justify-center h-screen ">
        <div className="profile-container">
            <div className="flex items-center gap-10 mt-8 absolute left-0 justify-end z-10 mb-20">
                <p className="flex justify-center items-center gap-1"><FaMapMarkerAlt />HoChiMinh, VietNam.</p>
            </div>
            <img src={profileImg} alt="Daniel" className="profile-image" />
            <div className="flex items-center gap-10 mt-8 absolute right-0 justify-end text-xl mb-20">
                <FaFacebook className="facebook cursor-pointer"><a href="https://www.facebook.com/manhvd1302/"></a></FaFacebook>
                <FaGithub href="https://github.com/HiimDManh" className="github cursor-pointer"/>
                <FaLinkedinIn href="https://www.linkedin.com/in/ducmanh1302/" className="linkedin cursor-pointer"/>
            </div>
        </div>
        <div className="text-8xl uppercase">
            <p className="dm-serif-text-regular">Daniel Vu</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-4">
            <div className="title-group">
                <h1 className="text-5xl fira-sans-condensed-medium text-gray-600">
                    Web<span className="text-2xl align-top">↗</span>designer
                </h1>
            </div>

            <div className="image-and-title">
                <h1 className="text-5xl fira-sans-condensed-medium no-fill">
                    <span>&</span> Developer
                </h1>
            </div>
        </div>

        <div className="flex justify-center items-center gap-10 mt-8">
            <a href="#design" className="cta-button">You need a designer</a>
            <a href="#dev" className="cta-button">You need a developer</a>
        </div>
    </div>    
);

export default Home;
