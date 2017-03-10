module.exports = {
  myAge: 100,
  getAge: function(){
    return this.myAge;
  },
  greet: function(name) {
    console.log("Hello %s, you're %s years old.", name, module.exports.getAge());
  }
};
