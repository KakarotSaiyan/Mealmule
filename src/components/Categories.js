import styled from "styled-components";
import React from 'react'

export default function Categories() {
  return (
    <Container>
        
            <Foryou>

              <h1>
               Catered specially for you
              </h1>

              <span>Come have a look at our exotic food choices <br></br> below </span>


            </Foryou>

            

      
        <Dishes>

          <div>
            <Card>
              <img src="images/dish2.jpg"></img>

              <h1>Veg</h1>
              <span>By Chef Ranjit Sharma</span>

            </Card>
        <Card>
              <img src="images/dish6.jpg" ></img>

              <h1>Sausage</h1>
              <span>By Chef Ranjit Sharma</span>

            </Card>

            

            <Card>
              <img src="images/dish3.jpg" ></img>

              <h1>Salad</h1>
              <span>By Chef Ranjit Sharma</span>

            </Card>

          </div>

          <div>

          <Card>
              <img src="images/dish4.jpg"></img>

              <h1>Gravy</h1>
              <span>By Chef Ranjit Sharma</span>

            </Card>

            <Card>
              <img src="images/dish5.jpg"></img>

              <h1>Curry</h1>
              <span>By Chef Ranjit Sharma</span>

            </Card>

            <Card>
              <img src="images/dish1.jpg"></img>

              <h1>Non-veg</h1>
              <span>By Chef Ranjit Sharma</span>

            </Card>

            

          </div>



        </Dishes>
    </Container>
  )
}

const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;


`;

const Dishes=styled.div`
/* border: 2px solid black; */
height:105vh;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 15px 50px;

div{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`;

const Header=styled.div`

`;

const Foryou=styled.p`
  text-align: center;
  /* border: 2px solid black; */
span{
  
  font-size: 20px;
  font-weight: 500;
  color: orange;

}
`;


const Card=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
/* border: 2px solid black; */

img{
  /* border: 2px solid black; */
  border-radius: 25px;
  height: 240px;
  width: 240px;
  box-shadow: 0.5px 0.5px 15px black;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  
}

img:hover{
  
    box-shadow: 0.5px 0.5px 15px orange;
  cursor: pointer;
}

h1{
  text-align: left;

}

span{
  text-align: left;
  font-weight: 500;
}




`;