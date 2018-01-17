
const Note = function(){

  return class Note {
    constructor(note){
      this.title = note.title
      this.body = note.body
      this.user = note.user
      this.id = note.id
      Note.all.push(this);
    }
  }
}();

Note.all = [];
