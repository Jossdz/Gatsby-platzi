import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Image({ name }) {
  const data = useStaticQuery(
    graphql`
      query GET_IMAGE {
        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <Img fluid={data[name].childImageSharp.fluid} />
}
