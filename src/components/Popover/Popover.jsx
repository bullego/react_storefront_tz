import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//redux
import { deleteFromShoppingCartAC } from '../../redux/cards-reducer';
//routing
import { useHistory } from 'react-router-dom';
//components
import { PopoverContent } from './PopoverContent';
import { CustomButton } from '../CustomButton';
//material-ui
import Popover from '@material-ui/core/Popover';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//custom styles
import stl from './Popover.module.css';

const SimplePopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
	const history = useHistory();
	const dispatch = useDispatch();
	const shoppingCartData = useSelector(state => state.cards.shoppingCartData);
	const itemsInCart = shoppingCartData.length;
	const totalPrice = shoppingCartData.reduce((total, current) => total + (current.price * current.count), 0);

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

	const handleViewCartClick = () => {
		history.push('/cart');
	}
	const handleCheckoutClick = () => {console.log('checkout')}

	const handleDeleteCard = (card_id) => {
		const index = shoppingCartData.findIndex(item => item.id === card_id);

		const newShoppingCartData = [
			...shoppingCartData.slice(0, index),
			...shoppingCartData.slice(index+1),
		]

		dispatch(deleteFromShoppingCartAC(newShoppingCartData));
	}

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
	
  return (
    <div className={stl.popover_container}>
			<Button className={stl.popover_btn}
							onClick={handleCartClick}
							aria-describedby={id}>
				My cart ({itemsInCart})<ArrowDropDownIcon/>
			</Button>

      <Popover
				className={stl.popover}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box className={stl.popover_content_wrap}>
					{shoppingCartData.length 
						? 
							shoppingCartData.map(item => {
								return (
									<PopoverContent img={`/media/${item.image}`}
																	card_price={item.price}
																	card_title={item.title}
																	card_brand={item.brand}
																	card_count={item.count}
																	card_id={item.id}
																	handleDeleteCard={handleDeleteCard}/>
								)
							})
						: 
							<p style={{color: 'rgb(170, 142, 113)', fontWeight: '700'}}>Add items to the shopping cart</p>
					}

					<div className={stl.popover_footer}>
						<div className={stl.footer_total_price}>
							<p>Total</p>
							<p>${totalPrice}.00</p>
						</div>

						<div className={stl.footer_btn_wrap}>
							<CustomButton btnName='View Cart'
														handleClick={handleViewCartClick}
														isDisabled={!itemsInCart}/>
											
							<CustomButton btnName='Checkout'
														handleClick={handleCheckoutClick}
														isDisabled={!itemsInCart}/>
						</div>
					</div>
				</Box>
      </Popover>
    </div>
  );
}

export { SimplePopover as Popover }