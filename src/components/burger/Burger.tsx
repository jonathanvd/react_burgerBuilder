import { Ingredients } from '../../dataStructure';
import styles from './Burger.module.css';
import { generateIngredients } from './BurgerGenerate';

type ChildProps = {
  ingredients: Ingredients;
};

export default function Burger({ ingredients }: ChildProps) {
  return (
    <div className={styles.burger}>
      <div className={styles.breadTop}>
        <div className={`${styles.seed} ${styles.seeds}`}></div>
        <div className={`${styles.seed} ${styles.seeds2}`}></div>
      </div>
      {generateIngredients(ingredients)}
      <div className={styles.breadBottom}></div>
    </div>
  );
}
