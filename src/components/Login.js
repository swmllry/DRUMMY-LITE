import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

const Login = () => {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const history = useHistory()

    const submitCustomerData = async (ev) => {

        ev.preventDefault();

        const loginRequestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                loginEmail: loginEmail,
                loginPassword: loginPassword
            })
        };

        fetch("/api/login", loginRequestOptions).then((res) => {
            return res.json()
        }).then(data => {
            if (data.data?.validatedPassword === true) {
                localStorage.clear();
                localStorage.setItem('currentUser', JSON.stringify(loginEmail));
                history.push(`/kit`)
            } else {
                window.alert(`Invalid login`)
            }
        });



    }

    return (

        <Wrapper>
            <LoginInformation>
            <LoginTitle>Login</LoginTitle>
                <Email
                    type="text"
                    placeholder="E-mail"
                    onChange={(ev) => setLoginEmail(ev.target.value)}
                />
                <Password
                    type="password"
                    placeholder="Password"
                    onChange={(ev) => setLoginPassword(ev.target.value)}
                />
                <LoginButton
                    type="submit"
                    onClick={submitCustomerData}>
                    Lets go!
                </LoginButton>
            </LoginInformation>
        </Wrapper>

    )
}

export default Login

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 88.5vh;
background-color: black;
/* border: 3px solid red; */
`

const LoginInformation = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5px;
width: 250px;
height: 150px;
padding: 30px;
border-radius: 8px;
background-color: rgba(210,210,190,255);
border-top: solid 5px rgba(230,225,210,255);
border-right: solid 5px rgba(175,175,165,255);
border-bottom: solid 5px rgba(168,168,155,255);
border-left: solid 5px rgba(215,215,200,255);
box-shadow: 0px 0px 32px 10px rgba(206,202,190,255);
/* border: 3px solid orange; */

@media (max-width: 320px) {
    min-width: 30%;
    box-shadow: 0px 0px 64px 1px rgba(206,202,190,255);  
    /* border: solid 5px red; */
}
`

const LoginTitle = styled.h1`
font-family: 'PBIO', sans-serif; 
font-size: 24px;
color: rgba(44,58,60,255);
`

const Email = styled.input`
margin: 5px;
width: 250px;
text-align: center;
border-radius: 4px;
/* border: 3px solid green; */
`

const Password = styled.input`
margin: 5px;
width: 250px;
text-align: center;
border-radius: 4px;
/* border: 3px solid blue; */
`

const LoginButton = styled.button`
padding: 5px;
margin: 5px;
min-width: 100px;
border-radius: 4px;
text-align: center;
font-family: 'PBIO', sans-serif; 
color: rgba(212,220,218,255);
background-color: rgba(88,101,118,255);

`