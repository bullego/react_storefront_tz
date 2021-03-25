import React from 'react';
//components
import { CustomButton } from '../CustomButton';
//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//custom styles
import cls from 'classnames';
import stl from './Card.module.css';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
		height: '20vw',
    maxHeight: 240,
  },
});

const MediaCard = ({card_img,
                    card_brand,
                    card_title,
                    card_price,
                    card_id,
                    handleViewDetails,
                    handleAddToCart}) => {
  const classes = useStyles();
  
  return (
    <Card className={cls(classes.root, stl.card)}>
      <CardActionArea>
        <CardMedia
          className={cls(classes.media, stl.card_img)}
          image={`react_storefront_tz/static/${card_img}`}
          title={card_title}
        />
				<div className={stl.card_overlay}>
					<CustomButton btnName='View Details'
								      	handleClick={() => handleViewDetails(card_id)}/>
									
					<CustomButton btnName='Add to Cart'
								      	handleClick={() => handleAddToCart(card_id)}/>
				</div>

        <CardContent>
          <Typography color="textSecondary" component="h2">
            {card_brand}
          </Typography>
          <Typography component="p">
            {card_title}
          </Typography>
					<Typography color="textSecondary" component="p">
            ${card_price}.00
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export { MediaCard as Card }