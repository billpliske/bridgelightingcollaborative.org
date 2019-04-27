import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'

export default class IndexPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost

    return (
      <Layout>
        {/* <Background
          sizes="100vh"
          srcSet="
            https://res.cloudinary.com/codaworx/image/upload/f_auto,q_70,w_512/v1400510474/project/polli-andrea-image1.jpg  512w,
            https://res.cloudinary.com/codaworx/image/upload/f_auto,q_70,w_1024/v1400510474/project/polli-andrea-image1.jpg    640w"
          src="
            https://res.cloudinary.com/codaworx/image/upload/v1400510474/project/polli-andrea-image1.jpg"
          alt="Minneapolis bridge"
        />

        <Wrapper>
          <Top>
            <Headline>Pittsburgh Bridge Lighting Collaborative.</Headline>
            <Description>
              A unique effort to illuminate all of Pittsburgh's bridges.
            </Description>
          </Top>
          <Bottom>
            <Coming>Coming soon.</Coming>
            <Email>
              <a href="mailto:rod@pghblc.org">rod@pghblc.org</a>
            </Email>
          </Bottom>
        </Wrapper> */}
        <PostList posts={posts} title="Latest posts" />
        <Pagination pageContext={pageContext} pathPrefix="/" />
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

export const pageQuery = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-rows: 1fr 1fr;
//   height: 100vh;
//   position: relative;
// `

// const Top = styled.div`
//   position: relative;
// `

// const Bottom = styled.div`
//   align-self: flex-end;
//   position: relative;
// `

// const Background = styled.img`
//   left: 50%;
//   min-height: 100%;

//   position: fixed;
//   transform: translate(-50%, 0);
//   z-index: 1;
//   @media (min-width: 1180px) {
//     min-width: 100%;
//   }
// `

// const Headline = styled.h1`
//   color: white;
//   font-family: 'Exo', sans-serif;
//   font-size: 21px;
//   line-height: 24px;
//   margin: 0 auto;
//   max-width: 90%;
//   position: relative;
//   text-align: center;
//   text-transform: uppercase;
//   top: 25px;
//   z-index: 2;

//   @media (min-width: 360px) {
//     font-size: 23px;
//     line-height: 25px;
//     top: 30px;
//   }
//   @media (min-width: 375px) {
//     font-size: 24px;
//     line-height: 26px;
//     top: 30px;
//   }
//   @media (min-width: 400px) {
//     font-size: 27px;
//     line-height: 30px;
//     top: 45px;
//   }
//   @media (min-width: 768px) {
//     font-size: 51px;
//     line-height: 52px;
//     top: 55px;
//   }
//   @media (min-width: 1024px) {
//     font-size: 48px;
//     line-height: 47px;
//     top: 39px;
//   }
//   @media (min-width: 1500px) {
//     font-size: 51px;
//     line-height: 47px;
//     top: 52px;
//   }
// `
// const Description = styled.h3`
//   color: orange;
//   font-family: 'Exo', sans-serif;
//   font-size: 17px;
//   font-style: italic;
//   font-weight: 500;
//   margin: 0 auto;
//   max-width: 86%;
//   position: relative;
//   text-align: center;
//   top: 40px;
//   z-index: 2;
//   @media (min-width: 360px) {
//     font-size: 17px;
//     top: 50px;
//   }
//   @media (min-width: 375px) {
//     font-size: 18px;
//     top: 55px;
//   }
//   @media (min-width: 400px) {
//     font-size: 19px;
//     top: 65px;
//   }
//   @media (min-width: 768px) {
//     font-size: 24px;
//     top: 76px;
//   }
//   @media (min-width: 1024px) {
//     font-size: 23px;
//     top: 52px;
//   }
//   @media (min-width: 1500px) {
//     font-size: 26px;
//     top: 77px;
//   }
// `

// const Coming = styled.p`
//   bottom: 47px;
//   color: white;
//   font-family: 'Exo', sans-serif;
//   font-size: 27px;
//   font-weight: 900;
//   line-height: 24px;
//   margin: 0 auto;
//   max-width: 90%;
//   position: relative;
//   text-align: center;
//   z-index: 2;

//   @media (min-width: 360px) {
//     bottom: 55px;
//     font-size: 30px;
//   }

//   @media (min-width: 375px) {
//     bottom: 55px;
//     font-size: 30px;
//   }

//   @media (min-width: 400px) {
//     bottom: 65px;
//     font-size: 35px;
//   }
//   @media (min-width: 768px) {
//     bottom: 115px;
//     font-size: 44px;
//   }
//   @media (min-width: 1024px) {
//     bottom: 75px;
//     font-size: 39px;
//     text-shadow: 0px 0px 11px rgba(0, 0, 0, 0.9);
//   }
// `

// const Email = styled.p`
//   background-color: #11162b;
//   border-radius: 10px;
//   bottom: 25px;
//   color: white;
//   font-family: 'Exo', sans-serif;
//   font-size: 15px;
//   line-height: 24px;
//   margin: 0 auto;
//   width: 150px;
//   padding: 10px;
//   position: relative;
//   text-align: center;
//   z-index: 2;

//   a {
//     color: white;
//     text-decoration: none;
//   }

//   @media (min-width: 360px) {
//     bottom: 25px;
//     font-size: 15px;
//     line-height: 24px;
//     width: 150px;
//   }

//   @media (min-width: 375px) {
//     bottom: 25px;
//     font-size: 15px;
//     line-height: 24px;
//     width: 150px;
//   }

//   @media (min-width: 400px) {
//     bottom: 30px;
//     font-size: 16px;
//     line-height: 24px;
//     width: 160px;
//   }
//   @media (min-width: 768px) {
//     bottom: 57px;
//     font-size: 23px;
//     line-height: 24px;
//     padding: 15px;
//     width: 200px;
//   }
//   @media (min-width: 1024px) {
//     bottom: 32px;
//     font-size: 20px;
//     line-height: 24px;
//     padding: 12px;
//     width: 188px;
//   }
// `
