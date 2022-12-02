import React, { useEffect } from 'react'
import styled from 'styled-components'

const Button = ({ sample, id, url, setDisplay, audioContextState, setCurrentSample, audioRef }) => {

    // const drumSampleAudio = new Audio(`${process.env.REACT_APP_PATH_TO_FILES}${url}`)

    //KEYBOARD EVENT LISTENER

    useEffect(() => {

        const handleKeyDown = (event) => {
            if (event.key === id) {

                if (audioContextState?.state === 'suspended') {
                    audioContextState.resume();
                    if (audioRef.current) {
                        audioRef.current.play()/* .then(() => {
                            audioRef.current.pause()
                        }) */.catch(error => {
                            console.log(error);
                        });
                    }
                }

                if (audioContextState?.state === 'running') {
                    if (audioRef.current) {
                        audioRef.current.play()/* .then(() => {
                            audioRef.current.pause()
                        }) */.catch(error => {
                            console.log(error);
                        });
                    }
                }

                setDisplay(sample)
                setCurrentSample(`${process.env.REACT_APP_PATH_TO_FILES}${url}`)
                console.log('url: ', url);

            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };


    }, [audioContextState, audioRef, id, sample, setCurrentSample, setDisplay, url]);

    return (

        <Wrapper>

            <Label>{sample.toUpperCase()}</Label>

            <Toggle


                onClick={() => {

                    if (audioContextState?.state === 'suspended') {
                        audioContextState.resume();
                        if (audioRef.current) {
                            audioRef.current.play()/* .then(() => {
                                audioRef.current.pause()
                            }) */.catch(error => {
                                console.log(error);
                            });
                        }
                    }

                    if (audioContextState?.state === 'running') {
                        if (audioRef.current) {
                            audioRef.current.play()/* .then(() => {
                                audioRef.current.pause()
                            }) */.catch(error => {
                                console.log(error);
                            });
                        }
                    }

                    setDisplay(sample)
                    setCurrentSample(`${process.env.REACT_APP_PATH_TO_FILES || ''}${url}`)

                }}

            >
                {id.toUpperCase()}
            </Toggle>

        </Wrapper>

    )
}

export default Button

const Wrapper = styled.div`
`
const Label = styled.p`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: helvetica;
font-size: 8px;
background-color: rgba(155,175,195,255);
/* background-color: #c6c4bf; */
margin: 0 4px 0 4px;

`
const Toggle = styled.button`
margin: 4px;
background-color: rgba(81,89,107,255);
/* background-color: #8a8886; */
height: 40px;
width: 90%;
border-radius: 4px;
`