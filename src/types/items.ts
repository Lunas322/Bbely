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

export type modalOption = {
    color?: string[]
    size?: string[]
    price?: number
    img?: string
    cartData: Item[]
    itemTitle?: string
    setCartData: React.Dispatch<React.SetStateAction<Item[]>>
}

export type Item = {
  size?: string;
  color?: string;
  count: number;
  img?: string;
  price?: number;
};

export type cartDataProps = {
    cartData: Item[]
    setCartData: React.Dispatch<React.SetStateAction<Item[]>>
}