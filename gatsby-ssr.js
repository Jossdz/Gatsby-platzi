const React = require("react")
const { CartProvider } = require("./src/context")
const { GlobalStyles } = require("./src/styles")
const Layout = require("./src/components/layout").default

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
