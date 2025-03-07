module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users','userName',{
      type:Sequelize.STRING
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'userName');
  }
};