module.exports = {
  siteMetadata: {
    title: `Sr. Frontend challenge`,
    description: `Frontend challenge to have fun and get the position of senior frontend developer at Parrot.`,
    author: `mcontreras.se95@gmail.com`,
    siteUrl: `https://parrotitemsmain.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [980],
          placeholder: `none`,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Parrot - Sr. Frontend challenge`,
        short_name: `Parrot challenge`,
        start_url: `/`,
        background_color: `#f04e4a`,
        display: `standalone`,
        icon: `${__dirname}/src/assets/images/parrot-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,300i,400,400i,500,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-page-transitions'
  ],
}
