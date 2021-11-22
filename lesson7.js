
let button = document.getElementById('button');
let ul = document.getElementById('list');
let input = document.getElementById('input');

button.addEventListener('click', addListItem);
ul.addEventListener('click', changeList);

function createListItem() {
  let li = document.createElement("li");
  li.innerText = input.value;
  li.className = "li-yellow";
  let button = document.createElement("button");
  button.innerText = "Удалить";
  ul.append(li);
  li.append(button);
}

function addListItem() {
  if (!input.value) {
    return input.value;
  } else {
    createListItem();
    input.value = '';
  }
}

function changeColor(e) {
  e.classList.toggle("li-green");
  e.classList.toggle("li-yellow");
}

function changeList(e) {
  let target = e.target;
  if(target.tagName === "BUTTON"){
    target.closest("li").remove();
   } else if (target.tagName === "LI") {
    changeColor(target);
   } else
   console.log("error");
    }

