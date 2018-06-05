var connection = require('./connection.js');

var orm = {

  //Per homework, selectAll template code, fix later, assuming it's select the database
  selectAll: function(cb) {
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, [cb], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  //Per homework, insertOne template code, fix later, "using burger specific input??
  insertOne: function(**property**, cb) {
    var queryString = '**comand here**';
    connection.query(queryString, [**property**, cb], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  
  //Per homework, updateOne template code, fix later, "using burger specific input??
  updateOne: function(**property**, cb) {
    var queryString = '**comand here**';
    connection.query(queryString, [**property**, cb], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  
};

module.exports = orm;
