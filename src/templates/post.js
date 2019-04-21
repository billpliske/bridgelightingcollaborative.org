import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
}) => (
  <section className="section">
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <Title>{title}</Title>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
          <div style={{ marginTop: `4rem` }}>
            <p>
              <Meta>
                <Icon
                  width="16"
                  height="16"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <path id="a" d="M0 0h24v24H0V0z" />
                  </defs>
                  <clipPath id="b">
                    <use xlinkHref="#a" overflow="visible" />
                  </clipPath>
                  <path
                    clipPath="url(#b)"
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
                  />
                </Icon>
                {date}
              </Meta>
              <Meta>
                <Icon
                  width="16"
                  height="16"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </Icon>
                <Link to={`/author/${author.slug}`}>{author.name}</Link>
              </Meta>
              <Meta>
                <Icon
                  width="16"
                  height="16"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </Icon>

                {categories && categories.length ? (
                  <span>
                    {categories.map(category => (
                      <span key={`${category.slug}cat`}>
                        <Link to={`/categories/${category.slug}/`}>
                          {category.name}
                        </Link>
                      </span>
                    ))}
                  </span>
                ) : null}
              </Meta>

              <Meta>
                <Icon
                  width="16"
                  height="16"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </Icon>

                {tags && tags.length ? (
                  <span>
                    {tags.map(tag => (
                      <span key={`${tag.slug}tag`}>
                        <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                      </span>
                    ))}
                  </span>
                ) : null}
              </Meta>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | pghblc`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
    }
  }
`

const Content = styled.div`
  position: relative;
  /* figure img {
		height: auto;
		max-width: 200px;
	}
	*/
`

const Title = styled.h1`
  color: var(--greenish-teal);
  font-family: 'Exo', sans-serif;
  font-size: 40px;
  font-style: italic;
  font-weight: 200;
`

const Meta = styled.span`
  font-family: sans-serif;
  padding-left: 10px;
`

const Icon = styled.svg`
  fill: gray;
  padding-right: 2px;
  position: relative;
  top: 2px;
`
