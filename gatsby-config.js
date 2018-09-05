let activeEnv = process.env.ACTIVE_ENV

if (!activeEnv) {
  activeEnv = "development"
}

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: 'Psycholog Warszawa Włochy - Ilona Lasota - dobry psychoterapeuta',
    author: 'Ilona Lasota',
    description:
      'Ilona Lasota - bardzo dobry psycholog z miasta Warszawa Włochy. Psychoterapeuta z dobrymi opiniami.',
    siteUrl: 'https://twoj-terapeuta.pl/',
  },
  pathPrefix: '/twoj-terapeuta',
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Twój terapeuta - Ilona Lasota',
        short_name: `Twój terapeuta`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4a90e2`,
        display: `minimal-ui`,
        icon: `src/assets/twoj-terapeuta.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
  ],
}
