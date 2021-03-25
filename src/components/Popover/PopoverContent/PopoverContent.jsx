import React from 'react';
//material-ui
import ClearIcon from '@material-ui/icons/Clear';
//custom styles
import stl from './PopoverContent.module.css';

const PopoverContent = ({img,
												 card_title,
												 card_count,
												 card_brand,
												 card_price,
												 card_id,
												 handleDeleteCard}) => {
	return (
		<div className={stl.popover_content}>
			<div className={stl.content_img_wrap}>
				<img src={img} alt={card_title}/>
			</div>
			<div className={stl.content_info_wrap}>
				<h3 className={stl.info_title}>{card_title}</h3>
				<p className={stl.info_count}>x <span>{card_count}</span></p>
				<h4 className={stl.info_brand}>{card_brand}</h4>
				<p className={stl.info_price}>${card_count ? card_count * card_price : card_price}.00</p>

				<button className={stl.info_delete}
								onClick={() => handleDeleteCard(card_id)}>
					<ClearIcon/>
				</button>
			</div>
		</div>
	);
};

export { PopoverContent };