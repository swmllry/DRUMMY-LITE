import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from "styled-components";

const Header = () => {

    const { pathname } = useLocation();
    console.log('currentPage: ', pathname);

    const loggedIn = JSON.parse(localStorage.getItem("currentUser"));

    const handleClick = () => {
        localStorage.clear();
    }

    return (
        <Wrapper>
            {(pathname === '/kit') && <Logo>DRUMMY</Logo>}
            
            <Link to='/'
                onClick={handleClick}
                style={{
                    textDecoration: "none",
                    marginRight: "15px"
                }}
            >
                <Logout>
                    {loggedIn ? "Log Out" : ""}
                </Logout>
            </Link>
        </Wrapper>

    )
}

export default Header

const Wrapper = styled.div`
min-width: 306px;
display: flex;
justify-content: space-between;
align-items: center;
/* min-width: 100%; */
height: 100%;
padding: 10px;
background-color: black;
/* border: 3px solid orange; */
`

const Logo = styled.p`
/* font-family: Roboto; */
font-size: 22px;
font-family: 'PBIO', sans-serif;                                                
font-weight: bold;
color: rgba(219,218,199,255);
padding-left: 1%;
/* display: none; */
`

const Logout = styled.p`
font-family: 'PBIO', sans-serif; 
color: rgba(219,218,199,255);
`
