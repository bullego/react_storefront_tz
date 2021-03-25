import React from 'react';
import ReactDOM from 'react-dom';
//redux
import store from './redux/store';
import { Provider } from 'react-redux';
//routing
import { BrowserRouter } from 'react-router-dom';
//components
import { App } from './App';
//styles
import 'normalize.css';
import './index.css';

const MainApp = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	)
}

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);