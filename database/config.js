const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '@Niko2021',
  database: 'cadastro_Produtos',
  waitForConnections: true,
  connectionLimit: 15,
  queueLimit: 0
});

module.exports = pool