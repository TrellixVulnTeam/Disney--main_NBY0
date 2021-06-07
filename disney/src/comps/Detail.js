import React from 'react'
import styled from 'styled-components'

const Detail = (prpops) => {
  return (
    <Wrapper>
      <Background>
      <img alt=''
      src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09A0617D43282F1A4FA1A97DF6159B4263A8DEB9679A007B61D5E5D6E5D0A2DD/scale?width=1440&aspectRatio=1.78&format=jpeg"/>


      </Background>
    </Wrapper>
  )
}

export default Detail

const Wrapper = styled.div`
position:relative;
min-height: calc(100vh-250px);
overflow-x:hidden;
display:block;
top:72px;
padding: 0 calc(3.5vw + 5px);

`

const Background = styled.div`
left:0px;
opacity: 0.8;
position:fixed;
right:10px;
top:0px;
z-index:-1;

  img{
    width:100vw;
    height:100vh;
  }

  @media (max-width:768px) {
    width:initial;
  }


`
