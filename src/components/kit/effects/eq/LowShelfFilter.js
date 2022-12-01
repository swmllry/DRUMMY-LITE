import React from 'react'
import styled from 'styled-components'

const Filter = ({ lowShelfFilterGain, lowShelfFilterGainState }) => {

    return (

        <Wrapper>

            <Low>LOW</Low>

            <LowShelf
                onChange={lowShelfFilterGain}
                type="range"
                value={lowShelfFilterGainState}
                min="-20"
                max="20"
                orient="vertical"
            >
            </LowShelf>

        </Wrapper>

    )
}

export default Filter

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5px;
`
const Low = styled.p`
font-family: Roboto;
font-size: 8px;
`

const LowShelf = styled.input`
-webkit-appearance: slider-vertical;
max-height: 65px;
width: 25px;

`
