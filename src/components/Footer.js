import React from 'react'
import styled from "styled-components";

const Footer = () => {

    return (

        <Wrapper>
            <Design>Design by SWM</Design>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
position: fixed; 
/* width: 100%; */
/* display: flex; */
justify-content: flex-end;
align-items: center;
width: 100%;
height: 100%;
padding: 15px;  
background-color: black;
@media (max-width: 320px) {

}
`

const Design = styled.h1`
font-family: 'PBIO', sans-serif; 
color: rgba(205,199,165,255);
padding-right: 2%;
`