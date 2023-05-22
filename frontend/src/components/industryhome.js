import React from 'react'
import {Container} from 'react-bootstrap'
import "../newhome.css";
import Navbar1 from './Navbar1';
import Footer from './footer';
import NewsFeed from './newsfeed';
import Caarousel from './corousel';

/*mmmm*/

function academyhome() {
  return (

    <>
      <div class="nav-bar">
        <Navbar1></Navbar1>
       </div>
       <Container>


       <div style={{marginTop:'130px'}}> <Caarousel></Caarousel></div>

      <div className='a'>
  
            <div class="content row " >
                  {/* <div class="col-md-12" > */}
                        {/* <div class="row" > */}
                              <div class="col-md-6">
                                    <h1><b>Welcome to the Academic-Industry Web Portal!</b></h1>
                                     <div class="demo-content" style={{textAlign:'justify',fontSize:'18px'}}> 
                                        <p style={{textAlign:'justify'}}>As an industry professional accessing our platform, you are entering a dynamic 
                                        ecosystem that bridges the gap between academia and industry.
                                         This dedicated industry page serves as a gateway to a wealth of resources,
                             collaboration opportunities, and industry-focused content. Here's what you can expect:.</p>
                                   </div> 

                              </div>
                              <div class="col-md-6">
                                    <div class="demo-content_video" > 
                                            <iframe src="https://www.youtube.com/embed/dual15LJEhA"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                    allowfullscreen>
                                           </iframe>
                                    </div>
                              </div>
                      {/* </div> */}
                {/* </div> */}
          </div>


          <br></br>
          
          
    

<div class="row">
            <div class="col-md-6">
                <div class="demo-content">
                <p><NewsFeed ></NewsFeed></p>     

                </div>
            </div>
            <div class="col-md-6" >
                    <h2><b>Welcome to the Academic-Industry Web Portal!</b></h2>
                        <div class="demo-content bg-alt "style={{textAlign:'justify',fontSize:'18px'}}>
                            <p style={{textAlign:'justify'}}>Industry-Academia Collaboration: Connect with leading academic institutions, researchers, and students to foster collaboration and innovation. Explore joint research projects, mentorship programs, and knowledge exchange initiatives. Collaborate with academia to address industry challenges, tap into cutting-edge research, and access a talent pool of future professionals.

Talent Acquisition and Internships: Discover talented individuals from academic institutions who are seeking industry exposure and practical experience. Access internship programs, co-op opportunities, and recruitment channels to connect with aspiring students and graduates. Nurture and develop talent by providing them with real-world industry exposure and hands-on learning experiences.

Industry-Driven Research: Access industry-specific research studies, whitepapers, and reports conducted by academic institutions. Stay updated on the latest industry trends, market insights, and technological advancements. Leverage research findings to make informed business decisions, drive innovation, and stay competitive in your industry.</p>

                        </div>


                        <p><b>Explore More!!</b></p>
                        <div class="demo-content bg-alt "style={{textAlign:'justify',fontSize:'18px'}}>
                        <p style={{textAlign:'justify'}}>Industry Events and Conferences: Stay informed about industry-specific events, conferences, trade shows, and exhibitions. Network with industry peers, showcase your products and services, and stay up-to-date with industry developments. Participate in panel discussions, keynote speeches, and interactive sessions to expand your industry knowledge and professional network.

Industry Resources and Toolkits: Access a comprehensive repository of industry resources, including industry guides, toolkits, templates, and frameworks. These resources are designed to assist you in various aspects of your business, such as marketing, strategy, innovation, and operations. Leverage these resources to streamline processes, enhance efficiency, and achieve business goals.</p>

                        </div>


                        <div class="demo-content bg-alt "style={{textAlign:'justify',fontSize:'18px',marginBottom:'50px'}}>
                        <p style={{textAlign:'justify'}}></p>

                        </div>
            </div>
  </div>
  

      </div>
   
    
     
      <br></br>
      <br></br>
      </Container>
    
      
    <div className="footer-part">
        <Footer></Footer>
    </div>
      
     

      </>
    
  )
}
/*mmmm*/


export default academyhome


