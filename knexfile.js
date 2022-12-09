module.exports = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    //user: process.env.DB_LOCAL_USER,
    user: 'root',
    password:  'rootroot',
    database:  'capstone',
    charset: 'utf8'
  },
};