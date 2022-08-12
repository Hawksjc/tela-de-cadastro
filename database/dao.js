const pool = require('./config')

let operations = {
    list: function() {
        return pool.promise().query('select * from produtos')
        
    },
    findById(id) {},
    save: function(produto) {},
    update: function(produto) {},
    remove: function(id){
        return pool.promise().execute("delete from produtos where id= ?" , [id]) 
    },
}

module.exports = operations

 