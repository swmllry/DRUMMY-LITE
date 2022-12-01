import React, { useState } from 'react'
import styled from 'styled-components'

const Reverb = () => {

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
            <Effect>Reverb</Effect>
            <Toggle onClick={onOffClick}>
                {onOff}
            </Toggle>

        </Wrapper>

    )
}

export default Reverb

const Wrapper = styled.div`

`

const Effect = styled.p``

const Toggle = styled.button`
width: 40px;
height: 40px;
margin: 5px;
`