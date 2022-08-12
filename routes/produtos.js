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
    .then( ([rows]) => {
        response.redirect('/produtos')
    }).catch(err => {
        console.log(err)
        response.redirect('/produtos')
    })
});

router.get('/form', function (request, response){
    response.render('produtos/form')
});

module.exports = router;