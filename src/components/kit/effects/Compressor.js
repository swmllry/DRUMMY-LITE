import React/* , { useState } */ from 'react'
import styled from 'styled-components'

const Compressor = () => {

    // const [onOff, setOnOff] = useState("OFF")

    // const onOffClick = (ev) => {
    //     if (onOff === "OFF") {
    //         setOnOff("ON")
    //     }

    //     if (onOff === "ON") {
    //         setOnOff("OFF")
    //     }
    // }


return (

    <Wrapper>
        <Effect>Compressor</Effect>
        {/* <Toggle onClick={onOffClick}>
            {onOff}
        </Toggle> */}

    </Wrapper>

)
}

export default Compressor

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Effect = styled.p``

// const Toggle = styled.button`
// width: 40px;
// height: 40px;
// margin: 5px;
// `