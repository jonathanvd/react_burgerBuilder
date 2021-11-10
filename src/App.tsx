import Burger from './components/burger/Burger';
import { useState } from 'react';
import { Bacon, Cheese, Ingredient, Ingredients, Meat, Salad } from './dataStructure';
import UI from './components/UI/UI';

// ik raad aan om altijd arrow functions te gebruiken als je ES6 aan het schrijven bent
// het principe is hetzelfde, alleen een modernere manier van noteren, en er zijn nog een paar subtielere verschillen
// Grootste verschil is het ontbreken van een this. call, omdat bij arrow functions this. altijd automatisch "gebind" wordt
// lees hier meer: https://www.geeksforgeeks.org/when-should-one-use-arrow-functions-in-es6/?ref=rp
// React arrow functions: https://www.w3schools.com/react/react_es6_arrow.asp


// voorbeeld van hoe ik dit component zou schrijven met arrow functions
const AppArrow = (arg1: string, arg2: number) => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([{ salad: 1 }, { bacon: 1 }, { cheese: 1 }, { meat: 1 }]);


	const handleIngredientsChange = (index: number, newValue: Ingredient) => {
		const newState = [...ingredients];
		newState[index] = newValue;
		setIngredients(newState);
	}

	return (
		<>
			<Burger ingredients={ingredients} />
			<UI ingredients={ingredients} changeIngredients={handleIngredientsChange} />
		</>
	)
}

function App() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([{ salad: 1 }, { bacon: 1 }, { cheese: 1 }, { meat: 1 }]);

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
