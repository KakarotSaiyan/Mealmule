import styled from "styled-components";

import React from 'react'

export default function Home() {
    return (
        <Container>


            <Subcontainer>
                <div>
                    <HomeText>
                        The <span>Easiest</span> Way <br></br> to Make Your<br></br> Favourite <span>Meal</span>

                    </HomeText>
                    <SubHomeText>
                        Want to learn how to cook but confused where to start? <br></br>
                        No need to worry again.
                    </SubHomeText>

                    <button>Join For Free</button>
                </div>
            </Subcontainer>

            <Bottom>
                <div>
                    <span>3M+</span> <br></br> <br></br>3,000,000 Users
                </div>
                <div>
                    <span>600K+</span> <br></br> <br></br>200,000+ reviews
                </div>
                <div>
                    <span> 5+ Awards</span> <br></br> <br></br> From all over the world
                </div>
                <div>
                    <span> 600K+ </span><br></br> <br></br> 200,000+ reviews
                </div>

            </Bottom>
        </Container>
    )
}
const Bottom = styled.div`

display: flex;
justify-content: space-evenly;
align-items:center;
background-color: #343436;
height: 15vh;
div{
    font-size: 25px;
    color: aliceblue;
    font-weight: bolder;
    span{
color: orange;
    }
}

`;




const Container = styled.div`
display: flex;
flex-direction: column;
/* height: 100vh; */
justify-content: flex-start;


`;

const Subcontainer = styled.div`
/* border: 2px solid red; */
height: 85vh;
/* margin-top: 10px; */
background: url("/images/subcont.jpg");
background-position: center;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    
/* border: 2px solid white; */
width: 80vw;
height: 55vh;
position: absolute;
top: 25vh;
left: 10vw;



button{
    height: 45px;
    width:200px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid aliceblue;
    background-color: #dec99b;
}

button:hover{
transform: scale(1.025);
color: aliceblue;
cursor: pointer;
transition-property: all;
transition-duration: 0.25s;
transition-timing-function: ease-in-out;

}
}

`;



const HomeText = styled.p`
/* border: 2px solid red; */
font-size: 28px;
color: aliceblue;
/* width: ; */
transform: scale(1.55);
margin-left: 3.5vw;
span{
    color: orange;


}


`;

const SubHomeText = styled.span`
color: aliceblue;
`;