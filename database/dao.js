const pool = require('./config')

let operations = {
    list: function() {
        return pool.promise().query('select * from produtos')
        
    },
    findById(id) {},
    save: function(produto) {
        return pool.promise().execute('INSERT INTO produtos (nome, categoria, preco_compra, preco_venda, dtValidade) VALUES (?, ?, ?, ?, ?)', [produto.nome, produto.categoria, produto.preco_compra, produto.preco_venda, produto.dtValidade])
    },
    update: function(produto) {},
    remove: function(id){
        return pool.promise().execute("delete from produtos where id= ?" , [id]) 
    },
}

module.exports = operations

 