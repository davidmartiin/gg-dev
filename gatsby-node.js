/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

//Page creation
const path = require('path');
const slash = require('slash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
            title
            template
            yoast_meta {
              yoast_wpseo_metadesc
              yoast_wpseo_title
            }
          }
        }
      }
      allWordpressPost(filter: {status: {eq: "publish"}}){
          nodes{
              wordpress_id
              slug
              categories{
                  slug
              }
              yoast_meta{
                  yoast_wpseo_title
                  yoast_wpseo_metadesc
              }
          }
      }
      allWordpressWpCareers(filter: {status: {eq: "publish"}}){
          nodes{
              wordpress_id
              slug
              categories{
                  slug
              }
              yoast_meta{
                  yoast_wpseo_title
                  yoast_wpseo_metadesc
              }
          }
      }
      allWordpressWpStories(filter: {status: {eq: "publish"}}){
          nodes{
              wordpress_id
              slug
              yoast_meta{
                  yoast_wpseo_title
                  yoast_wpseo_metadesc
              }
          }
      }
    }
  `);

  if( result.errors ){
      throw new Error(result.errors);
  }
  const {allWordpressPage, allWordpressPost, allWordpressWpCareers, allWordpressWpStories} = result.data;

  const regExps = {
    about: new RegExp("about"),
    events: new RegExp("events"),
    involved: new RegExp("careers"),
    donors: new RegExp("donors"),
    programs: new RegExp("programs"),
    stories: new RegExp("stories"),
    blog: new RegExp("blog"),
  };

  let pageTemplate = path.resolve('./src/templates/page.js');

  allWordpressPage.edges.forEach( edge => {
    const wpPageTemplatePath = edge.node.template;
    if( regExps.about.test( wpPageTemplatePath ) ){
      console.log("It's the About page template!");
      pageTemplate = path.resolve( './src/templates/about.js' );
    } else if( regExps.events.test( wpPageTemplatePath ) ){
      console.log("It's the Event page template!");
      pageTemplate = path.resolve( './src/templates/events.js' );
    } else if( regExps.involved.test( wpPageTemplatePath ) ){
      pageTemplate = path.resolve( './src/templates/involved.js' );
    } else if( regExps.donors.test( wpPageTemplatePath ) ){
      pageTemplate = path.resolve( './src/templates/donors.js' );
    } else if( regExps.programs.test( wpPageTemplatePath ) ){
      pageTemplate = path.resolve( './src/templates/programs.js' );
    } else if( regExps.stories.test( wpPageTemplatePath ) ){
      pageTemplate = path.resolve( './src/templates/stories.js' );
    } else if( regExps.blog.test( wpPageTemplatePath ) ){
      pageTemplate = path.resolve( './src/templates/blog.js' );
    }

    const meta = edge.node.yoast_meta;


    createPage({
      path: edge.node.slug,
      component: slash(pageTemplate),
      context: {
        pageId: edge.node.wordpress_id,
        title: meta.yoast_wpseo_title,
        metaDescription: meta.yoast_wpseo_metadesc,
      }
    });
  });

  const careerTemplate = path.resolve(`./src/templates/singleCareer.js`);
  allWordpressWpCareers.nodes.forEach( node => {
      const meta = node.yoast_meta;
      createPage({
          path: `${node.slug}`,
          component: slash(careerTemplate),
          context: {
              postId: node.wordpress_id,
              category: node.categories[0].slug,
              title: meta.yoast_wpseo_title,
              metaDescription: meta.yoast_wpseo_metadesc,
          }
      });
  });

  const postTemplate = path.resolve(`./src/templates/singlePost.js`);
  allWordpressPost.nodes.forEach( node => {
      const meta = node.yoast_meta;
      createPage({
          path: `${node.slug}`,
          component: slash(postTemplate),
          context: {
              postId: node.wordpress_id,
              categories: node.categories,
              title: meta.yoast_wpseo_title,
              metaDescription: meta.yoast_wpseo_metadesc,
          }
      })
  })

  const storyTemplate = path.resolve(`./src/templates/singleStory.js`);
  allWordpressWpStories.nodes.forEach( node => {
     const meta = node.yoast_meta;
     createPage({
        path: `${node.slug}`,
        component: slash(storyTemplate),
        context: {
            postId: node.wordpress_id,
            title: meta.yoast_wpseo_title,
            metaDescription: meta.yoast_wpseo_metadesc,
        },
     });
  });
}
