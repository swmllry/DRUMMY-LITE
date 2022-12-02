import React, { useState, useEffect, useRef/* , useContext  */} from 'react'
import styled from 'styled-components'
import Display from './Display'
import LowShelfFilter from './effects/eq/LowShelfFilter'
import MidPeakFilter from './effects/eq/MidPeakFilter'
import HighShelfFilter from './effects/eq/HighShelfFilter'
// import Compressor from './effects/Compressor'
// import Saturation from './effects/Saturation'
import Delay from './effects/Delay'
// import Reverb from './effects/Reverb'
import MasterVolume from './effects/MasterVolume'
import Button from './Button'
// import SaveUserPatch from './SaveUserPatch'
import { topRowSamples, bottomRowSamples } from './samples/samples'
// import { CurrentUserContext } from '../CurrentUserProvider'

const Drummy = () => {

    // const { currentUser } = useContext(CurrentUserContext)

    const [display, setDisplay] = useState('')
    const [currentSample, setCurrentSample] = useState()

    //AUDIO CONTEXT

    const [audioContextState, setAudioContextState] = useState()
    // const [isPlaying, setIsPlaying] = useState(false)

    const [lowShelfFilterState, setLowShelfFilterState] = useState()
    const [lowShelfFilterGainState, setLowShelfFilterGainState] = useState(0)

    const [midPeakFilterState, setMidPeakFilterState] = useState();
    const [midPeakFilterGainState, setMidPeakFilterGainState] = useState(0);

    const [highShelfFilterState, setHighShelfFilterState] = useState();
    const [highShelfFilterGainState, setHighShelfFilterGainState] = useState(0);

    const [delayOnOff, setDelayOnOff] = useState("OFF")

    const [delayTimeState, setDelayTimeState] = useState()
    const [delayTimeValue, setDelayTimeValue] = useState(0)

    const [delayFeedbackState, setDelayFeedbackState] = useState(0)
    const [delayFeedbackGainState, setDelayFeedbackGainState] = useState(0)

    const [masterVolumeState, setMasterVolumeState] = useState()
    const [masterVolumeValue, setMasterVolumeValue] = useState(0)


    const audioRef = useRef()

    const drumSample = useRef()

    useEffect(() => {

        if (audioRef.current && !drumSample.current) {

            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const audioContext = new AudioContext();
            setAudioContextState(audioContext)

            const output = audioContext.destination

            drumSample.current = audioContext.createMediaElementSource(audioRef.current)

            //EQ
            const lowShelfFilter = audioContext.createBiquadFilter()
            lowShelfFilter.type = 'lowshelf'
            lowShelfFilter.frequency.value = 250;
            setLowShelfFilterState(lowShelfFilter)

            const midPeakFilter = audioContext.createBiquadFilter()
            midPeakFilter.type = 'peaking'
            midPeakFilter.frequency.value = 1000;
            midPeakFilter.Q.value = 0.7;
            setMidPeakFilterState(midPeakFilter)

            const highShelfFilter = audioContext.createBiquadFilter()
            highShelfFilter.type = 'highshelf'
            highShelfFilter.frequency.value = 3000;
            setHighShelfFilterState(highShelfFilter)

            //COMPRESSOR
            // const compressor = audioContext.createDynamicsCompressor()
            // compressor.attack.value = 0.003;
            // compressor.release.value = 0.25;
            // compressor.ratio.value = 12;
            // compressor.threshold.value = -24;
            // compressor.knee.value = 40;

            //DELAY
            const delay = audioContext.createDelay();
            delay.delayTime.value = 0.0;
            setDelayTimeState(delay)
            const feedback = audioContext.createGain();
            feedback.gain.value = 0.3;
            setDelayFeedbackState(feedback)


            //MASTER VOLUME
            const masterVolume = audioContext.createGain();
            masterVolume.gain.value = 1;
            setMasterVolumeState(masterVolume)

            // const analyserNode = audioContext.createAnalyser();
            // analyserNode.fftSize = 2048;
            // analyserNode.maxDecibels = -25;
            // analyserNode.minDecibels = -60;
            // analyserNode.smoothingTimeConstant = 0.5;

            drumSample.current.connect(lowShelfFilter)
            lowShelfFilter.connect(midPeakFilter)
            midPeakFilter.connect(highShelfFilter)
            highShelfFilter.connect(delay)
            highShelfFilter.connect(masterVolume)

            delay.connect(feedback);
            feedback.connect(delay);
            delay.connect(masterVolume);

            masterVolume.connect(output)
            // delay.connect(masterVolume);

        }

        return () => {

            if (drumSample.current) {
                // drumSample.current.disconnect()
            }
        }

    }, [audioRef, drumSample])

    //REACT

    const topRowButtons = topRowSamples.map(sample => {
        return <Button
            key={sample.id}
            id={sample.id}
            keyCode={sample.keyCode}
            sample={sample.sample}
            url={sample.url}
            setDisplay={setDisplay}
            setCurrentSample={setCurrentSample}
            audioContextState={audioContextState}
            audioRef={audioRef}
        />
    })

    const bottomRowButtons = bottomRowSamples.map(sample => {

        return <Button
            key={sample.id}
            id={sample.id}
            keyCode={sample.keyCode}
            sample={sample.sample}
            url={sample.url}
            setDisplay={setDisplay}
            setCurrentSample={setCurrentSample}
            audioContextState={audioContextState}
            audioRef={audioRef}
        />
    })

    const lowShelfFilterGain = (ev) => {
        const { value } = ev.target
        setLowShelfFilterGainState(lowShelfFilterState.gain.value = value)
    }

    const midPeakFilterGain = (ev) => {
        const { value } = ev.target
        setMidPeakFilterGainState(midPeakFilterState.gain.value = value)
    }

    const highShelfFilterGain = (ev) => {
        const { value } = ev.target
        setHighShelfFilterGainState(highShelfFilterState.gain.value = value)
    }

    const delayTime = (ev) => {
        const { value } = ev.target
        setDelayTimeValue(delayTimeState.delayTime.value = value)
    }

    const delayFeedback = (ev) => {
        const { value } = ev.target
        setDelayFeedbackGainState(delayFeedbackState.gain.value = value)
    }

    const volume = (ev) => {
        const { value } = ev.target
        setMasterVolumeValue(masterVolumeState.gain.value = value)
    }
    const audio = <audio id={"audiotest"} src={"src/components/kit/samples/505samples/TR-505Clap.wav"} autoPlay />

    const testPlaybackState = (ev) => {
        audio.play()
    }

    return (

        <Wrapper>

            <DrummyContainer>

                <TopRow>

                    <DisplayContainer>
                        <Display display={display} />
                    </DisplayContainer>
                    <VisualizerContainer>
                        <TestButton onClick={testPlaybackState}/>
                    </VisualizerContainer>

                </TopRow>

                <MiddleRow>

                    <Bax>
                        <LowShelfFilter
                            lowShelfFilterGain={lowShelfFilterGain}
                            lowShelfFilterGainState={lowShelfFilterGainState}
                        />

                        <MidPeakFilter
                            midPeakFilterGain={midPeakFilterGain}
                            midPeakFilterGainState={midPeakFilterGainState}
                        />

                        <HighShelfFilter
                            highShelfFilterGain={highShelfFilterGain}
                            highShelfFilterGainState={highShelfFilterGainState}
                        />
                    </Bax>

                    {/* <Dynamics>
                        <Compressor

                        />

                    </Dynamics> */}

                    {/* <Drive>
                        <Saturation

                        />
                    </Drive> */}

                    <DelayContainer>
                        <Delay
                            delayTime={delayTime}
                            delayTimeValue={delayTimeValue}
                            delayFeedback={delayFeedback}
                            delayFeedbackGainState={delayFeedbackGainState}
                            delayOnOff={delayOnOff}
                            setDelayOnOff={setDelayOnOff}
                        />
                    </DelayContainer>

                    {/* <ReverbContainer>
                        <Reverb

                        />
                    </ReverbContainer> */}

                    <Volume>
                        <MasterVolume
                            volume={volume}
                            masterVolumeValue={masterVolumeValue}
                        />
                    </Volume>

                    {/* <SaveUserPatch
                        currentUser={currentUser}
                        lowShelfFilterGainState={lowShelfFilterGainState}
                        midPeakFilterGainState={midPeakFilterGainState}
                        highShelfFilterGainState={highShelfFilterGainState}
                        delayTimeValue={delayTimeValue}
                        delayFeedbackGainState={delayFeedbackGainState}
                    /> */}

                    <audio id={"audio"} ref={audioRef} /* onEnded={() => setIsPlaying(true)} */ src={currentSample} autoPlay />

                </MiddleRow>

                <BottomRow>
                    <StartAndStop>

                        <TempLogo>
                            <DR>DRUMMY</DR>
                            <Model>TR-505</Model>
                        </TempLogo>

                        {/* <Start>

                        </Start>
                        <Stop>

                        </Stop> */}
                    </StartAndStop>
                    <Buttons>
                        {bottomRowButtons}
                        {topRowButtons}
                    </Buttons>
                </BottomRow>

            </DrummyContainer>
        </Wrapper >

    )
}

