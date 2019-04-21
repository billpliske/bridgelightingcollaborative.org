import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import PostList from '../components/PostList'
// import Pagination from '../components/Pagination'

export default class IndexPage extends React.Component {
  render() {
    // const { data, pageContext } = this.props
    // const { edges: posts } = data.allWordpressPost

    return (
      <Layout>
        <Background
          sizes="100vh"
          srcSet="
          https://res.cloudinary.com/billpliske/image/upload/f_auto,q_70,w_512/v1555871516/pghblc.org/I-35-bridge-minneapolis.jpg  512w,
          https://res.cloudinary.com/billpliske/image/upload/f_auto,q_70,w_1024/v1555871516/pghblc.org/I-35-bridge-minneapolis.jpg    640w"
          src="
          https://res.cloudinary.com/billpliske/image/upload/v1555871516/pghblc.org/I-35-bridge-minneapolis.jpg"
          alt="Minneapolis bridge"
        />

        <Headline>Coming soon!</Headline>
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

const Background = styled.img`
  left: 50%;
  min-height: 100%;
  /* min-width: 100%; */
  position: fixed;
  transform: translate(-50%, 0);
  z-index: 1;
`

const Headline = styled.h1`
  color: white;
  flex: 1;
  font-family: 'Exo', sans-serif;
  font-size: 40px;
  font-weight: 900;
  left: 50%;
  margin-right: -50%;
  margin: 0;
  min-width: 300px;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (min-width: 700px) {
    /* background: palevioletred; */
  }
`
