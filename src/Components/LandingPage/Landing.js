import React from 'react';
import styled from 'styled-components';
import Icons from '../Icons/Icons'

const HeaderElContainer = styled.div`
  animation: SlideIn .5s;
  animation-delay: .2s;
  animation-fill-mode: backwards;

  height: 10%;
  width: 40%;
  opacity: 1;
  position: relative;
  top: -5%;
  left: 30%;
  z-index: 1000;
  

  h1, h3 {
    position: relative;
    top: 2rem;
    z-index: 10;
    margin: 0;
  }

  h3 {
    width: 60%;
  }

  @media(max-width: 888px) {
    position: relative;
    top: 4rem;
    left: 15%;
    width: 90%;

    h1, h3 {
      height: 20%;
      width: 100%;
    }

    h1 {
      font-size: 3rem;
    }

    h3 {
      fon-size: 2rem;
    }
    }

  @keyframes SlideIn {
    0% {opacity: 0; top: -40%; z-index: 20;}
  
    75%, 100% {opacity: 1; z-index: 20;}
  } 
}
`;

const LandingPage = (props) => {

  //used to take the equation mobile === 'mobile'
    //returns the js for the icon setup
    //includes css passed through icon props
    //and plugged directly into the Icon container element
    //via props.css
  function landingIconResponsiveMobileToggle(val) {
    let mobile = <Icons size={val} css={{right: '9%', top: '40%'}}/>;
    let desktop = <><Icons className='left-icons' size={val} css={{
      transform: 'rotate(45deg) scaleX(-1)',
      left: '3%', 
      opacity: '0.5', 
      color: 'black', 
      animation: 'none',
      'zIndex': '0',
      'backfaceVisibility': 'visible',
      }} color={{color: 'black'}}/> <Icons css={{right: '8%', }}/></>;
      if(val === 'mobile') {
        return mobile;
      } else if(val === 'notMobile') {
      return desktop;
      }
  }

  
    return (
      <>
        <HeaderElContainer>
          <h1>Noel Williams</h1>
          <h3>Web Developer</h3>
        </HeaderElContainer>
        {landingIconResponsiveMobileToggle(props.size)}
      </>
    )
  }

  export default LandingPage;