"use strict";

var $ = function(id) { return document.getElementById(id); };

// To add notes to the localStorage
let addBtn = $("addBtn");
let notesObj = [];
addBtn.addEventListener("click", function (e) {
    let addTxt = $("addTxt");
    let notes = window.localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    window.localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});

// Function to show elements from localStorage
function showNotes() {
    let notes = window.localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    });
    let notesElm = $("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Use "Add Note" section above to add notes.`;
    }
}

// Function to delete a note
function deleteNote(index) {
    let notes = window.localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    window.localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Calling showNotes to show already added notes
showNotes();