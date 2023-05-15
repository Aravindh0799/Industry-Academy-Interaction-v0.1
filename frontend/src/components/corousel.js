import {Carousel,Button} from 'react-bootstrap';
import { useState } from 'react';
import './corousel.css'

function Caarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const slides = [
        {
          url: 'https://hintmedia.in/wp-content/uploads/2021/03/Modi-DD-News-770x433-1.jpg',
  
        },
        {
          
            url: 'https://images.unsplash.com/photo-1536181783029-1097aaf179de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        },
        {
        
          url: 'https://t4.ftcdn.net/jpg/02/49/51/07/360_F_249510737_yLr06ae4n6mckGANXZJgqyT2gt0BEC23.jpg~',
        },
    
        {
          url: 'https://c0.wallpaperflare.com/preview/576/99/716/india-new-delhi-government-parliament.jpg',
        },
        {
          url: 'https://assets.thehansindia.com/hansindia-bucket/9456_Indian_Constitution.jpg',
        },
      ];
    
  return (
    <div class="carousel-images">
    <Carousel activeIndex={index} onSelect={handleSelect}>
    {slides.map((images)=>
      <Carousel.Item>
        <img width={900} height={500}
          className="d-block w-100 "
          src={slides[index].url}
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p>{slides[index].caption}</p>
        </Carousel.Caption>
      </Carousel.Item>)}
    </Carousel>
    </div>
    );
}

export default Caarousel;