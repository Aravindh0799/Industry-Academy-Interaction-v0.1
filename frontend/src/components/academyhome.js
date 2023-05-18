import React from 'react'
import {Container} from 'react-bootstrap'
import "../home.css";
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
      

       <div style={{marginTop:'130px'}}> <Caarousel></Caarousel></div>
      <div className='a' style={{background: 'rgba( 255, 255, 255, 0.25 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 4px )'}}>
     
      <div class="content row " >
            <div class="col-md-12" >
                          <div class="row" >
            <div class="col-md-7">
              <h1><b>Happenings in Academy!</b></h1>
                <div class="demo-content" style={{textAlign:'justify',fontSize:'18px'}}>
                                <p style={{textAlign:'justify'}}>Founded in 1925, Indian Chamber of Commerce (ICC) is the leading and only National Chamber of 
                                Commerce having headquarter in Kolkata, and one of the most pro-active and forward-looking Chambers in the country today. Its membership spans some of the most prominent and major industrial groups in India.ICC’s forte is its ability to anticipate the needs of the future, respond to challenges, and prepare the stakeholders in the economy to benefit from these changes and opportunities. Set up by a group of pioneering industrialists led by Mr G D Birla, the Indian Chamber of Commerce was closely associated with the Indian Freedom Movement, as the first organised voice of indigenous Indian Industry.</p>
                </div>

            </div>
            <div class="col-md-3 justify-content-center" >
                <div class="demo-content bg-alt" >
                <iframe  style={{marginRight:'100px'}} width="470"  height="300" src="https://www.youtube.com/embed/dual15LJEhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
</div>
</div>

<div class="row">
            <div class="col-md-4">
                <div class="demo-content">
                <p><NewsFeed ></NewsFeed></p>     

                </div>
            </div>
            <div class="col-md-7" >
            <h2><b>The Mission</b></h2>
                <div class="demo-content bg-alt "style={{textAlign:'justify',fontSize:'18px'}}>
                <p style={{textAlign:'justify'}}>Founded in 1925, Indian Chamber of Commerce (ICC) is the leading and only National Chamber of 
                                Commerce having headquarter in Kolkata, and one of the most pro-active and forward-looking Chambers in the country today. Its membership spans some of the most prominent and major industrial groups in India.ICC’s forte is its ability to anticipate the needs of the future, respond to challenges, and prepare the stakeholders in the economy to benefit from these changes and opportunities. Set up by a group of pioneering industrialists led by Mr G D Birla, the Indian Chamber of Commerce was closely associated with the Indian Freedom Movement, as the first organised voice of indigenous Indian Industry.</p>

                </div>
                <h2><b>The Vision</b></h2>
                <div class="demo-content bg-alt "style={{textAlign:'justify',fontSize:'18px'}}>
                <p style={{textAlign:'justify'}}>Founded in 1925, Indian Chamber of Commerce (ICC) is the leading and only National Chamber of 
                                Commerce having headquarter in Kolkata, and one of the most pro-active and forward-looking Chambers in the country today. Its membership spans some of the most prominent and major industrial groups in India.ICC’s forte is its ability to anticipate the needs of the future, respond to challenges, and prepare the stakeholders in the economy to benefit from these changes and opportunities. Set up by a group of pioneering industrialists led by Mr G D Birla, the Indian Chamber of Commerce was closely associated with the Indian Freedom Movement, as the first organised voice of indigenous Indian Industry.</p>

                </div>
                <div class="demo-content bg-alt "style={{textAlign:'justify',fontSize:'18px',marginBottom:'50px'}}>
                <p style={{textAlign:'justify'}}>Founded in 1925, Indian Chamber of Commerce (ICC) is the leading and only National Chamber of 
                                Commerce having headquarter in Kolkata, and one of the most pro-active and forward-looking Chambers in the country today. Its membership spans some of the most prominent and major industrial groups in India.ICC’s forte is its ability to anticipate the needs of the future, respond to challenges, and prepare the stakeholders in the economy to benefit from these changes and opportunities. Set up by a group of pioneering industrialists led by Mr G D Birla, the Indian Chamber of Commerce was closely associated with the Indian Freedom Movement, as the first organised voice of indigenous Indian Industry.</p>

                </div>
            </div>
        </div>
  

      </div>
   
    
     
      <br></br>
      <br></br>
    
      
    <div className="footer-part">
 
    
        <Footer></Footer>
      </div>
      
     

      </>
    
  )
}
/*mmmm*/


export default academyhome


