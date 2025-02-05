import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subtTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  const tipAmount = useMemo(
    () => subtTotalAmount * tip,
    [subtTotalAmount, tip]
  );

  const totalAmount = useMemo(
    () => subtTotalAmount + tipAmount,
    [subtTotalAmount, tipAmount]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subototal a pagar: {""}
          <span className="font-black">{formatCurrency(subtTotalAmount)}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-black">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a Pagar: {""}
          <span className="font-black">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 uppercase text-white font-bold  disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
