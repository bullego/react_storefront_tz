import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//redux
import { addToShoppingCartAC, updShopingCartAC } from '../../redux/cards-reducer';
//components
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { CustomButton } from '../../components/CustomButton';
//material-ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
//notification
import { NotificationManager } from 'react-notifications';
//styles
import stl from './Product.module.css';

const Product = ({match, ...props}) => {
	const [product, setProduct] = useState({});
	const cardsData = useSelector(state => state.cards.cardsData);
	const shoppingCartData = useSelector(state => state.cards.shoppingCartData);
	const dispatch = useDispatch();

	const setProductWithInitCount = () => {
		const currProduct = cardsData.find(card => card.id === +match.params.id);
		currProduct.count = 1;
		setProduct(currProduct);
	}

	useEffect(() => {
		if(shoppingCartData.length !== 0) {
			const currProduct = shoppingCartData.find(card => card.id === +match.params.id);

			if(currProduct) {
				setProduct(currProduct);
			} else {
				setProductWithInitCount();
			}
		} else {
			setProductWithInitCount();
		}
	}, [])

	const handleAddToCart = (card_id) => {
		if(shoppingCartData.length !== 0) {
			const currShoppingCard = shoppingCartData.find(item => item.id === card_id);
			
			if(currShoppingCard) {
				const updShoppingCard = {...currShoppingCard, count: product.count }
				const nextShoppingCartData = shoppingCartData.map(item => (item.id === currShoppingCard.id) ? updShoppingCard : item);

				dispatch(updShopingCartAC(nextShoppingCartData));
			} else {
				dispatch(addToShoppingCartAC(product));
			}
		} else {
			dispatch(addToShoppingCartAC(product));
		}
		NotificationManager.info('Item added to cart successfully');
	}

	const handleIncreaseCount = () => {
		const newProduct = {...product, count: product.count + 1};
		setProduct(newProduct);
	}

	const handleDecreaseCount = () => {
		if(product.count > 1) {
			const newProduct = {...product, count: product.count - 1};
			setProduct(newProduct)
		}
	}

	return (
		<div className={stl.product_container}>	
			<Container>
				<Grid item xs={12} sm={12}>
					<div className={stl.breadcrumbs}>
						<BreadCrumbs currentPage={product.title}/>
					</div>
				</Grid>
			</Container>
			
			<div className={stl.card_info}>
				<Container>
					<Grid container>
						<Grid item xs={12} sm={7}>
							<div className={stl.card_img}>
								<img src={`/react_storefront_tz/static/media/${product.image}`} alt={product.title}/>
							</div>
						</Grid>
						<Grid item xs={12} sm={5}>
							<div className={stl.card_desc_wrap}>
								<div className={stl.card_desc}>
									<h3>{product.brand}</h3>
									<h1>{product.title}</h1>
									<span>${product.price}.00</span>
									<p>{product.description}</p>
								</div>

								<div className={stl.card_add_wrap}>
									<div className={stl.card_count}>
										<input type="text"
													 value={product.count}/>

										<div className={stl.count_btn}>
											<button type='button'
															onClick={handleIncreaseCount}>+</button>
											<button type='button'
															onClick={handleDecreaseCount}>-</button>
										</div>
									</div>

									<div className={stl.add_cart_btn}>
										<CustomButton btnName='Add to cart'																	
																	handleClick={() => handleAddToCart(product.id)}/>
									</div>
								</div>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>		
	);
};

export { Product };