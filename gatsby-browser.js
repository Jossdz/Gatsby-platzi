const React = require("react")
const Layout = require("./src/components/layout").default
const { GlobalStyles } = require("./src/styles")

exports.wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </>
)
