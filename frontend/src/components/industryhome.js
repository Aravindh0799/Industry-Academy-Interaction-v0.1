import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import "../home.css";
import Caarousel from "../components/corousel"

function Industryhome() {
  return (
    <Container>
      <div>
        Welcome to industry home page!!!
        <div className='left'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Y2Tpsvmr6DI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        About
        <br/>
        <p>lorem ipsum</p>
        <Caarousel></Caarousel>
      </div> 
    </Container>
  )
}

export default Industryhome;