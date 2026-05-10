export type cardSize = 'S'|'L'

export type itemListCardProps = {
    cardSize : cardSize
    discount: number|null
    shop: string
    itemTitle: string
    img: string
    price: string
    id:number
}