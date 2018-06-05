var connection = require('./connection.js');

var orm = {

  //Per homework, selectAll template code, fix later, assuming it's select the database
  selectAll: function(cb) {
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, [cb], function(err, result) {
      if (err) throw err;
      cd(result);
      //console.log(result);
    });
  },

  //Per homework, insertOne template code, fix later, "using burger specific input??
  insertOne: function(burger_name, cb) {
    var queryString = 'INSERT INTO burgers SET ?';
    connection.query(queryString, [burger_name, cb], {
      burger_name: burger_name,
      devoured: false,
    }, 
    function(err, result) {
      if (err) throw err;
      cd(result);
      //console.log(result);
    });
  },
  
  //Per homework, updateOne template code, fix later, "using burger specific input??
  updateOne: function(id, cb) {
    var queryString = 'UPDATE burgers SET ? WHERE ?';
    connection.query(queryString, [{devoured: true}, {id: id}], function(err, result) {
      if (err) throw err;
      cd(result);
      //console.log(result);
    });
  },
  
};

module.exports = orm;
