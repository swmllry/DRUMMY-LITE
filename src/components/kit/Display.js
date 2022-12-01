import React from 'react'
import styled from 'styled-components'

const Display = ({ display }) => {

    return (

        <Wrapper>
            <Screen>
                <SampleText>
                    {display}
                </SampleText>
            </Screen>
        </Wrapper>

    )
}

export default Display

const Wrapper = styled.div`
/* height: 90%; */
`

const Screen = styled.div`
/* border: 22px solid #5a5e61; */
border: 20px solid rgba(54,71,81,255);
box-shadow:inset 3px 3px 3px 0px rgba(66,82,77,255);
background-color: rgba(110,122,119,255)/* #748c8c */;
margin: 5px;
height: 100px;
max-width: 100%;

`

const SampleText = styled.p`
font-family: lcd;
font-weight: 300;
font-size: 25px;
margin-left: 12.5px;
margin-top: 12.5px;
`