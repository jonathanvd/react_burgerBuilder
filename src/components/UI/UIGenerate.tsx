import { Bacon, Cheese, Meat, Salad } from '../../dataStructure';
import styles from './UI.module.css';

export function generateUI(
  ingredient: Salad | Cheese | Bacon | Meat,
  index: number,
  changeIngredients: (index: number, newValue: Salad | Cheese | Bacon | Meat) => void
) {

	// dit is een beetje een rare manier van werken en kan voorkomen worden door een iets meer uitgebreide interface, zie dataStructure.ts
  for (const [key, value] of Object.entries(ingredient)) {
    return (
      <div draggable="true" key={index} className={`${styles.box} ${styles[key]}`}>
        <input
          type="number"
          min="1"
          max="9"
          defaultValue={value}
          onChange={(e) =>
            changeIngredients(index, { [key]: Number(e.target.value) } as unknown as Salad | Cheese | Bacon | Meat)
          }
        />
      </div>
    );
  }
}
