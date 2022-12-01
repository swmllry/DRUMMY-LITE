import React, { useState } from 'react'
import styled from 'styled-components'

const Saturation = () => {

    const [onOff, setOnOff] = useState("OFF")

    const onOffClick = (ev) => {
        if (onOff === "OFF") {
            setOnOff("ON")
        }

        if (onOff === "ON") {
            setOnOff("OFF")
        }
    }

    return (

        <Wrapper>
            <Effect>SATURATION</Effect>
            <Toggle onClick={onOffClick}>
                {onOff}
            </Toggle>

        </Wrapper>

    )
}

export default Saturation

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Effect = styled.p`
font-family: Roboto;
font-size: 10px;
`

const Toggle = styled.button`
width: 50px;
height: 40px;
margin: 5px;
background-color: #8a8886;
/* background-color: rgba(204,212,215,255); */
border-radius: 4px;
`