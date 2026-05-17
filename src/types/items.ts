export type cardSize = 'S'|'L'

export type itemListCardProps = {
    cardSize : cardSize
    discount: number|null
    shop: string
    itemTitle: string
    img: string
    price: number
    id:number
}

export type SelectedItem = {
  size: string
  color: string
  count: number
}

export type modalOption = {
  color?: string[]
  size?: string[]

  price: number
  img: string
  itemTitle: string

  cartData: Item[]
  setCartData: React.Dispatch<React.SetStateAction<Item[]>>
}

export type Item = {
  size: string;
  color: string;
  count: number;
  img: string;
  price: number;
  id:number;
  itemTitle:string
};

export type cartDataProps = {
    cartData: Item[]
    setCartData: React.Dispatch<React.SetStateAction<Item[]>>
}