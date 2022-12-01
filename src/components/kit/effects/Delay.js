import React from 'react'
import styled from 'styled-components'

const Delay = ({ delayTime, delayTimeValue, delayFeedback, delayFeedbackGainState, delayOnOff, setDelayOnOff }) => {

    // TOGGLE SET UP

    // const delayOnOffClick = (ev) => {
    //     if (delayOnOff === "OFF") {
    //         setDelayOnOff("ON")
    //     }

    //     if (delayOnOff === "ON") {
    //         setDelayOnOff("OFF")
    //     }
    // }

    return (

        <Wrapper>
            <Effect>DELAY</Effect>
            {/* <Toggle onClick={delayOnOffClick}>
                {delayOnOff}
            </Toggle> */}
            <DelayRate>RATE {(delayTimeValue * 1000)}ms</DelayRate>
            <DelayTime
                onChange={delayTime}
                type="range"
                value={delayTimeValue}
                min="0"
                max="1"
                step="0.01"
            />
            <Repeats>REPEATS {(Math.floor(delayFeedbackGainState * 100))}%</Repeats>
            <Feedback
                onChange={delayFeedback}
                type="range"
                value={delayFeedbackGainState}
                min="0"
                max="1"
                step="0.001"
            />

        </Wrapper>

    )
}

export default Delay

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Effect = styled.p`
font-family: Roboto;
font-size: 12px;
font-weight: 400;
margin: 5px;
`

// const Toggle = styled.button`
// width: 40px;
// height: 40px;
// margin: 5px;
// `

const DelayRate = styled.p`
font-family: Roboto;
font-size: 8px;
font-weight: 300;
`

const DelayTime = styled.input`
`

const Repeats = styled.p`
font-family: Roboto;
font-size: 8px;
`

const Feedback = styled.input`
`