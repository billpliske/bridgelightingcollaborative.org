import React from 'react'
import Helmet from 'react-helmet'
import GlobalStyles from './DefaultStyles'

// import Navbar from './Navbar'

const TemplateWrapper = ({ children }) => (
  <div>
    <GlobalStyles />
    <Helmet>
      <html lang="en" />
      <title>Home | Gatsby + WordPress</title>
      <meta
        name="description"
        content="Home of Pittsburgh Bridge Lighting Coalition"
      />
    </Helmet>
    {/* <Navbar /> */}
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
