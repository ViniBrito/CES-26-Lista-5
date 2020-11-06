import React from 'react';
import { render } from 'react-dom';
import Header from './header';
import Form from './form';
import Table from './table';
import './styles.css';

render([
	<Header />, 
	<Form />,
	<Table />
	], document.getElementById('root'));
//render(<Form />, document.getElementById('root'));