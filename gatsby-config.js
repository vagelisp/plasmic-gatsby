module.exports = {
  siteMetadata: {
    title: `Gatsboy Test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    {
      resolve: "@plasmicapp/loader-gatsby",
      options: {
        // ...
      },
      options: {
        projects: [
          {
            id: "vENnA8Z2hrJ9V54tzbSmnv", // ID of a project you are using
            token:
              "8flH46o3LTvDD9vQQv7F7Z7BwNW59S7w81tJXqH7AJfr7GLz1ah2D7VbAjlkNsdckTgGWAAT3jHTEAX0ew", // API token for that project
          },
        ],
        defaultPlasmicPage: require.resolve(
          "./src/templates/plasmicDefaultPageTemplate.tsx"
        ),
        // Optionally specify pages to ignore.
        ignorePaths: ["/my-page"],
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
