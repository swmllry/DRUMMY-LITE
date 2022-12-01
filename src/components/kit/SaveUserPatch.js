import React from 'react'
import styled from 'styled-components'

const SaveUserPatch = (

    {
        currentUser,
        lowShelfFilterGainState,
        midPeakFilterGainState,
        highShelfFilterGainState,
        delayTimeValue,
        delayFeedbackGainState
    }

) => {

    const handleClick = () => {

        const savePatchRequestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                currentUser: currentUser,
                lowShelfFilterGainState: lowShelfFilterGainState,
                midPeakFilterGainState: midPeakFilterGainState,
                highShelfFilterGainState: highShelfFilterGainState,
                delayTimeValue: delayTimeValue,
                delayFeedback: delayFeedbackGainState,
            })
        };

        fetch("/api/savePatch", savePatchRequestOptions).then((res) => {
            return res.json()
        }).then(data => {
            console.log(data)
        });

    }

    return (

        <>
            {/* <PatchName 
            type="text" 
            /> */}
            <Save
                onClick={handleClick}
            >
                SAVE
            </Save>
        </>
    )
}

export default SaveUserPatch

const Save = styled.button`
width: 50px;
height: 30px;
margin-bottom: 3px;
background-color: #8a8886;
/* background-color: rgba(204,212,215,255); */
border-radius: 4px;
`

// const PatchName = styled.input`
// `