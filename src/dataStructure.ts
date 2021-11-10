// ik zou voor deze interfaces gaan voor iets zoals:

type IngredientType = "Salad" | "Cheese" | "Bacon" | "Meat";

// dan gebruik je in je react state een array van IngredientJVD
// op deze manier moet je niet je keys gaan oplijsten
// deze manier maakt het ook gemakkelijker om andere properties toe te voegen aan een ingredient als dat nodig is later (bvb order: number om te bepalen in welke volgorde ze moeten verschijnen in de burger)
// ik vind het ook duidelijk waarover het gaat op deze manier
interface IngredientJVD {
	type: IngredientType;
	count: number;
}

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

// Een type dat rechtstreeks gelijk staat aan een array van iets anders is een beetje raar, ik zou het type enkelvoudig houden, dat is duidelijker zo
export type Ingredients = (Salad | Cheese | Bacon | Meat)[];

// hierna kan je dan overal gewoon Ingredient[] gebruiken
export type Ingredient = Salad | Cheese | Bacon | Meat;
