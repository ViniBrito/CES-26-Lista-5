import React from 'react';


var clicked=false;

function trigger(){
	if(!clicked){
		clicked=true;
		var b = document.getElementById('show');
		b.innerHTML = "Ocultar informações cadastradas";
		var x = document.getElementById('data');
		var y = document.createElement('table');
		var r1 = document.createElement('tr');
		var h1 = document.createElement('th');
		var h2 = document.createElement('th');
		var r2 = document.createElement('tr');
		var d1 = document.createElement('td');
		var d2 = document.createElement('td');
		h1.innerHTML = "Nome";
		h2.innerHTML = "Idade";
		r1.appendChild(h1);
		r1.appendChild(h2);
		r2.appendChild(d1);
		r2.appendChild(d2);
		y.appendChild(r1);
		y.appendChild(r2);
		y.setAttribute("id", "info");
		x.appendChild(y);
	}
	else{
		clicked=false;
		var b = document.getElementById('show');
		b.innerHTML = "Exibir informações cadastradas";
		var x = document.getElementById('data');
		x.removeChild(document.getElementById('info'));
	}
}

const Table = () => {
  return (
  		<div id="data" style={{
  			textAlign: 'center',
  			width: '50%',
  			padding: '5px'
  		}}>
	      <button id="show" onClick={trigger}>Exibir informações cadastradas</button>
	    </div>
  );
};

export default Table;