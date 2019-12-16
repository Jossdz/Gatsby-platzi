import React, { useState, useContext } from "react"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"
import {
  Tag,
  SizeButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"
import { SEO, Stars } from "."

export default function ProductDetail({
  price,
  id,
  product: { name, metadata },
}) {
  const formatePrice = priceFormat(price)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({ price, sku: id, name, metadata, quantity: qty })
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatePrice}</b>
        <Stars />
        <small>{metadata.description}</small>
        <p>Talla:</p>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>S</SizeButton>
            <SizeButton onClick={() => setSize(2)}>M</SizeButton>
            <SizeButton onClick={() => setSize(3)}>L</SizeButton>
            <SizeButton onClick={() => setSize(4)}>XL</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
