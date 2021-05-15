import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

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
        z-index: 10000;

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

        .active:hover {
          animation: none;
        }

        .circle:hover {
          animation: navCircleJump 1s infinite;
        }

        @keyframes navCircleJump {
          0% {opacity: 1}
          50% {transform: translateY(-20%)}
          100% (opacity: 1;)
        }
      
      `;


//     //navigation circles at the bottom of the page
export function PageNavCircles(props) {
  const [page, setPage] = useState('');

  useEffect(() => {
    //used to radner a different page depending on
    //which nav circle clicked
    let pageTo = page;
    if(pageTo !== '') {
      let callbackFunc = props.callback;
      callbackFunc(pageTo);
      setPage('');
    }
  }, [page])

    return (
      <>
          <FullWidthContainer>
            <NavCircleContainer >
              {/* 3 divs that conditionally style according to current page */}
              <div className={`${props.render === 'about' ? 'active' : 'opacity'} circle`} onClick={() => setPage('about')}></div>
              <div className={`${props.render === 'landing' ? 'active' : 'opacity'} circle`} onClick={() => setPage('landing')} ></div>
              <div className={`${props.render === 'project' ? 'active' : 'opacity'} circle`} onClick={() => setPage('project')}></div>
            </NavCircleContainer >
          </FullWidthContainer>
      </>
    )
  }