import styles from './UI.module.css';
import { Ingredients, Salad, Meat, Cheese, Bacon } from '../../dataStructure';
import { generateUI } from './UIGenerate';

type ChildProps = {
  ingredients: Ingredients;
  changeIngredients: (index: number, newValue: Salad | Cheese | Bacon | Meat) => void;
};

export default function UI({ ingredients, changeIngredients }: ChildProps) {
  return (
    <>
      <div className={styles.container}>
        {ingredients.map((ingredient, index) => {
          return generateUI(ingredient, index, changeIngredients);
        })}
      </div>
    </>
  );
}
