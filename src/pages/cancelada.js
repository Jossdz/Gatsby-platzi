import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"
export default function cancelada() {
  return (
    <div>
      <SEO title="Compra Cancelada" />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>Lo sentimos</p>
        <p>¡Pasarela seguira disponible!</p>
        <span role="img" arial-label="emoji">
          💔
        </span>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
