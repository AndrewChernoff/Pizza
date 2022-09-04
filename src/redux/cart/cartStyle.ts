export type CartState = {
    cart: any[]
}

export type CartItem = {
    id: number
    imageUrl: string
    name: string,
    type: number,
    quantity: number,
    price: number
  }