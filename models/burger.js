var orm = require("../config/orm.js");

var burger = {

  selectAll: function(cb) {
    orm.selectAll('burger', function(res) {
      cb(res);
    });
  },

  //Per homework, fix later, "using burger specific input?? for the ORM"
  create: function(**propery, cb) {
    orm.insertOne('burger', **property**, function(res) {
      cb(res);
    });
  },

  //Per homework, fix later, "using burger specific input?? for the ORM"
  update: function(**property**, cb) {
    orm.updateOne('burger', **property**, function(res) {
      cb(res);
    });
  },
  
};

//Export the database functions for the controller (burger.js).
module.exports = burger;
