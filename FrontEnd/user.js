const User = function(){

  let id = 0;

  return class User {
    constructor(name){
      this.id = ++id
      this.name = name
    }
  }
}();
