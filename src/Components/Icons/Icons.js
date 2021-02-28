import React from 'react';
import styled from 'styled-components';

import { DiJsBadge, DiCss3, DiHtml5, DiReact } from "react-icons/di";
import { SiStyledComponents, SiTailwindcss} from "react-icons/si";

const IconContainer = styled.div`
    width: 50vw;
    transform: rotate(-45deg);
    position: absolute;
    right: 10%;
    bottom: 35%;

    p{
      text-align: center;
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
      transform: rotate(45deg)
    }

`;


const Icons = (props) => {
    return (
        <IconContainer style={props.css}>
            <InnerContainer>
                <div><DiJsBadge className='icon'/></div>
                <div><DiHtml5 className='icon' /></div>
                <div><DiCss3 className='icon'/></div>
                <div><DiReact className='icon'/></div>
            </InnerContainer>
            <InnerContainer>
                <div><SiStyledComponents className='icon'/></div>
                <div><DiHtml5 className='icon' /></div>
                <div><DiCss3 className='icon'/></div>
                <div><SiTailwindcss className='icon'/></div>
            </InnerContainer>
        </ IconContainer>
        
    )
}

export default Icons;