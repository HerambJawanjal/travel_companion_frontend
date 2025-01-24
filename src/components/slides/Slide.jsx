import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const Slide = () => {
    const slide = [
        {
          URL: "https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg",
        },
        {
          URL: "https://assets-news.housing.com/news/wp-content/uploads/2022/09/12220317/Best-places-to-visit-in-July-in-India.jpg",
        },
        {
          URL: "https://housing.com/news/wp-content/uploads/2022/11/The-Worlds-Most-Beautiful-Temples.png",
        },
        {
          URL: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2016/03/Agra-Taj_Mahal.jpg",
        },
      ];

      const [index,setIndex]=useState(0);
      
      const goLeft=()=>{
        const firstslide=index===0;

        const newIndex=firstslide?slide.length-1:index-1;
        setIndex(newIndex)
      }

      const goRight=()=>{
        const lastSilde=index==slide.length-1;

        const newIndex=lastSilde?0:index+1;
        setIndex(newIndex)
      }
  return (
    <div className='flex items-center justify-center h-4/6 '>
        
        <div style={{backgroundImage:`url(${slide[index].URL})`}} className='duration-500 bg-cover bg-center  bg-no-repeat     h-full w-full flex justify-between items-center opacity-50 ' >
        <button onClick={goLeft}><FontAwesomeIcon  icon={faChevronLeft}  className='h-10 opacity-75 ' /></button>
        <button onClick={goRight}><FontAwesomeIcon icon={faChevronRight}  className='h-10  opacity-75' /></button>
        </div>
        
    </div>
  )
}

export default Slide