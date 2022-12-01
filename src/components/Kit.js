import React from 'react'
import styled from 'styled-components'
import Drummy from './kit/Drummy.js'

const Kit = () => {

    return (

        <Wrapper>
            <KitContainer>
                <Drummy />
            </KitContainer>
        </Wrapper>

    )
}

export default Kit

const Wrapper = styled.div`
`

const KitContainer = styled.div`
height: 89vh;
`
