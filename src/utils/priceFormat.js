export default function priceFormat(price) {
  const priceFloat = (price / 100).toFixed(2)
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceFloat)
}
