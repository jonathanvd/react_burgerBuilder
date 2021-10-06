export interface Salad {
  salad: number;
}

export interface Bacon {
  bacon: number;
}

export interface Cheese {
  cheese: number;
}

export interface Meat {
  meat: number;
}

export type Ingredients = (Salad | Cheese | Bacon | Meat)[];
