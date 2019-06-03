const React = require("react")
const Layout = require("./src/components/layout").default

exports.wrapRootElement = ({ element }) => <Layout>{element}</Layout>
