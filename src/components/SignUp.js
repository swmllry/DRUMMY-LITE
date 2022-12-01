import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import { passwordVerification } from './PassVerification';

const SignUp = () => {

    const [givenName, setGivenName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userExists, setUserExists] = useState(false)


    const history = useHistory()

    const submitFormData = (ev) => {

        if (givenName.length > 0 &&
            surname.length > 0 &&
            email.length > 0) {

            passwordVerification(ev)

            ev.preventDefault()

            const addUserRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    givenName: givenName,
                    surname: surname,
                    email: email,
                    password: password
                })
            };

            fetch("/api/addUser", addUserRequestOptions).then((res) => {
                return res.json()
            }).then(data => {
                if (data.error === "invalid-email") {
                    setUserExists(true)
                }

                if (data.status === 200) {
                    history.push(`/login`)
                }

                console.log(data)
            });

        }
    }

    return (

        <Wrapper>

            <NewUserInformation>
                <SignUpTitle>Sign Up</SignUpTitle>
                <GivenName
                    id="givenName"
                    type="text"
                    placeholder="First Name"
                    onChange={(ev) => setGivenName(ev.target.value)}
                    required
                />
                <Surname
                    id="surname"
                    type="text"
                    placeholder="Last Name"
                    onChange={(ev) => setSurname(ev.target.value)}
                    required
                />
                <Email
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={(ev) => setEmail(ev.target.value)}
                    required
                />
                <Password
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={(ev) => setPassword(ev.target.value)}
                    required
                />
                <ConfirmPassword
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    required
                />

                {userExists && <UserExists>Email already exists!</UserExists>}

                <Join
                    type="submit"
                    onClick={submitFormData}>
                    Join
                </Join>
            </NewUserInformation>
        </Wrapper>

    )

}

export default SignUp

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 88.5vh;
background-color: black;
/* border: 3px solid red; */
`
const NewUserInformation = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 200px;
padding: 18px;
border-radius: 8px;
background-color: rgba(210,210,190,255);
border-top: solid 5px rgba(230,225,210,255);
border-right: solid 5px rgba(175,175,165,255);
border-bottom: solid 5px rgba(168,168,155,255);
border-left: solid 5px rgba(215,215,200,255);
box-shadow: 0px 0px 32px 10px rgba(206,202,190,255);
/* border: 3px solid orange; */
`

const SignUpTitle = styled.h1`
font-family: 'PBIO', sans-serif; 
font-size: 24px;
margin:15px;
color: rgba(44,58,60,255);
`

const GivenName = styled.input`
margin: 7px;
text-align: center;
border-radius: 4px;
/* border: 3px solid green; */
`

const Surname = styled.input`
margin: 7px;
text-align: center;
border-radius: 4px;
/* border: 3px solid blue; */
`

const Email = styled.input`
margin: 7px;
text-align: center;
border-radius: 4px;
/* border: 3px solid violet; */
`

const Password = styled.input`
margin: 7px;
text-align: center;
border-radius: 4px;
/* border: 3px solid purple; */
`

const ConfirmPassword = styled.input`
margin: 7px;
text-align: center;
border-radius: 4px;
/* border: 3px solid maroon; */
`

const UserExists = styled.p`
font-family: 'PBIO', sans-serif; 
font-size: 15px;
color: red;
text-align: center;
/* color: rgba(44,58,60,255); */
`


const Join = styled.button`
margin: 5px;
width: 150px;
text-align: center;
padding: 5px;
min-width: 100px;
border-radius: 4px;
text-align: center;
font-family: 'PBIO', sans-serif; 
color: rgba(212,220,218,255);
background-color: rgba(88,101,118,255);
/* border: 3px solid yellow; */
`