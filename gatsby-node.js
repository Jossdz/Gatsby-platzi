const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const result = await graphql(`
    query GET_SKUS {
      allStripeSku {
        edges {
          node {
            id
            price
            product {
              name
              metadata {
                description
                img
                wear
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allStripeSku.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    })
  })
}
