// import libraries
import React from 'react'
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components'

// create a component
const Slide1 = () => (
  <Slide>
    <Spring
      from={{ opacity: 0, marginTop: -80 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 1000, duration: 1200 }}
    >
      {props => (
        <div style={props}>
          <ImageBlock>
            <Image
              sizes="100vh"
              srcSet="
      https://res.cloudinary.com/billpliske/image/upload/f_auto,q_70,w_512/v1555871516/pghblc.org/london-bridge.jpg  512w,
      https://res.cloudinary.com/billpliske/image/upload/f_auto,q_70,w_1024/v1555871516/pghblc.org/london-bridge.jpg    640w"
              src="
      https://res.cloudinary.com/billpliske/image/upload/v1555871516/pghblc.org/london-bridge.jpg"
              alt="London Tower Bridge"
            />
          </ImageBlock>
        </div>
      )}
    </Spring>

    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1800, duration: 2000 }}
    >
      {props => (
        <div style={props}>
          <TextBlock>
            <Headline>
              In 1994, the City of 
              {' '}
              <Bold>London</Bold>
              {' '}
did xxxxxxx involving
              their iconic bridge.
            </Headline>
          </TextBlock>
        </div>
      )}
    </Spring>
  </Slide>
)

// define your styles
const ImageBlock = styled.div`
  position: relative;
`

const Image = styled.img`
  left: 50%;
  max-height: 50%;
  min-width: 100%;
  object-fit: cover;
  position: fixed;
  transform: translate(-50%, 0);

  @media (min-width: 400px) {
    font-size: 32px;
  }

  @media (min-width: 500px) {
    font-size: 32px;
  }

  @media (min-width: 600px) {
    font-size: 32px;
  }
`

const Slide = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
`

const TextBlock = styled.div`
  position: relative;
`

const Headline = styled.h1`
  color: white;
  flex: 1;
  font-family: 'Exo', sans-serif;
  font-size: 22px;
  font-weight: 900;
  left: 50%;
  margin-right: -50%;
  margin: 0;
  min-width: 300px;
  padding: 25px;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (min-width: 375px) {
    font-size: 23px;
  }

  @media (min-width: 420px) {
    font-size: 25px;
  }

  @media (min-width: 500px) {
    font-size: 27px;
  }
`

const Bold = styled.span`
  color: gold;
`

export default Slide1
