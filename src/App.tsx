import Burger from './components/burger/Burger';
import { useState } from 'react';
import { Bacon, Cheese, Ingredients, Meat, Salad } from './dataStructure';
import UI from './components/UI/UI';

function App() {
  const [ingredients, setIngredients] = useState<Ingredients>([{ salad: 1 }, { bacon: 1 }, { cheese: 1 }, { meat: 1 }]);

  function handleIngredientsChange(index: number, newValue: Salad | Cheese | Bacon | Meat) {
    const newState = [...ingredients];
    newState[index] = newValue;
    setIngredients(newState);
  }

  return (
    <>
      <Burger ingredients={ingredients} />
      <UI ingredients={ingredients} changeIngredients={handleIngredientsChange} />
    </>
  );
}

export default App;
