// server.js
const express = require('express')
	, app = express()
    , bodyParser = require('body-parser')
    , fs = require('fs')
    , prom = fs.promises
    , path = require('path')

const botao = "<br><br><button style='border-radius: 20px' onclick='history.back()'>Voltar à página inicial</button>";

app.use(express.static('build'));
app.get('/server/data', async function(req, res){
    const data = await prom.readFile(path.join(__dirname, 'data.json'), 'utf-8');
    res.send(data);
});

app.get('/register', function(req, res){
    var texto = "Cadastro realizado com sucesso.";
    var n = req.query.name;
        a = req.query.age;
    try{
        if(isNaN(a)) throw "<b>Erro</b>: Cadastro inválido.";
        else if(a < 18) throw "<b>Erro</b>: Usuário menor de idade.";
        else{
            var labels = '{ "nome": "'+n+'", "idade": '+a+' }';
            fs.writeFile("./server/data.json", labels, function(err, result) {
                if(err) console.log('erro', err);
            });
        }
    }
    catch(err){
        texto=err;
    }
    res.send(texto+botao);
});

app.listen(8000, () => console.log('Aplicação funcional'));

