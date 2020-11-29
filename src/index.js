// Importando pacotes necessários
import React from 'react';
import { render } from 'react-dom';
import Header from './header';
import Form from './form';
import Table from './table';
import './styles.css';

// Exibindo elementos/componentes do React na página inicial
render([
	<Header />, 
	<Form />,
	<Table />
	], document.getElementById('root'));
//render(<Form />, document.getElementById('root'));