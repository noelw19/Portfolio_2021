
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Projects from './Components/ProjectsPage/Projects';
import About from './Components/AboutPage/About';
import Landing from './Components/LandingPage/Landing';
import PageBtn from './Components/Button/PageButton/PageButton';
import {PageNavCircles} from './Components/PageNavCircles/PageNavCircles';

const DisplayArea = styled.div`
  width: 100%;
  height: 100vh;
  color: #66FCF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  overflow: hidden;
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
      switch(direction) {
        case 'next':
          switch(currentPage) {
            case 'landing':
              setPageToRender('project')
              break;
            case 'about':
              setPageToRender('landing')
              break;
            case 'project':
              setPageToRender('about')
              break;
          }
          break;
        case 'back':
          switch(currentPage) {
            case 'landing':
              setPageToRender('about');
              break;
            case 'about':
              setPageToRender('project')
              break;
            case 'project':
              setPageToRender('landing')
          }
          break;
      }
  }, [switchDirection])
  
  
  
  //code for the back and next buttons
  function FixedButtons() {

    //callback that retrieves the childs state which is the current page to render
    const pageStateCallback = (props) => {
        const pageDirection = props;
        setSwitchDirection(pageDirection)
        console.log(pageDirection);
    }

    return (
          <div>
            <PageBtn 
              title={'Back'} 
              sendStateBack={pageStateCallback}
              pageVal={'back'}
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

    const setMobileResponsive = () => {
      if(window.innerWidth <= 888) {
        setMobile('mobile'); 
      }else {
        setMobile('notMobile');
      }
    }
    //listens for resize event and sets the current state
    window.addEventListener('resize', () => {
      setMobileResponsive();
    })
    //listener for onload and set current state as mobile or not
    window.addEventListener('load', () => {
      setMobileResponsive();
    })

    function getPageCircleClick(renderPage) {
      let newPage = renderPage;
      setPageToRender(newPage);
    }

    

  return (
    <div className="App">
      <DisplayArea>
          {FixedButtons()}
          <PageNavCircles render={pageToRender} callback={getPageCircleClick}/>
        <MainContent>
          {pageToRender === 'about' && <About />}
          {/*if in mobile render the coloured icons only else render the left and right icon components*/}
          {pageToRender === 'landing' && <div className='landingPageContainer'><Landing size={mobile}/></div>}

          {pageToRender === 'project' && <Projects />}  

        </MainContent>

      </DisplayArea>

    </div>
  );
}

export default App;
