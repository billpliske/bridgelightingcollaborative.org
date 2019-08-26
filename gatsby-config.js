module.exports = {
  siteMetadata: {
    title: `Bill's blog name`,
    subtitle: 'Blog subtitle for Bill',
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `blog.billpliske.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        excludedRoutes: ["/wp/v2/users/me", "/wp/v2/themes", "/acf/v2/options", "/wp/v2/settings"]
      }
    }
  ]
}
