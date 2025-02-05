export function formatCurrency(quantity: number) {
  return new Intl.NumberFormat("es-EU", {
    style: "currency",
    currency: "EUR",
  }).format(quantity);
}
