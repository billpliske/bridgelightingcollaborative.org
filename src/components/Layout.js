import React from 'react'
import Helmet from 'react-helmet'
import GlobalStyles from './DefaultStyles'

// import Navbar from './Navbar'

const TemplateWrapper = ({ children }) => (
  <div>
    <GlobalStyles />
    <Helmet title="Home | Gatsby + WordPress" />
    {/* <Navbar /> */}
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
