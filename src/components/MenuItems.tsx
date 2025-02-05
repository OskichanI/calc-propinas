import { formatCurrency } from "../helpers/index.ts";
import type { MenuItem } from "../types/index.ts";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

const MenuItems = ({ item, addItem }: MenuItemProps) => {
  return (
    <>
      <button
        className="border-2 border-indigo-400 hover:bg-indigo-100 w-full p-3 flex justify-between"
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-black">{formatCurrency(item.price)}</p>
      </button>
    </>
  );
};

export default MenuItems;
