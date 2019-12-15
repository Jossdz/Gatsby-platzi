import React from "react"
import { StyledJumbo } from "../styles/components"
export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>¡Consigue la mejor ropa para celebrar la navidad en Pasarela!</h2>
        <small>{description}</small>
      </div>
    </StyledJumbo>
  )
}
