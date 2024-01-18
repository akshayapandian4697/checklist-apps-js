"use strict";

var $ = function(id) { return document.querySelector(id); };

const addForm = $('.add');
const list = $('.todos');
const search = $('.search input');

var generateTemplate = todo => {
    const html = 
    ` <li class="list-group-item list-hover d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>`;
    list.innerHTML += html;
}

addForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const todo = addForm.add.value.trim();
  //console.log(todo);
  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }
});

//delete todos
list.addEventListener('click', evt => {
   if(evt.target.classList.contains('delete')){
       evt.target.parentElement.remove();
   }
});