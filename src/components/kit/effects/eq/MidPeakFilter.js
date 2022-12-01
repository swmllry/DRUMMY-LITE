import React from 'react'
import styled from 'styled-components'

const MidPeakFilter = ({ midPeakFilterGain, midPeakFilterGainState }) => {

    return (

        <Wrapper>

            <Mid>MID</Mid>
            <MidPeak
                onChange={midPeakFilterGain}
                type="range"
                value={midPeakFilterGainState}
                min="-20"
                max="20"
                orient="vertical"
            >
            </MidPeak>

        </Wrapper>

    )
}

export default MidPeakFilter

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5px;
`
const Mid = styled.p`
font-family: Roboto;
font-size: 8px;
`

const MidPeak = styled.input`
-webkit-appearance: slider-vertical;
max-height: 65px;
width: 25px;
`