import React from 'react';
//routing
import { Link } from 'react-router-dom';
//component
import { Popover } from '../Popover';
//material-ui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//custom styles
import stl from './MenuHeader.module.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
		backgroundColor: '#ffffff'
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='transparent'>
				<Toolbar className={stl.menu_bar}>
					<Link className={stl.menu_logo_link}
								to='/'>
						<img className={stl.menu_logo_img} src='/media/logo.png' alt="storefront logo"/>
					</Link>
          
          <Box component="div" className={stl.menu_btn_wrap}>
						<Button>Home</Button>
						<Button>Shop<ArrowDropDownIcon/></Button>
						<Button>Journal</Button>
						<Button>More<ArrowDropDownIcon/></Button>
					</Box>
          
					<Popover/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { ButtonAppBar as MenuHeader }