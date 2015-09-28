fearsLister.factory('FearsFactory', function FearsFactory(){
  var factory = {};
  factory.fears = [];
  factory.addFear = function(){
    factory.fears.push({name: factory.fearName, id: factory.fears.length + 1, people: []});
    factory.fearName = null;
  };
  return factory;
});