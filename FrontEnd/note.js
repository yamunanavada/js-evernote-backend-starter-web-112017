const Note = function(){

  let id = 0;

  return class Note {
    constructor(title, body, user){
      this.id = ++id
      this.title = title
      this.body = body
      this.user = user
    }
  }
}();
