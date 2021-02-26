
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Projects from './Components/ProjectsPage/Projects';
import About from './Components/About/About';
import PageBtn from './Components/Button/PageButton/PageButton';


const DisplayArea = styled.div`
  width: 100%;
  height: 100vh;
  color: #66FCF1;
  display: flex;
`;

const MainContent = styled.div`
  width: 100%;
  animation: SlideIn 1.2s;
  animation-delay: .5s;
  animation-fill-mode: backwards;
  overflow: hidden;
  font-size: 2.5rem;

  .landing {
    padding-left: 8.5rem;
    position: relative;
    top: 18%;

  }

  @keyframes SlideIn {
    0% {top: 20%; opacity: 0; font-size: 0rem;}
    
    50% {font-size: 4rem}
    100% {opacity: 1}
  } 
`;

const fullwidthContainer = styled.div`
        width: 100vw;
        height: 15vh;
        z-index: 11;
        display: flex;
        justify-content: center;
        
      `;

      const ContentContainer = styled.div`
        width: 15vw;
        position: fixed;
        left: 40%;
        bottom: 8%;
        display: flex;
        justify-content: space-around;
        align-items: center;

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


  useEffect(() => {
    let currentPage = pageToRender;
    let direction = switchDirection;

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
                bottom: '40%',
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
                  bottom: '40%', 
                  right: 0,  
                  paddingRight: '2rem', 
                  animationDelay: '1.5s'
                  }
              } />
              
          </div>
      )
    }

    function PageNavCircles() {

      

      return (
        <>
            <fullwidthContainer>
              <ContentContainer>
                <div className={`${pageToRender === 'about' ? 'active' : 'opacity'}`}></div>
                <div className={`${pageToRender === 'landing' ? 'active' : 'opacity'}`} ></div>
                <div className={`${pageToRender === 'project' ? 'active' : 'opacity'}`}></div>
              </ContentContainer>
            </fullwidthContainer>
        </>
      )
    }

    const LandingPage = () => {
      return (
        <>
          <h1>Noel Williams</h1>
          <h3>Web Developer</h3>
        </>
      )
    }

  return (
    <div className="App">
      <DisplayArea>
          {FixedButtons()}
          {PageNavCircles()}
        <MainContent>
          {pageToRender === 'about' && <About />}

          {pageToRender === 'landing' && <div className='landing' >{LandingPage()}</div>}

          {pageToRender === 'project' && <Projects />}  

          
        </MainContent>

      </DisplayArea>

    </div>
  );
}

export default App;
