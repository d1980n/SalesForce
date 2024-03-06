import './home.css';
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import Heiders from '../temp/Hieders'
import TabListAdd from '../temp/TabListAdd'
import im1 from './image/im1.jpg';
import im2 from './image/im2.png';
import im3 from './image/im3.png';
function Home() {
  return(
    
    <body className='home'>
     <header className='head'>
      <Heiders/>
    </header> 
      
      <div className='all'>


    {/* Bigbar */}
    <div className='bigbar'>
      <div className='content1'>
        <h1>Shoping more Easy with SFORC</h1>
        <h3>Shoping with joy</h3>
        <input class="srch" type="Search" placeholder="Search"/>
      </div>
      <div className='content2'>
        <img className='im3' src={im3} alt="" />
      </div>
    </div>
    {/* end bigbar */}



    {/* categoty start */}
    <div className='category'>
      <h1 className='subj'>Menu</h1>
      <div className='card'>
      <Link to="/Activity">
        <div className='card-ch'>
        <svg fill="none" viewBox="0 0 24 24" height="4vh" width="4vh">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 12a4 4 0 118 0 4 4 0 01-8 0zm4 1a1 1 0 110-2 1 1 0 010 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9 7a7 7 0 110-14 7 7 0 010 14z"
        clipRule="evenodd"
      />
    </svg>
        <p>Activity Log</p>
        </div>
        </Link>
        <Link>
        <div className='card-ch'>
        <svg fill="none" viewBox="0 0 24 24" height="4vh" width="4vh">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 15a1 1 0 00-1-1H9a1 1 0 00-1 1v6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-2v-6z"
      />
    </svg>
        <p>Users</p>
        </div>
        </Link>
        <Link>
        <div className='card-ch'>
        <svg fill="none" viewBox="0 0 24 24" height="3.5vh" width="3.5vh">
      <path fill="currentColor" d="M10 12a1 1 0 100 2h4a1 1 0 000-2h-4z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 2a3 3 0 00-3 3v14a3 3 0 003 3h16a3 3 0 003-3V5a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v3h18V5a1 1 0 00-1-1zM3 19v-9h18v9a1 1 0 01-1 1H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
        <p>Items</p>
        </div>
        </Link>
        <Link>
        <div className='card-ch'>
         <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="3vh"
      width="3vh"
    >
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
        <p>Key Category</p>
        </div>
        </Link>
        <Link>
        <div className='card-ch'>
         <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="3vh"
      width="3vh"
    >
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
        <p>Key Category</p>
        </div>
        </Link> 
        <Link>
        <div className='card-ch'>
         <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="3vh"
      width="3vh"
    >
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
        <p>Key Category</p>
        </div>
        </Link>
        <Link>
        <div className='card-ch'>
         <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="3vh"
      width="3vh"
    >
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
        <p>Key Category</p>
        </div>
        </Link>
      </div>
      
    </div>
    
    
    {/* categoty end */}

    {/* tab list start */}
    <div className='TablistS'>
      <h1 className='subj'>Add</h1>
      <TabListAdd/>
    </div>  


    
   
    {/* tab list end */}

    {/* Carousel
    <div class="container1">
        <div class="wrapper1">
            <img src={im1} className='udin1'/>
            <img src={im2} className='udin1'/>
            <img src={im1} className='udin1'/>
            <img src={im2} className='udin1'/>
        </div>
    </div> */}
    
    </div>
    </body>
    
  );
  

}

export default Home;