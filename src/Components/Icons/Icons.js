import React from 'react';
import styled from 'styled-components';

import { DiJsBadge, DiCss3, DiHtml5, DiReact, DiGithubBadge, DiNodejsSmall} from "react-icons/di";
import { SiTailwindcss, SiLinkedin} from "react-icons/si";

const IconContainer = styled.div`
    width: 50vw;
    transform: rotate(-45deg);
    position: absolute;
    right: 10%;
    bottom: 35%;
    z-index: 100;

    p{
      position: absolute;
    }

    //working on responsive icons
    //corresponds with app file title media query
      @media(max-width: 888px) {

        transform: rotate(0deg);
        bottom: 10%;
        left: 25%;
        
      }
`;

const InnerContainer = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2.5rem;

    div {
        height: 5rem;
        width: 5rem;
        display: flex;
        font-size: .8rem;
        flex-direction: column;
        justify-content: center;
      }

      .icon {
        width: 100%;
        height: 100%;
        transform: rotate(45deg);
        animation: spin 2s;
        animation-fill-mode: backwards;
      }

      @keyframes spin {
        0% {transform:rotate(-360deg); opacity: 0;}

        75% { opacity: 1;}
        100% {
            //needs to be zero so that it ends at the original position
          transform: rotate(45deg);

        }
      }
  

      //working on responsive icons
      //changes may affect the event listeners in the app file.
      @media(max-width: 888px) {
            //mobile breakpoint
            //makes sure the icons rotate and end 
            //in a flat state instead of rotated
            width: 70vw;
            margin-left: -3rem;
            

          .icon {
            transform: rotate(0deg);

            @keyframes spin {
                0% {transform:rotate(-360deg) translateX(40px); opacity: 0;}
        
                100% {
                    //needs to be zero so that it ends at the original position
                  transform: rotate(0deg);
        
                }
              }
          }

          .iconC {
              margin: .2rem;
              width: 8rem;
          }
      }
    
    
    .js {
        color: yellow;
    }

    .html {
        color: orangered;
    }

    .css {
        color: #2965f1 ;
    }

    .git {
        color: white;
    }

    .lnkIn {
        color: #0077B5;
    }

    .TWCss {
        color: #87CEFA;
    }

    .nodeIcon {
        color: #3C873A;
    }

    .iconC:hover {
        animation: iconSpin 1s ease-out;
    }



    @keyframes iconSpin {
        from {
            opacity: 1;
            transform: rotate(360deg);
            
        }
        to {
            transform: rotate(0deg);
            backface-visibility: visible;
        }
    }

`;

const Cont = styled.div`
    .iconName {
        text-align: center;
        width:10%;
    }

    .newIcon {
        transform: translateY(280px) translateX(120px);
        border-top: 2px solid #66FCF1;
        border-left: 2px solid #66FCF1;
        border-right: 2px solid #66FCF1;
        border-bottom: 2px solid white;
    }

    @media (max-width: 888px) {

        .iconName {
            width: 100%;
            font-size: 1rem;
        }

        // breakpoint for tablet append element
        .newIcon {
            transform: translateX(200px) translateY(187px);
            width: 300px;
        }
    }

    //breakpoint to style smallest screen and the
    //onhover element for the icons
    @media (max-width: 580px) {
        .newIcon {
            transform: translateX(130px) translateY(190px);
            width: 300px;
        }
    }

    .slideAnim {
        animation: slideAcross .4s;
    }

    @keyframes slideAcross {
        0% {left: 70%; bottom: -300px; opacity: 0}
        75% {left: 70%; bottom: -250px; opacity: 0.5}
        100% {left 110%; bottom: -300px; opacity: 1}
    }
`;


const Icons = (props) => {
    let icon = document.querySelectorAll('.icon');
    
    // function removeIconNames() => {
        
        // }
        
        let textShower = (val) => {
        let iconText = document.querySelector('.iconName');
        // console.log(iconText)

        if(val === 'remove') {
            //remove str added onmouseleave
            //to clear previous data rendered in the iconName element
            let current = document.querySelector('.newIcon');
            current.parentNode.removeChild(current)
        }else {
            //if anything else then create and append element
            let text;
        let el = document.createElement('P')
        if(val === 'Github' || val === 'LinkedIn') text = document.createTextNode('Check my ' + val)

        else text = document.createTextNode(val);
        el.appendChild(text);
        el.style.fontSize = '1rem';
        el.style.padding = '4px';
        el.style.color = 'white';
        el.style.borderRadius = '25px';
        el.classList.add('newIcon');
        el.classList.add('slideAnim');
        iconText.appendChild(el);
        }
    }

    return (
        <Cont>
            <IconContainer style={props.css}>
            <InnerContainer>
                <div className='iconC'><DiJsBadge className='icon js' onMouseEnter={() => textShower('Javascript')} onMouseLeave={() => textShower('remove')} style={props.color}/></div>
                <div className='iconC'><DiHtml5 className='icon html' onMouseEnter={() => textShower('HTML5')} onMouseLeave={() => textShower('remove')} style={props.color}/></div>
                <div className='iconC'><DiCss3 className='icon css' onMouseEnter={() => textShower('CSS3')} onMouseLeave={() => textShower('remove')} style={props.color}/></div>
                <div className='iconC'><DiReact className='icon' onMouseEnter={() => textShower('ReactJS')} onMouseLeave={() => textShower('remove')} style={props.color}/></div>
            </InnerContainer>
            <InnerContainer>
                <div className='iconC'><DiNodejsSmall className='icon nodeIcon' onMouseEnter={() => textShower('NodeJS')} onMouseLeave={() => textShower('remove')} style={props.color}/></div>
                <div className='iconC' ><DiGithubBadge className='icon git' onMouseEnter={() => textShower('Github')} onMouseLeave={() => textShower('remove')} onClick={() => {window.open('https://github.com/')}} style={props.color}/></div>
                <div className='iconC'><SiLinkedin className='icon lnkIn' onMouseEnter={() => textShower('LinkedIn')} onMouseLeave={() => textShower('remove')} onClick={() => {window.open('https://www.linkedin.com/in/noel-williams-1660b1190/')}}style={props.color}/></div>
                <div className='iconC'><SiTailwindcss className='icon TWCss' onMouseEnter={() => textShower('Tailwind CSS')} onMouseLeave={() => textShower('remove')} style={props.color}/></div>
            </InnerContainer>
        </ IconContainer>
        <div className='iconName'></div>
        </Cont>
        
    )
}

export default Icons;