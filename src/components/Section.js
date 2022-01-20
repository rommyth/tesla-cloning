import React from 'react'
import styled from "styled-components"
import { Fade } from "react-awesome-reveal"
import arrowDown from '../images/down-arrow.svg'
import './Apa.css'

function Section({ id, title, description, leftBtnText, rightBtnText, backgroundImg }) {
    console.log(backgroundImg);
    return (
        <Banner bgImage={backgroundImg} id={id}>
            <Fade>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <div className="test"></div>
                <Fade>
                    <ButtonGroup>
                        <LeftButton>{leftBtnText}</LeftButton>
                        {/* Jika props rightBtnText ada maka tampilkan dan sebaliknya */}
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src={arrowDown} />
            </Buttons>
        </Banner>
    )
}

export default Section

const Banner = styled.div`
    
     width: 100vw;
     height: 100vh;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     display: flex;
     flex-direction: column; 
     justify-content: space-between;
     align-items: center;
     background-image: ${props => `url(${props.bgImage})`}
     
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: 10;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom:10px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23,26,32, 0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase; 
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    letter-spacing: 0.03em;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65s;
    color: black;
`;

const DownArrow = styled.img`
    margin-top: 10px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`;

const Buttons = styled.div`

`;