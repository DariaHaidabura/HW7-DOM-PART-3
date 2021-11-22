
let button = document.getElementById('button');
let ul = document.getElementById('list');
var input = document.getElementById('input');

function addListItem() {
  const li = createListItem(input.value);
  ul.append(li);
  input.value = '';
}

function createListItem(value) {
  const li = document.createElement("li");
  li.innerText = value;
  const button = createRemoveButton();
  li.append(button)
  li.addEventListener("click", changeColor)
  return li;
}

function createRemoveButton() {
  const button = document.createElement("button")
  button.innerText = "Удалить";
  button.addEventListener("click", removeItem)
  return button;
}

button.addEventListener("click", addListItem);

function changeColor(e) {
  e.target.classList.toggle("li-green")
}

function removeItem(e) {
  e.target.parentElement.remove()
}
