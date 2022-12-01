import React from 'react'
import styled from 'styled-components'

const MasterVolume = ({ volume, masterVolumeState }) => {

    return (

        <Wrapper>
            <Effect>VOL</Effect>
            <MasterVolumeFader
                onChange={volume}
                type="range"
                value={masterVolumeState}
                min="0"
                max="1"
                step="0.001"
                orient="vertical"
            />

        </Wrapper>

    )
}

export default MasterVolume

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Effect = styled.p`
font-family: Roboto;
font-size: 12px;
`

const MasterVolumeFader = styled.input`
-webkit-appearance: slider-vertical;
max-height: 55px;
width: 25px;
border: solid 3px yellow; 
`