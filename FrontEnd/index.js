document.addEventListener('DOMContentLoaded', function() {
  console.log("Content Loaded")
  document.getElementById("new-note-form").style.display="block";
  let divAllNotes = document.getElementById("all-notes")

// Fetched and created all notes
  function loadNotes(){
    divAllNotes.innerHTML = ''
    fetch("http://localhost:3000/api/v1/notes")
    .then(res => res.json())
    // .then(json => {json.forEach(json => new Note(json))})
    .then(json => {return json.forEach(function(el){
       note = new Note(el)
       let pNoteTag = document.createElement("p")
       pNoteTag.id = note.id
       pNoteTag.innerHTML = `${note.title}`;
       divAllNotes.append(pNoteTag);
     })})

  }
  loadNotes();
  console.log("index.js test", Note.all)


  // Create a new note
  createNote = document.getElementById("new-note")
  createNote.addEventListener("click", function(e){
    e.preventDefault();
    let main = document.getElementById("main-display")
    // main.innerHTML = ``

    // try doing this by class and use [0] to get teh first element in the html array
    document.getElementById("new-note-form").style.display="block";
  })

  submitNewNote = document.getElementById("new-note-form")
  submitNewNote.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e)
    debugger

    let newTitle = document.getElementById("new-note-form").getElementsByTagName("input")[0].value
    let newBody = document.getElementById("new-note-form").getElementsByTagName("input")[1].value

    fetch("http://localhost:3000/api/v1/notes",{
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          Accept: "application/json"},
        body: JSON.stringify({
          title: newTitle,
          body: newBody
        })
      }).then(res => res.json())
      .then(res => {let note =  new Note(res["title"], res["body"], res["user"]);
      let pNoteTag = document.createElement("p");
      pNoteTag.id = `${note.id}`
      pNoteTag.innerHTML = `${note.title}`;
      divAllNotes.append(pNoteTag);

  })
  // document.getElementById("new-note-form").style.display="none";
})


  divAllNotes.addEventListener("click", function(e){
    // document.getElementById("new-note-form").style.display="block";
    let selectedP = document.getElementById(e.target.id)
    let id = parseInt(selectedP.id)
    let note = Note.all.find((note) => {
      return note.id === id
    })

    let title = note.title;
    let body = note.body;
    document.getElementById("update-note-form").getElementsByTagName("input")[0].value = title;
    document.getElementById("update-note-form").getElementsByTagName("input")[1].value = body;

    // let main = document.getElementById("main-display")
    // main.innerHTML = ``
    // noteDiv = document.createElement("div")
    // titleH3 = document.createElement("h3")
    // bodyP = document.createElement("p")
    // titleH3.innerHTML = `${title}`
    // bodyP.innerHTML = `${body}`
    // noteDiv.append(titleH3)
    // noteDiv.append(bodyP)
    // main.append(noteDiv)



    updateNote = document.getElementById("update-note-form")
    updateNote.addEventListener("submit", handleUpdate(event))


  })




  // editing a note

  updateNote = document.getElementById("update-note-form")
  function handleUpdate(e){
    e.preventDefault();
    console.log("hello")


    // fetch(`http://localhost:3000/api/v1/notes/`,{
    //     method: "PATCH",
    //     headers: {
    //       'Content-Type': "application/json",
    //       Accept: "application/json"},
    //     body: JSON.stringify({
    //       title: newTitle,
    //       body: newBody
    //     })
    //   }).then(res => res.json())
    //   .then(res => {let note =  new Note(res["title"], res["body"], res["user"]);
    //   let pNoteTag = document.createElement("p");
    //   pNoteTag.id = `${note.id}`
    //   pNoteTag.innerHTML = `${note.title}`;
    //   divAllNotes.append(pNoteTag);

  }






})
