'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { // ADDING A TABLE CALLED USERNAME IN THE USERS MODEL //
    return queryInterface.renameColumn('users', 'userName', 'username', {
      type: Sequelize.STRING // THE KEYS IN THE NEW TABLE. // adding the (all lowercase) username makes it easier to run commands in psql
      }
    );
  },

  down: (queryInterface, Sequelize) => {
return queryInterface.removeColumn('users', 'userName', 'username')
  }
};