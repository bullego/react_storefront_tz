import React from 'react';
import {useHistory} from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton';
import stl from './NotFound.module.css';

const NotFound = () => {
	const history = useHistory();
	
	const handleClick = () => {
		history.push('/');
	}
	
	return (
		<div className={stl.notfound_page}>
			<p>404Error: Page Not Found</p>

			<CustomButton btnName='Back to Category'
										handleClick={handleClick}/>
		</div>
	)
}

export { NotFound };