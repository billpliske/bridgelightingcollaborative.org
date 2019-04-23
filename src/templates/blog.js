import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
import styled from 'styled-components'
// import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import PostList from '../components/PostList'
// import Pagination from '../components/Pagination'

class IndexPage extends Component {
  render() {
    // const { data, pageContext } = this.props
    // const { edges: posts } = data.allWordpressPost

    return (
      <Layout>
        <Background>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1100, duration: 1000 }}
          >
            {props => (
              <div style={props}>
                <Slide>
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
                  <TextBlock>
                    <Headline>
                      In 1994, the City of 
                      {' '}
                      <Bold>London</Bold>
                      {' '}
did xxxxxxx
                      involving their iconic bridge.
                    </Headline>
                  </TextBlock>
                </Slide>
              </div>
            )}
          </Spring>

          {/* <Slide>
            <TextBlock>
              <Headline>Coming soon, London.</Headline>
            </TextBlock>
            <ImageBlock
              sizes="100vh"
              srcSet="
              https://res.cloudinary.com/billpliske/image/upload/f_auto,q_70,w_512/v1555871516/pghblc.org/london-bridge.jpg  512w,
              https://res.cloudinary.com/billpliske/image/upload/f_auto,q_70,w_1024/v1555871516/pghblc.org/london-bridge.jpg    640w"
              src="
              https://res.cloudinary.com/billpliske/image/upload/v1555871516/pghblc.org/london-bridge.jpg"
              alt="London Tower Bridge"
            />
          </Slide> */}
        </Background>

        {/* <PostList posts={posts} title="Latest posts" />
        <Pagination pageContext={pageContext} pathPrefix="/" /> */}
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

// export const pageQuery = graphql`
//   query IndexQuery($limit: Int!, $skip: Int!) {
//     allWordpressPost(
//       sort: { fields: date, order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           ...PostListFields
//         }
//       }
//     }
//   }
// `

/* const Background = styled.img`
	left: 50%;
	min-height: 100%;
	min-width: 100%;
	position: fixed;
	transform: translate(-50%, 0);
	z-index: 1;
`
*/

const Background = styled.div`
  background-color: #000;
  height: 100vh;
`

const Slide = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
`

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

export default IndexPage
