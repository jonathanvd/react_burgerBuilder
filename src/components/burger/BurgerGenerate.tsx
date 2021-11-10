import { Bacon, Cheese, Meat, Salad, Ingredients } from '../../dataStructure';
import styles from './Burger.module.css';

function* generateId() {
  let id = 0;
  while (true) yield id++;
}

const keyId = generateId();

function generateIngredient(ingredient: Salad | Cheese | Bacon | Meat) {
  for (const [ingredientName, value] of Object.entries(ingredient)) {
    const values = [];
    for (var i = 0; i < value; i++) {
      values.push(i);
    }

    if (ingredientName) {
      return (
        <>
          {values.map(() => (
            <div key={'_' + ingredientName + keyId.next().value} className={styles[ingredientName]}></div>
          ))}
        </>
      );
    }
  }
  return <></>;
}

export function generateIngredients(ingredients: Ingredients) {
  const elements: JSX.Element[] = [];

  ingredients.forEach((ingredient) => {
    elements.push(...generateIngredient(ingredient).props.children);
  });

  return elements;
}