export default Drummy

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100%;
min-width: 306px;
background-color: black;

@media (min-width: 320px) {
min-width: 320px;
min-height: 100%;
}
/* border: solid 3px green; */
`

const DrummyContainer = styled.div`
min-height: 100%;
max-width: 1015px;
min-width: 306px;
padding: 6px;

background-color: rgba(219,218,199,255);
border-top: solid 8px rgba(230,225,210,255);
border-right: solid 8px rgba(175,175,165,225);
border-bottom: solid 8px rgba(168,168,155,255);
border-left: solid 8px rgba(215,215,200,200);
box-shadow:inset 0px 0px 2px 1px rgba(0,0,0,0.55);

box-shadow: 0px 0px 64px 9px rgba(206,202,190,255);

/* border: solid 3px grey; */
border-radius: 4px;
@media (min-width: 320px) {
height: 100%;
}


`

const TopRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 319px) {
    min-height: 50%;
    justify-content: center;
    align-items: center;
}
/* border: solid 2px green; */
`

const DisplayContainer = styled.div`
width: 80%;
height: 80%;
border-top: solid 5px rgba(230,225,220,255);
border-right: solid 5px rgba(175,175,165,200);
border-bottom: solid 5px rgba(168,168,155,255);
border-left: solid 5px rgba(215,215,200,150);

@media (min-width: 1015px) {
    width: 40%;
}
`

