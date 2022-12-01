import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const LandingPage = () => {

    const history = useHistory()

    const handleStart = (ev) => {
        history.push('/kit')
    }

    return (

        <Wrapper>

            <LandingPageContentContainer>
                <TitleContainer>
                    <WelcomeTitle>Welcome to</WelcomeTitle>
                    <MainTitle>DRUMMY</MainTitle>
                </TitleContainer>

                <OptionsContainer>

                    <Start onClick={handleStart}>
                        Start
                    </Start>

                </OptionsContainer>
            </LandingPageContentContainer>
        </Wrapper>

    )
}

export default LandingPage

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 88.5vh;
background-color: black;
/* border: 3px solid red; */
`

const LandingPageContentContainer = styled.div`
padding: 30px;
border-radius: 8px;
background-color: rgba(210,210,190,255);
border-top: solid 5px rgba(230,225,210,255);
border-right: solid 5px rgba(175,175,165,255);
border-bottom: solid 5px rgba(168,168,155,255);
border-left: solid 5px rgba(215,215,200,255);
box-shadow: 0px 0px 32px 10px rgba(206,202,190,255);

@media (min-width: 320px) {
    max-width: 70%;
    box-shadow: 0px 0px 64px 5px rgba(206,202,190,255);  
    /* border: solid 5px red; */
}
`

const TitleContainer = styled.div`
/* border: 3px solid orange; */
margin: 15px;

@media (min-width: 320px) {
    /* border: solid 5px orange; */
}
`

const WelcomeTitle = styled.h1`
display: flex;
justify-content: center;
font-family: 'PBIO', sans-serif; 
color: rgba(44,58,60,255);
/* border: 3px solid yellow; */
margin: 0px;
`

const MainTitle = styled.h1`
font-family: 'PBIO', sans-serif; 
color: rgba(44,58,60,255);
font-size: 72px;

@media (min-width: 320px) {
    font-size: 32px;
}
`

const OptionsContainer = styled.div`
display: flex;
justify-content: center;
/* border: 3px solid green; */
`

const Start = styled.button`
font-family: 'PBIO', sans-serif; 
color: rgba(212,220,218,255);
background-color: rgba(88,101,118,255);
min-width: 100px;
border-radius: 4px;
padding: 10px;
margin: 10px;
/* border: 3px solid blue; */
`

