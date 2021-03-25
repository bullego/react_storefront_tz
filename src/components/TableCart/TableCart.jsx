import React from 'react';
//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//custom styles
import cls from 'classnames';
import stl from './TableCart.module.css';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

const DenseTable = ({shoppingCartData,
										 handleDeleteCard,
										 handleIncreaseCount,
										 handleDecreaseCount}) => {
	const classes = useStyles();

  return (
    <TableContainer component={Paper} className={stl.table_wrap}>
      <Table className={cls(classes.table, stl.table)} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

					{shoppingCartData.length
						?
							shoppingCartData.map(item => {
								return (
									<TableRow key={item.id}>
										<TableCell component="th" scope="row">
											<div className={stl.cell_header}>
												<div className={stl.cell_header_img_wrap}>
													<img src={`react_storefront_tz/static/media/${item.image}`}
															 alt={item.title}/>
												</div>

												<div className={stl.cell_header_info}>
													<h4>{item.brand}</h4>
													<h3>{item.title}</h3>
													<p>Color: <span>White</span></p>
												</div>
											</div>
										</TableCell>
										<TableCell align="right">
											<div className={stl.cart_count}>
												<input type="text"
															value={item.count}/>

												<div className={stl.count_btn}>
													<button type='button'
																	onClick={() => handleIncreaseCount(item.id)}>+</button>
													<button type='button'
																	onClick={() => handleDecreaseCount(item.id)}>-</button>
												</div>
											</div>
										</TableCell>
										<TableCell align="right">
											<p className={stl.cart_price}>
												${item.price * item.count}.00
											</p>
										</TableCell>
										<TableCell align="right">
											<button className={stl.cart_delete_btn}
															onClick={() => handleDeleteCard(item.id)}>
												<span></span>
												<span></span>
											</button>						
										</TableCell>
									</TableRow>
								)
							})
						:
							<TableRow>
								<TableCell component="th" scope="row" style={{color: 'rgb(170, 142, 113)'}}>
									<p>Add items to the shopping cart</p>
								</TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
							</TableRow>
					}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { DenseTable as TableCart };