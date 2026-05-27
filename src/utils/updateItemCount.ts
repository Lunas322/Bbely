import { Item } from "../types/items";

type AddDelete = "add" | "delete";

type UpdateItemCountProps = {
  id: number;
  setCartData: React.Dispatch<React.SetStateAction<Item[]>>;
  type: AddDelete;
};

export function updateItemCount({
  id,
  setCartData,
  type,
}: UpdateItemCountProps) {
  setCartData((prev) =>
    prev
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: type === "add" ? item.count + 1 : item.count - 1,
          };
        }

        return item;
      })
      .filter((item) => item.count > 0),
  );
}
