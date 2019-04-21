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
          src="https://blog.pghblc.org/wp-content/uploads/2019/04/I-35W-Bridge-Minneapolis.jpg"
          alt="logo"
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
  min-width: 100%;
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
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`
