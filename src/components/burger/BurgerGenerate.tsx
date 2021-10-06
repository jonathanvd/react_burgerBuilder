import { Bacon, Cheese, Meat, Salad, Ingredients } from '../../dataStructure';
import styles from './Burger.module.css';

function generateIngredient(ingredient: Salad | Cheese | Bacon | Meat) {
  for (const [key, value] of Object.entries(ingredient)) {
    const values = [];
    for (var i = 0; i < value; i++) {
      values.push(i);
    }

    if (key) {
      return (
        <>
          {values.map((v) => (
            <div className={styles[key]}></div>
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
    elements.push(generateIngredient(ingredient));
  });

  return elements;
}
