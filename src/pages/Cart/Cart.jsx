import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//redux
import { deleteFromShoppingCartAC, updShopingCartAC } from '../../redux/cards-reducer';
//routing
import { useHistory } from 'react-router-dom';
//components
import { TableCart } from '../../components/TableCart';
//material-ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
//styles
import stl from './Cart.module.css';

const Cart = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const shoppingCartData = useSelector(state => state.cards.shoppingCartData);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const prices = shoppingCartData.map(item => item.price * item.count);
		const updTotalPrice = prices.reduce((total, current) => total + current, 0);

		setTotalPrice(updTotalPrice);
	}, [shoppingCartData]);

	const handleContinueShoppingClick = () => {
		history.push('/');
	}

	const handleDeleteCard = (card_id) => {
		const index = shoppingCartData.findIndex(item => item.id === card_id);

		const newShoppingCartData = [
			...shoppingCartData.slice(0, index),
			...shoppingCartData.slice(index+1),
		]

		dispatch(deleteFromShoppingCartAC(newShoppingCartData));
	}

	const handleIncreaseCount = (card_id) => {
		const currCard = shoppingCartData.find(item => item.id === card_id);
		if(currCard.count >= 1) {
			currCard.count += 1;
		}
		const nextShoppingCart = shoppingCartData.map(item => (item.id === currCard.id) ? currCard : item);

		dispatch(updShopingCartAC(nextShoppingCart));
	}

	const handleDecreaseCount = (card_id) => {
		const currCard = shoppingCartData.find(item => item.id === card_id);
		if(currCard.count > 1) {
			currCard.count -= 1;
		}
		const nextShoppingCart = shoppingCartData.map(item => (item.id === currCard.id) ? currCard : item);

		dispatch(updShopingCartAC(nextShoppingCart));
	}

	return (
		<div className={stl.cart_container}>
			<Container>
				<Grid item xs={12} sm={12}>
					<h1>Shopping Cart</h1>
				</Grid>
			</Container>
				
			<Container>
				<Grid item xs={12} sm={12}>
					<div className={stl.cart_wrap}>
						<TableCart shoppingCartData={shoppingCartData}
											 handleDeleteCard={handleDeleteCard}
											 handleIncreaseCount={handleIncreaseCount}
											 handleDecreaseCount={handleDecreaseCount}/>

						<div className={stl.cart_overview}>
							<div className={stl.overview}>
								<p>Cart Overview</p>
							</div>
							<div className={stl.subtotal}>
								<p>Subtotal</p>
								<span>${totalPrice}.00</span>
							</div>
							<div className={stl.total}>
								<p>Total</p>
								<span>${totalPrice}.00 CAD</span>
							</div>
						</div>

						<div className={stl.cart_btn_wrap}>
							<button type='button'
											onClick={handleContinueShoppingClick}>
								Continue shopping
							</button>
							<button type='button'>Checkout <span>(${totalPrice}.00)</span></button>
						</div>
					</div>
				</Grid>
			</Container>			
		</div>
	);
};

export { Cart };