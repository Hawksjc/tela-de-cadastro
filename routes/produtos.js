var express = require('express');
var router = express.Router();
var dao = require('../database/dao')

router.get('/', function (request, response){
    dao.list().then( ([rows]) => {
        response.render('produtos/list', { produtos: rows})
    }).catch( err => {
        console.log(err)
        response.render('produtos/list', { produtos: [] })
    })
});

router.post('/delete', function (request, response){
    dao.remove(request.body.id)
    .then( ( [result] ) => {
        console.log(result)
        if (result.affectedRows > 0)
            request.flash('success', 'Produto excluido com sucesso.')
        else
            request.flash('success', `Não foi encontrado no banco aluno com id = ${request.body.id}`)
        response.redirect('/produtos')
    }).catch(err => {
        console.log(err)
        request.flash('error', 'Ocorreu um erro na exclusão do produto.')
        response.redirect('/produtos')
    })
});

router.get('/form', function (request, response){
    response.render('produtos/form')
});

router.post('/save', function(request, response) {
    dao.save(request.body)
    .then(([result]) => {
        request.flash('success', `Produto cadastrado com sucesso`)
        response.redirect('/produtos')
    }).catch(err => {
        console.log(err)
        request.flash('error', `Não foi possível cadastrar o produto`)
        response.redirect('/produtos')
    })
})

module.exports = router;