module.exports = {
  siteMetadata: {
    title: `Parrot - Sr. Frontend challenge`,
    description: `Frontend challenge to have fun and get the position of senior frontend developer at Parrot.`,
    author: `mcontreras.se95@gmail.com`,
    siteUrl: `https://parrotitemsmain.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,300i,400,400i,500,700`
        ],
        display: 'swap'
      }
    }
  ],
}
