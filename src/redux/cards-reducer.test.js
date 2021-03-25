import cardsReducer, { setCardsAC,
											 deleteFromShoppingCartAC,
											 addToShoppingCartAC,
											 updShopingCartAC } from './cards-reducer';

const cards = [
	{
		title: "Blue Stripe Stoneware Plate",
		brand: "Kiriko",
		price: 40,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
		image: "blue-stripe-stoneware-plate.jpg",
		id: 1
	},
	{
		title: "Hand Painted Blue Flat Dish",
		brand: "Kiriko",
		price: 28,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
		image: "hand-painted-blue-flat-dish.jpg",
		id: 2
	},
	{
		title: "Heme",
		brand: "Dust & Form",
		price: 52,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
		image: "heme.jpg",
		id: 3
	},
	{
		title: "Mashiko-Yaki Green Small Plate",
		brand: "Kiriko",
		price: 28,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
		image: "mashiko-yaki-green-small-plate.jpg",
		id: 4
	},
	{
		title: "Mashiko-Yaki Indigo Small Plate",
		brand: "Kiriko",
		price: 28,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
		image: "mashiko-yaki-indigo-small-plate.jpg",
		id: 5
	},
	{
		title: "Mashiko-Yaki Saucer",
		brand: "Kiriko",
		price: 18,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
		image: "mashiko-yaki-saucer.jpg",
		id: 6
	}
]

describe('Reducer Tests', () => {
	it('cards should be added on Category Page', () => {
		//1.test data
		let action = setCardsAC(cards);
		let state = {
			cardsData: []
		}
		//2.action
		let newState = cardsReducer(state, action);
		//3.expectation
		expect(newState.cardsData.length).toBe(6);
	});

	it('a new card should be added on Category Page', () => {
		//1.test data
		let nextCards = cards.concat({
			title: "Blue Glass Plate",
			brand: "Kiriko",
			price: 10,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
			image: "blue-glass-plate.jpg",
			id: 7
		})
		let action = setCardsAC(nextCards);
		let state = {
			cardsData: []
		}
		//2.action
		let newState = cardsReducer(state, action);
		//3.expectation
		expect(newState.cardsData.length).toBe(7);
	});

	it('after added item to the shopping cart length of cards should be increment', () => {
		//1.test data
		let newCard = {
			title: "Blue Stripe Stoneware Plate",
			brand: "Kiriko",
			price: 40,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
			image: "blue-stripe-stoneware-plate.jpg",
			id: 1
		};
		let action = addToShoppingCartAC(newCard);
		let state = {
			shoppingCartData: []
		}
		//2.action
		let newState = cardsReducer(state, action);
		//3.expectation
		expect(newState.shoppingCartData.length).toBe(1);
	});

	it('after deleting item from shopping cart length of cards should be decrement', () => {
		//1.test data
		let newShoppingCartData = [{
			title: "Blue Stripe Stoneware Plate",
			brand: "Kiriko",
			price: 40,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
			image: "blue-stripe-stoneware-plate.jpg",
			id: 1
		},
		{
			title: "Hand Painted Blue Flat Dish",
			brand: "Kiriko",
			price: 28,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
			image: "hand-painted-blue-flat-dish.jpg",
			id: 2
		}];
		let action = deleteFromShoppingCartAC(newShoppingCartData);
		let state = {
			shoppingCartData: [{
				title: "Blue Stripe Stoneware Plate",
				brand: "Kiriko",
				price: 40,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
				image: "blue-stripe-stoneware-plate.jpg",
				id: 1
			},
			{
				title: "Hand Painted Blue Flat Dish",
				brand: "Kiriko",
				price: 28,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
				image: "hand-painted-blue-flat-dish.jpg",
				id: 2
			},
			{
				title: "Heme",
				brand: "Dust & Form",
				price: 52,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
				image: "heme.jpg",
				id: 3
			}]
		}
		//2.action
		let newState = cardsReducer(state, action);
		//3.expectation
		expect(newState.shoppingCartData.length).toBe(2);
	});

	it('after updating shopping cart, cards should have updated properties', () => {
		//1.test data
		let newShoppingCartData = [{
			title: "Hand Painted Blue Flat Dish",
			brand: "Kiriko",
			price: 28,
			count: 2,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
			image: "hand-painted-blue-flat-dish.jpg",
			id: 2
		}];
		let action = updShopingCartAC(newShoppingCartData);
		let state = {
			shoppingCartData: [{
				title: "Hand Painted Blue Flat Dish",
				brand: "Kiriko",
				price: 28,
				count: 1,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
				image: "hand-painted-blue-flat-dish.jpg",
				id: 2
			}]
		}
		//2.action
		let newState = cardsReducer(state, action);
		//3.expectation
		expect(newState.shoppingCartData[0].count).toBe(2);
	});
})