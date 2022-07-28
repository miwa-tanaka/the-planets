module.exports = {
  pathPrefix: "/the-planets",
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
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
    }
  ],
};