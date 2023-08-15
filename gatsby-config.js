require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful Starter",
    description: "Official Contentful Gatsby Starter",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /\.inline\.svg$/,
    //       options: {
    //         tag: "symbol",
    //         name: "Socials",
    //         props: {
    //           className: "social-class",
    //           title: "Socials"
    //         },
    //         filters: [value => console.log(value)]
    //       }
    //     }
    //   }
    // }
  ],
};

// preview: PMwo5svK5JRQ_ryoSv3JKSAhdQRaU6WyvFuPA4AnjHs
