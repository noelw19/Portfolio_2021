import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const GlowArea = styled.div`
        width: 5rem;
        height: 5rem;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;

        button {
            width: 4rem;
            height: 4rem;
            position: relative;
            border-radius: 50%;
            background: #66FCF1;
            color: black;

        }
            //adjusted sizes for responsivity 
        @media (max-width: 888px) {
            width: 7rem;
            height: auto;

            button {
                border-radius: 25px;
                top: 20px;
                width: 7rem;
                height: 5rem;
                font-size: 1rem;
            }
        }



        .pulse {
            animation: pulse 3s infinite;
        }

        button:hover {
            animation-play-state: paused;
          }
          
          @keyframes pulse {
            0% {
              -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
              box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
            }
            70% {
                -moz-box-shadow: 0 0 0 30px rgba(204,169,44, 0);
                box-shadow: 0 0 0 30px rgba(204,169,44, 0);
            }
            100% {
                -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
                box-shadow: 0 0 0 0 rgba(204,169,44, 0);
            }
          }

    `;
const PageButton = (props) => {
    const [page, SetPage] = useState('');

    useEffect(() => {
        const callback = props.sendStateBack;
        callback(page);
        SetPage(null)
    }, [page] );


    return (
        <GlowArea id='glowArea' style={props.css}   >
            <button type='button' onClick={() => SetPage(props.pageVal)}>{props.title}</button>
        </GlowArea>
    )
}

export default PageButton;