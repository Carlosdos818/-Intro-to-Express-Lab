const dog = [
    {dog: 'goes out to potty', done: true},
    {dog: 'drinks water', done: false},
    {dog: 'eats food', done: false}
  ];

  module.exports = {
    getAll: function() {
        return dog;
    }
  };