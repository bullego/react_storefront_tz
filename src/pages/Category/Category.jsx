import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//redux
import { fetchCardsTC, updShopingCartAC } from '../../redux/cards-reducer';
//routing
import { useHistory } from 'react-router-dom';
//components
import { Card } from '../../components/Card';
//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
//notification
import { NotificationManager } from 'react-notifications';
//custom styles
import cls from 'classnames';
import stl from './Category.module.css';

const useStyles = makeStyles((theme) => ({
	root_card: {
		flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
  },
}));

const Category = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const cardsData = useSelector(state => state.cards.cardsData);
	const shoppingCartData = useSelector(state => state.cards.shoppingCartData);
	const history = useHistory();

	useEffect(() => {
		dispatch(fetchCardsTC());
	}, [])
	
	const handleViewDetails = (card_id) => {
		history.push(`/product/${card_id}`);
	}

	const compareCallback = (card_id) => card => card.id === card_id;
	
	const handleAddToCart = (card_id) => {
		const currCard = cardsData.find(compareCallback(card_id));
		const prevCard = shoppingCartData.find(compareCallback(card_id));
		const nextCard = {...(prevCard || currCard)}; //prevCard ? prevCard : currCard
		let nextShoppingCart;

		if(prevCard) {
			nextCard.count += 1;
			//update item in shoppingCartData
			nextShoppingCart = shoppingCartData.map(item => (item.id === nextCard.id) ? nextCard : item);
		} else {
			nextCard.count = 1;
			//add new item to shoppingCartData
			nextShoppingCart = shoppingCartData.concat(nextCard);
		}

		dispatch(updShopingCartAC(nextShoppingCart));
		NotificationManager.info('Item added to cart successfully');
	}

  return (
		<div className={stl.category_container}>
			<Paper className={stl.main_content}>
				<Container>
					<Grid item xs={12} sm={12}>
						<div className={stl.main_title_wrap}>
							<Typography component='h1' color='inherit' gutterBottom>
								Plates
							</Typography>
							<Typography component='p' color='inherit'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero hic minima, earum neque vel asperiores laboriosam, esse possimus dolores nihil quisquam in at illum enim, nulla debitis a ipsa dolore saepe!
							</Typography>
						</div>
					</Grid>
				</Container>
			</Paper>

			<div className={cls(classes.root_card, stl.card_wrap)}>
				<Container>
					<Grid container spacing={3}>
						{cardsData.map(({image, brand, title, price, id}) => {
							return (
								<Grid item xs={12} sm={4} key={id}>
									<Paper className={cls(classes.paper, stl.card_item)}>
										<Card card_brand={brand}
													card_img={`media/${image}`}
													card_title={title}
													card_price={price}
													card_id={id}
													handleViewDetails={handleViewDetails}
													handleAddToCart={handleAddToCart}/>
									</Paper>
								</Grid>
							)
						})}
					</Grid>
				</Container>
			</div>
    </div>
  );
}

export { Category };