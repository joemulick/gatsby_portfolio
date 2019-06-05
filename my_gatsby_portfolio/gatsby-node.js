const path = require('path')

  module.exports.createPages = async ({ graphql, actions }) => {
        const { createPage } = actions
        const blogTemplate = path.resolve('./src/templates/blogTemplate.js')
        
        // This is a graphql method on 'Gatsby Node APIs' ~ Slightly different than graphql method on  ~ asynch method
        const res = await graphql(`
            query {
                allContentfulBlogPost {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `)


        res.data.allContentfulBlogPost.edges.forEach((edge) => {
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.slug}`,
                context: {
                    slug: edge.node.slug
                }
            })
        })


  }