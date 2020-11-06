// server.js
const express = require('express')
	, app = express()
    , bodyParser = require('body-parser')

const botao = "<br><br><button style='border-radius: 20px' onclick='history.back()'>Voltar à página inicial</button>";

app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/calculate', function(req, res){
    var texto = "<h1>Resultado da avaliação</h1>\nSeu IMC é ";
    var h = req.query.height/100;
        w = req.query.weight;
        i = w/h**2;
    texto+=parseFloat(i).toFixed(2)+" e você está oficialmente ";
    if(i < 18.5) texto+="<b style='color: red'>magro</b>";
    else if(i < 25.0) texto+="<b style='color: grey'>normal</b>"
    else if(i < 30.0) texto+="<b style='color: orange'>com sobrepeso</b>"
    else if(i < 40.0) texto+="<b style='color: red'>obeso</b>"
    else texto+="<b style='color: #C10606'>gravemente obeso</b>"
    res.send(texto+botao);
});

app.listen(8000, () => console.log('Aplicação funcional'));

