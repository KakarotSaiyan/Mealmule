import React from 'react'
import styled from 'styled-components'
export default function Services() {
  return (
    <Container>
        <Title>
            <h1>
            The <Color>Services</Color> You Get From<br></br> <Color>MealMule</Color>
            </h1>

            <Sub>
            We at MealMule offers the best Services available out there<br></br>
            Come  ans see it for yourself, you will not be disappointed
            </Sub>
        </Title>

        <Subscription>

            <Basic>
                <span>Basic</span>
                <h1>Free</h1>
                <ul>
                    <li>Beginner Tutorials</li>
                    <li>Weekly Update</li>
                    <li>All Videos</li>
                    <li>Advance Tutorials</li>
                    <li>Live Session</li>
                    <li>More than 1000+ Recipes</li>

                </ul>

            </Basic>

            <MostPopular>

            </MostPopular>

            <Pro>
            <span>Pro</span>
                <h1>29.9$/M</h1>
                <ul>
                    <li>Beginner Tutorials</li>
                    <li>Weekly Update</li>
                    <li>All Videos</li>
                    <li>Advance Tutorials</li>
                    <li>Live Session</li>
                    <li>More than 1000+ Recipes</li>

                </ul>
            </Pro>


        </Subscription>


    </Container>
  )
}


const Container=styled.div`
/* margin-top: 1vh; */
display: flex;
flex-direction: column;
background: url("images/sbg.jpg");
align-items: center;
/* opacity: 0.1; */
background-repeat: no-repeat;
background-size: 1680px;
/* border: 2px solid black; */
height: 100vh;
padding: 15px;

`;

const Title=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:28.5vh;
backdrop-filter: blur(8px);
border: 2px solid black;
box-shadow: 0.5px 0.5px 10px black;

width: 51vw;

border-radius: 20px;

h1{
    text-align: center;
    
}

transform: scale(0.9);

`;

const Sub=styled.span`
 text-align: center;
    font-size: 15.9px;
    /* font-weight: 500; */
    color: aliceblue;
`;

const Subscription=styled.div`
/* border: 2px solid red; */
height: 80vh;
display: flex;
align-items: flex-end;
justify-content: space-evenly;
width: 95vw;
padding: 0px 15px;




`;

const Basic=styled.div`
border: 2px solid aliceblue;
border-radius: 15px;
height: 350px;
width:280px;
/* transform: scale(2 */
background-color: beige;
display: flex;
flex-direction: column;
align-items: center;
span{
    font-size: 20px;
}
ul{
    display: flex;
    flex-direction: column;
    li{
        padding: 5px 5px;
        font-size: 18px;
        font-weight: 500;
    }

}
&:hover{
    cursor: pointer;
    box-shadow: 0.25px 0.25px 11px beige;
}
    

`;

const MostPopular=styled.div`
border: 2px solid aliceblue;
border-radius: 15px;
height: 450px;
width:315px;
/* transform: scale(2 */
transition-property: all;
transition-duration: 0.45s;
transition-timing-function: ease-in-out;
background-color: aliceblue;
&:hover{
    cursor: pointer;
    box-shadow: 0.25px 0.25px 11px aliceblue;
}

`;

const Pro=styled.div`
border: 2px solid aliceblue;
border-radius: 15px;
height: 350px;
width:280px;
/* transform: scale(2 */
background-color: beige;
display: flex;
flex-direction: column;
align-items: center;
span{
    font-size: 20px;
}
ul{
    display: flex;
    flex-direction: column;
    li{
        padding: 5px 5px;
        font-size: 18px;
        font-weight: 500;
    }

}
&:hover{
    cursor: pointer;
    box-shadow: 0.25px 0.25px 11px beige;
}


`;

const Color=styled.span`
color: orange;

`;