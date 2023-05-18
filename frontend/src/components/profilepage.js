import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import coverimg from "../images/cover-pic.png"
import usermainImg from "../images/user-main.jpg"
import user2 from "../images/user-2.png"
import connectImg from "../images/connect.png"
import chatImg from "../images/chat.png"
import microsoftImg from "../images/microsoft.png"
import slackImg from "../images/slack.png";
import googleImg from "../images/google.png"
import rightArrowImg from "../images/right-arrow.png"
import northImg from "../images/north.png"
import swinburnImg from "../images/Swinburn.png"
import stanfordImg from "../images/stanford.png"
import { BsFillPencilFill } from "react-icons/bs";
import Axios  from "axios";
import {Container} from 'react-bootstrap'
import "./profilepage.css";
const ProfilePage =({openModal}) =>{
 
 
  return (
    <div>

    <div className="container">
      <div className="profile-main">
          <div className="profile-container">
                <img src={coverimg} width="100%" />
            <div className='profile-container-outer'>
                <div className="profile-container-inner">
                    <img src={usermainImg} className="profile-pic"/>
                    <h1>Ali Haider Rajput</h1>
                    <b>Web Developer at Microsoft & Also work as freelancer on Fiverr and Upwork and Founder of <a
                            href="https://www.freecodebox.com/">freecodebox</a> tech agency </b>
                    <p>Pakistan, Australia (Head Office) &middot; <a href="#">Contact Info</a></p>
                </div>
                <div className='edit-btn-container'>
                <BsFillPencilFill className="edit-btn" onClick={openModal}/>
                </div>
            </div>
            
        </div>
            <div className="profile-description">
                <h2>About</h2>
                <p>My name is Ali Haider. I am the founder of FreeCodeBox Web Tech Agency. I started When I am 15 years
                    old as a Content writer and Video Editor. But my intrust was in Programming and Developing so I am
                    choosing Web Development and then App development. At that time I and my team provided completely
                    designed websites with different and amazing facilities. When I am 17, I started web development and
                    serve as web developer as a freelancer on Fiverr, Upwork, Freelancer.com and some other local
                    platforms like Facebook, Instagram, Linked In, and Twitter. I am working with many teams no matter
                    if the target is large or small, I always work hard. After a long work as a freelancer then I am
                    starting an online web development tech agency that provides you with all types of web development
                    facilities. Also, I have a YouTube channel in which I shared free online courses about online
                    learning, freelancing and different skills-based courses. I am not handling only local clients but
                    also handle international clients. This is my small introduction.</p>
                <a href="#" className="see-more-link">See More...</a>
            </div>

            <div className="profile-description">
                <h2>Experience</h2>
                <div className="profile-desc-row">
                    <img src={microsoftImg}/>
                    <div>
                        <h3>
                            Lead Front-End Developer
                        </h3>
                        <b>MicroSoft &middot; Part-Time(Remote)</b>
                        <b>May 2022 - Present &middot; 1.9 year</b>
                        <p>Welcome to Freecodebox Web Seller, a web development online agency dedicated to delivering
                            high-quality and innovative web solutions to our clients. Our agency is comprised of a team
                            of talented and experienced web developers, designers, and digital marketing experts who are
                            passionate about creating websites that are not only aesthetically pleasing but also
                            functional, responsive, and user-friendly.</p>
                        <hr/>
                    </div>
                </div>
            </div>

            <div className="profile-description">
                <h2>Experience</h2>
                <div className="profile-desc-row">
                    <img src={slackImg}/>
                    <div>
                        <h3>
                            Full Stack Developer
                        </h3>
                        <b>Slack &middot; Part-Time(Remote)</b>
                        <b>March 2021 - Present &middot; 2.9 year</b>
                        <p>Welcome to Freecodebox Web Seller, a web development online agency dedicated to delivering
                            high-quality and innovative web solutions to our clients. Our agency is comprised of a team
                            of talented and experienced web developers, designers, and digital marketing experts who are
                            passionate about creating websites that are not only aesthetically pleasing but also
                            functional, responsive, and user-friendly.</p>
                        <hr/>
                    </div>
                </div>
            </div>

            <div className="profile-description">
                <h2>Experience</h2>
                <div className="profile-desc-row">
                    <img src={googleImg} />
                    <div>
                        <h3>
                            Backend Developer
                        </h3>
                        <b>Google &middot; Part-Time(Remote)</b>
                        <b>April 2020 - Present &middot; 3.9 year</b>
                        <p>Welcome to Freecodebox Web Seller, a web development online agency dedicated to delivering
                            high-quality and innovative web solutions to our clients. Our agency is comprised of a team
                            of talented and experienced web developers, designers, and digital marketing experts who are
                            passionate about creating websites that are not only aesthetically pleasing but also
                            functional, responsive, and user-friendly.</p>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="profile-description">
                <h2>Experience</h2>
                <div className="profile-desc-row">
                    <img src={googleImg}/>
                    <div>
                        <h3>
                            Web Developer
                        </h3>
                        <b>Google &middot; Part-Time(Remote)</b>
                        <b>June 2021 - Present &middot; 2.9 year</b>
                        <p>Welcome to Freecodebox Web Seller, a web development online agency dedicated to delivering
                            high-quality and innovative web solutions to our clients. Our agency is comprised of a team
                            of talented and experienced web developers, designers, and digital marketing experts who are
                            passionate about creating websites that are not only aesthetically pleasing but also
                            functional, responsive, and user-friendly.</p>

                    </div>
                </div>
                <hr/>
                <a href="#" className="experience-link">Show the other 3 Experience <img src={rightArrowImg}/></a>
            </div>

            <div className="profile-description">
                <h2>Education</h2>
                <div className="profile-desc-row" >
                    <img src={stanfordImg} />
                    <div>
                        <h3>StandFord University</h3>
                        <b>BSCS, Computer Science</b>
                        <b>2019-2023</b>
                        <hr/>
                    </div>
                </div>

                <div className="profile-desc-row">
                    <img src={northImg}/>
                    <div>
                        <h3>Northwestern University</h3>
                        <b>BSSE, Software Engineering</b>
                        <b>2018-2024</b>
                        <hr/>
                    </div>
                </div>

                <div className="profile-desc-row">
                    <img src={swinburnImg}/>
                    <div>
                        <h3>Swinburn University Australia</h3>
                        <b>Specialization in Computer Science</b>
                        <b>2023-2025</b>
                        
                    </div>
                </div>
            </div>
            <div className="profile-description">
                <h2>Skills</h2>
                <a href="#" className="skills-btn">Web Development</a>
                <a href="#" className="skills-btn">Communication</a>
                <a href="#" className="skills-btn">Virtual Assistant</a>
                <a href="#" className="skills-btn">Team Leadership</a>
                <a href="#" className="skills-btn">Programming</a>
                <a href="#" className="skills-btn">App Developing</a>
                <a href="#" className="skills-btn">Code Debugging</a>
                <a href="#" className="skills-btn">Javascript</a>
                <a href="#" className="skills-btn">EnterprenuorShip</a>
                <a href="#" className="skills-btn">Youtuber</a>
            </div>

            <div className="profile-description">
                <h2>Languages</h2>
                <a href="#" className="language-btn">English</a>
                <a href="#" className="language-btn">German</a>
                <a href="#" className="language-btn">Urdu</a>
            </div>

        </div>

      </div>
    </div>
  );
}

export default ProfilePage;
