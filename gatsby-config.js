module.exports = {
  pathPrefix: `/the-planets`,
  siteMetadata: {
    siteUrl: `https://miwa-tanaka.github.io/the-planets/`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        path: `./src/images`,
      }
    },
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `./src/data/`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ThePlanets`,
        short_name: `ThePlanets`,
        start_url: `/`,
        background_color: `#070724`,
        theme_color: `#6D2ED5`,
        display: `standalone`,
        icon: "src/images/favicon.png",
      },
    },
  ],
};