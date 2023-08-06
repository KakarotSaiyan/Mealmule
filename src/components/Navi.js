import React from 'react'
import styled from 'styled-components'
// import Link from 'react-router-dom';
// import {Link} from react-router
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Navbar>
    <Logo src="/images/mm.png"></Logo>

    <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to="/categories"><li>Categories</li> </Link>
        <Link to="/services"><li>Services</li></Link>
        <li>Recipe</li>
        <li><button>Demo</button></li>

    </ul>

    </Navbar>
    </div>
  )
}
const Navbar=styled.div`
height: 8vh;

display: flex;
align-items: center;

justify-content: space-between;
border: 2px solid black;
background-color: black;

padding: 5px;
ul{
    display: flex;
    justify-content: center;
    align-items: center;

    li{
        list-style-type: none;
        font-size: 20px;
        margin: 20px;
        color: aliceblue;
        text-decoration: none;
        

        Link{
            text-decoration: none;
            color: aliceblue;
            font-style: normal;
        }

        button{
            border: 2px solid aliceblue;
            border-radius: 5px;
            background: transparent;
            color: aliceblue;
            padding: 2px 5px;
            transform: scale(1.45);
            transition-property: all;
transition-duration: 0.5s;
transition-timing-function: ease-in-out;

        }
        button:hover{
            transform: scale(1.55);
            background-color: skyblue;
            border: 2px solid aliceblue;
            color: #343436;
        }
        &:hover{
            color: orange;
            cursor: pointer;
        }
        
    }
}


`;

const Logo=styled.img`
height: 50px;
width: 85px;

transition-property: all;
transition-duration: 0.5s;
transition-timing-function: ease-in-out;

&:hover{
    transform: scale(1.25);
}

`;