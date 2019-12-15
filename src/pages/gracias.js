import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"
export default function gracias() {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes de tu compra</p>
        <p>¡Te esperamos de vuelta!</p>
        <span role="img" arial-label="emoji">
          ❤️
        </span>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
