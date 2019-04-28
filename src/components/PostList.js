import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <HomeWrapper>
        <div>
          <div>
            <h1>{title}</h1>
          </div>
          <PostsList>
            {posts.map(({ node: post }) => (
              <HomeListItem key={post.id}>
                {post.featured_media && (
                  <Link to={`/blog/${post.slug}`}>
                    <ImageOuterWrapper>
                      <Image
                        src={
                          post.featured_media.localFile.childImageSharp.sizes
                            .src
                        }
                        sizes={
                          post.featured_media.localFile.childImageSharp.sizes
                        }
                        alt="blog_image_one"
                      />
                    </ImageOuterWrapper>
                  </Link>
                )}

                <Excerpt>
                  <Headline>{post.title}</Headline>
                  <span> &bull; </span>
                  <small>
                    {post.date}
                    {' '}
- posted by
                    {' '}
                    <Link to={`/author/${post.author.slug}`}>
                      {post.author.name}
                    </Link>
                  </small>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.replace(
                          /<p class="link-more.*/,
                          ''
                        ),
                      }}
                    />
                    <Link to={`/blog/${post.slug}`}>Keep Reading →</Link>
                  </div>
                </Excerpt>
              </HomeListItem>
            ))}
          </PostsList>
        </div>
      </HomeWrapper>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    featured_media {
      localFile {
        childImageSharp {
          id
          sizes(maxWidth: 1000) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`

const HomeWrapper = styled.section`
  margin: 25px;
`

const PostsList = styled.ul`
  list-style: none;
  margin: 0px auto;
`

const HomeListItem = styled.li`
  margin: 20px 0;
  border: 1px solid transparent;
  border-radius: 10px;
  position: relative;
  transition: all 0.5s;
  background: transparent;
  &:first-of-type {
    margin-top: 0;
  }
`
const ImageOuterWrapper = styled.div`
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(236, 235, 234);
  border-image: initial;
  overflow: hidden;
  img {
    z-index: -1;
    transition: opacity 0.5s ease 0.5s;
  }
  div div {
    padding-bottom: 50% !important;
  }
`

const Image = styled(Img)`
  transition: opacity 0.5s ease 0.5s;
`

const Excerpt = styled.div`
  margin: 8px;
`

const Headline = styled.h1`
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 27px;
  padding: 10px 20px 10px 0;
`
