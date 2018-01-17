document.addEventListener('DOMContentLoaded', function() {
  console.log("Content Loaded")
  let pNotes = document.getElementById("notes");

  function showNotes(){
    fetch("http://localhost:3000/api/v1/notes")
    .then(res => res.json())
    .then(json => {return json.forEach(function(el){
       note = new Note(el["title"], el["body"], el["user"])
       let pNoteTag = document.createElement("p")
       pNoteTag.innerHTML = `${note.title}: ${note.body} -- by ${note.user["name"]}`;
       pNotes.append(pNoteTag);
    })})

  }

  showNotes();





})
