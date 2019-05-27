const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const {  createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark'){

        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })

        // -- prints slug names to console console.log('@@@@@@@@@@@@@@@@@', slug)
        // -- this console log lets you see the whole node object -- console.log(JSON.stringify(node, undefined, 4))
    }


  }

  module.exports.createPages = async ({ graphql, actions }) => {
        const { createPage } = actions
        const blogTemplate = path.resolve('./src/templates/blogTemplate.js')
        
        // This is a graphql method on 'Gatsby Node APIs' ~ Slightly different than graphql method on  ~ asynch method
        const res = await graphql(`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `)


        res.data.allMarkdownRemark.edges.forEach((edge) => {
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        })
        //1. Get path to template
        //2. Get md data
        //3. Create new pages

  }