const VisualizerContainer = styled.div`
width: 60%;
height: 70%;
margin-right: 7px;
margin-left: 7px;
border: solid 3px grey;
`

const TestButton = styled.button`
margin: 4px;
background-color: rgba(81,89,107,255);
/* background-color: #8a8886; */
height: 40px;
width: 90%;
border-radius: 4px;
`

const MiddleRow = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
/* height: 20%; */
border-top: solid 2px grey;
border-bottom: solid 2px grey;
border-radius: 2px;
margin-top: 3px;
margin-bottom: 3px;
@media (min-width: 321px) {
    flex-wrap: wrap;
}
`

const Bax = styled.div`
display: flex;
/* border: solid 3px blue; */
`

// const Dynamics = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// min-height: 20px;
// border: solid 3px orange;
// `

// const Drive = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
/* border: solid 3px purple; */
// `

// const TimeEffects = styled.div`
// border: solid 3px pink;
// `

const DelayContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: solid 3px green; */
`

// const ReverbContainer = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// border: solid 3px red;
// `

const Volume = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* border: solid 3px black; */
`

const BottomRow = styled.div`
display: flex;
height: 35%;
flex-direction: column;
/* border-top: solid 4px rgba(168,168,165,255);
border-right: solid 4px rgba(215,210,190,255);
border-bottom: solid 4px rgba(230,225,220,255);
border-left: solid 4px rgba(175,175,165,150); */
margin-top: 2px;
@media (min-width: 321px) {
    flex-direction: column;
}

@media (min-width: 820px) {
    flex-direction: column;
}

@media (min-width: 1015px) {
    flex-direction: row;
}
`
const StartAndStop = styled.div`

@media (min-width: 1015px) {
    display: flex;
    padding: 5px;

}
/* border: solid 3px green;  */
`
const TempLogo = styled.div`
display: flex;
justify-content: space-between;
padding: 2%;

@media (min-width: 1015px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

const DR = styled.h1`
font-family: 'PBIO', sans-serif;
color: rgba(45,71,81,255);
font-size: 24px;
`

const Model = styled.h1`
font-family: 'PBIO', sans-serif;
color: rgba(54,71,81,255);
font-size: 20px;
`

// const Start = styled.div`
// `

// const Stop = styled.div`
// `

const Buttons = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr;
width: 100%;
margin-top: 5px;

@media (min-width: 321px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}

@media (min-width: 1015px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
/* border: solid 3px orange; */
`
