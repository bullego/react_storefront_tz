const FETCH_CARDS = 'cards/FETCH_CARDS';
const ADD_TO_SHOPPING_CART = 'cards/ADD_TO_SHOPPING_CART';
const DELETE_FROM_SHOPPING_CART = 'cards/DELETE_FROM_SHOPPING_CART';
const UPD_SHOPPING_CART = 'cards/UPD_SHOPPING_CART';

const initialState = {
	cardsData: [],
	shoppingCartData: [],
}

//reducer
const cardsReducer = (state = initialState, action) => {
	switch(action.type) {
    case FETCH_CARDS:
      return {
        ...state,
				cardsData: action.cards
			}
    case ADD_TO_SHOPPING_CART:
      return {
        ...state,
				shoppingCartData: [...state.shoppingCartData, action.newCard],
			}
		case UPD_SHOPPING_CART:
      return {
        ...state,
				shoppingCartData: [...action.nextShoppingCart],
			}
    case DELETE_FROM_SHOPPING_CART:
      return {
        ...state,
				shoppingCartData: [...action.newShoppingCartData]
			}
    default:
			return state;
  }
}
export default cardsReducer;


//Action Creator
export const setCardsAC = (cards) => {
  return {
    type: FETCH_CARDS,
		cards
  }
}
export const addToShoppingCartAC = (newCard) => {
  return {
    type: ADD_TO_SHOPPING_CART,
		newCard
  }
}
export const deleteFromShoppingCartAC = (newShoppingCartData) => {
  return {
    type: DELETE_FROM_SHOPPING_CART,
		newShoppingCartData
  }
}
export const updShopingCartAC = (nextShoppingCart) => {
  return {
    type: UPD_SHOPPING_CART,
		nextShoppingCart
  }
}

//Thunk Creator
export const fetchCardsTC = () => (dispatch) => {
	fetch(`react_storefront_tz/static/products.json`, {
		headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
			}
	})
	.then(response => response.json())
	.then(cards => {
		dispatch(setCardsAC(cards));
	});
};