const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const {  createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark'){

        const slug = path.basename(node.fileAbsolutePath, '.md')
        console.log('@@@@@@@@@@@@@@@@@', slug)

        // console.log(JSON.stringify(node, undefined, 4))
    }


  }