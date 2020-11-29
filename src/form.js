import React from 'react';

// Definindo o componente Formulário
const Form = () => {
  return (
  	<form action='register' style={{
  			position: 'relative',
  			left: '7.5%',
  			textAlign: 'center',
  			border: '1.5px solid green',
  			borderRadius: '10px',
  			backgroundColor: 'lightgreen',
  			width: '35%',
  			padding: '10px',
  			height: '80px'
  		}} method='get' encType="multipart/form-data">
	  	Cadastro simplificado<br/><br/>
		<label for="name"> Insira seu nome:</label> <input name="name"/> <br/>
		<label for="age"> Insira sua idade:</label> <input name="age"/> <br/>
		<button style={{
			position: 'relative',
			right: '-42%',
			bottom: '15%'
		}} type='submit'>Cadastrar</button>
	</form>
  );
};

export default Form;