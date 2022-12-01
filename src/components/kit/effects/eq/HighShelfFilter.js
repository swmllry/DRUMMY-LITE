import React from 'react'
import styled from 'styled-components'

const HighShelfFilter = ({ highShelfFilterGain, highShelfFilterGainState }) => {

    return (

        <Wrapper>

            <Hi>HI</Hi>

            <HighShelf
                onChange={highShelfFilterGain}
                type="range"
                value={highShelfFilterGainState}
                min="-20"
                max="20"
                orient="vertical"
            >
            </HighShelf>

        </Wrapper>

    )
}

export default HighShelfFilter

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5px;
`
const Hi = styled.p`
font-family: Roboto;
font-size: 8px;
`

const HighShelf = styled.input`
-webkit-appearance: slider-vertical;
max-height: 65px;
width: 25px;
`