const connection = require('./connection');

const getAll = async () => {
  connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
};

module.exports = { getAll };
