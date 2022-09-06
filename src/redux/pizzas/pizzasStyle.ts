export type PizzasState = {
  pizzas: any[];
  cart: any[],
  fetching: boolean;
  error: boolean;
};

export type PizzasArray = {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type PizzasAction = {
  payload: PizzasArray;
};