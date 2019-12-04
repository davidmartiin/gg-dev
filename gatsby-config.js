let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({
    path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `Global Gardens`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `David Martin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.GATSBY_WP_URL,
        protocol: process.env.GATSBY_WP_PROTOCOL,
        hostingWPCOM: false,
        useACF: true,
        auth: {
          htaccess_user: process.env.GATSBY_AUTH_USER,
          htaccess_pass: process.env.GATSBY_AUTH_PASS,
        },
        // searchAndReplaceContentUrls: {
        //   sourceUrl: `${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}`,
        //   replacementUrl: `http://globalgardens.netlify.com`,
        // },
        excludedRoutes: ['**/users', '**/comments', '**/tags', '**/settings', '**/themes', '**/blocks'],
        
      },
    },
    {
        resolve: `gatsby-source-gravityforms`,
        options: {
            baseUrl: `${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}`,
            api: {
                key: process.env.GATSBY_GFORM_CK,
                secret: process.env.GATSBY_GFORM_CS,
            },
            basicAuth: {
                username: process.env.GATSBY_AUTH_USER,
                password: process.env.GATSBY_AUTH_PASS,
            }
        }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        //Whitelists selectors
        whitelistPatterns: [/gravity/],
        // Ignore files
        ignore: ['/footer.scss'],
        // Purge only the main css file
        purgeOnly: ['/all.scss'],
      },
    }
  ],
}
