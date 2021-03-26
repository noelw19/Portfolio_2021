
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Projects from './Components/ProjectsPage/Projects';
import About from './Components/AboutPage/About';
import Landing from './Components/LandingPage/Landing';
import PageBtn from './Components/Button/PageButton/PageButton';

import Icons from './Components/Icons/Icons';


const DisplayArea = styled.div`
  width: 100%;
  height: 100vh;
  color: #66FCF1;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .hideIt {
    visibility: hidden;
  }
`;

const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  overflow: hidden;
  

  .landing {
    animation: SlideIn 1.4s;
    animation-delay: .2s;
    animation-fill-mode: backwards;

    height: 50vh;
    opacity: 1;
    position: relative;
    top: 8%;
    left: 33%;
    

    h1, h3 {
      position: relative;
      z-index: 10;

    }

    @media(max-width: 888px) {
      padding-left: 2rem;
      top: 21%;
      left: 8%;

      h1, h3 {
        font-size: 2.5rem;
      }
      }
      
    }

  }

  @keyframes SlideIn {
    0% {opacity: 0; top: 80%; left: -200px; z-index: 20;}
    
    50% {left: 700px; top: 50%; z-index: 20;}

    75%, 100% {opacity: 1; z-index: 20;}
  } 

  
  
`;



const FullWidthContainer = styled.div`
        height: 100vh;
        display: flex;
        justify-content: center;
        
      `;

      const NavCircleContainer = styled.div`
        width: 15vw;
        position: fixed;
        left: 40%;
        bottom: 8%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: linear-gradient(to right, #0B0C10, #1F2833);
        padding: 3px;
        border-radius: 50px;

        div{
          width:0.7rem;
          height: 0.7rem;
          background: white;
          color: black;
          border-radius: 50%;
          text-align: center;
          padding: 4px;
        }

        .active{
          background: #66FCF1;
        }

        .opacity {
          opacity: 0.2;
          width: 0.3rem;
          height: 0.3rem;
          color: none;
        }

      
      `;

const App = () => {

  const [pageToRender, setPageToRender] = useState('landing');
  const [switchDirection, setSwitchDirection] = useState('');
  const [mobile, setMobile] = useState('');


  useEffect(() => {
    let currentPage = pageToRender;
    let direction = switchDirection;

    /* checks direction to use and finds the page to render 
      depending on the button pressed and current page */
    if(direction === 'next') {
      if(currentPage === 'landing') {
        setPageToRender('project')
      } else if(currentPage === 'about') {
        setPageToRender('landing')
      } else if(currentPage === 'project') {
        setPageToRender('about')
      }
    } else if(direction === 'back') {
      if(currentPage === 'landing') {
        setPageToRender('about')
      } else if(currentPage === 'about') {
        setPageToRender('project')
      } else if(currentPage === 'project') {
        setPageToRender('landing')
      }
    }
  })
  
  //callback that retrieves the childs state which is the current page to render
  const pageStateCallback = (props) => {
      const pageDirection = props;

      setSwitchDirection(pageDirection)
      console.log(pageDirection);
  
      
  }

    //code for the back and next buttons
    function FixedButtons() {
      return (
          <div>
            <PageBtn 
              title={'Back'} 
              sendStateBack={pageStateCallback}
              pageVal={'back'}
              // onClick={handleClick}
              css={
              {
                bottom: ((mobile === 'notMobile' ? '40%' : '10%')),
                left: 0,
                paddingLeft: '2rem'
                }
              } />
            <PageBtn 
              title={'Next'} 
              sendStateBack={pageStateCallback}
              pageVal={'next'}
              css={
                {
                  bottom: ((mobile === 'notMobile' ? '40%' : '10%')), 
                  right: 0,  
                  paddingRight: '2rem', 
                  animationDelay: '1.5s'
                  }
              } />
              
          </div>
      )
    }

    //navigation circles at the bottom of the page
    function PageNavCircles() {
      return (
        <>
            <FullWidthContainer>
              <NavCircleContainer >
                {/* 3 divs that conditionally style according to current page */}
                <div className={`${pageToRender === 'about' ? 'active' : 'opacity'}`}></div>
                <div className={`${pageToRender === 'landing' ? 'active' : 'opacity'}`} ></div>
                <div className={`${pageToRender === 'project' ? 'active' : 'opacity'}`}></div>
              </NavCircleContainer >
            </FullWidthContainer>
        </>
      )
    }

    //listens for resize event and sets the current state
    window.addEventListener('resize', () => {
      if(window.innerWidth <= 888) {
        setMobile('mobile'); 
      }else {
        setMobile('notMobile');
      }
    })
    //listener for onload and set current state as mobile or not
    window.addEventListener('load', () => {
      if(window.innerWidth <= 888) {
        setMobile('mobile'); 
      }else {
        setMobile('notMobile');
      }
    })

  return (
    <div className="App">
      <DisplayArea>
          {FixedButtons()}
          {PageNavCircles()}
        <MainContent>
          {pageToRender === 'about' && <About />}
                                                              {/*if in mobile render the coloured icons only else render the left and right icon components*/}
          {pageToRender === 'landing' && <div className='landingPageContainer'><Landing /> 
          {mobile === 'mobile' ?
          <Icons css={{right: '8%', top: '40%'}}></Icons> : 
          <><Icons className='left-icons' css={{
            transform: 'rotate(45deg) scaleX(-1)',
            left: '3%', 
            opacity: '0.5', 
            color: 'black', 
            'zIndex': '0',
            'backfaceVisibility': 'visible',
            }} color={{color: 'black'}}/> <Icons css={{right: '8%', }}/></>}</div>}

          {pageToRender === 'project' && <Projects />}  
            
            {/* look at extracting the icon components
            and adding them to a separate function that checks screen size 
            and displays both on desktop and only 1 of the components below
            header. */}
          
        </MainContent>

      </DisplayArea>

    </div>
  );
}

export default App;
