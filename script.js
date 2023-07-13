// elementos fijos
const inputText = document.querySelector('#input');
const botoninput = document.querySelector('.check-circle.input');
const list = document.querySelector('.task-list__list');
const clearCompleted = document.querySelector('.task-list__last-item.clear');
const all = document.querySelector('.manage-tasks__item.all');
const active = document.querySelector('.manage-tasks__item.activeSelector');
const completed = document.querySelector('.manage-tasks__item.completedSelector');
const itemsLeft = document.querySelector('.task-list__last-item.itemsLeft');
const moonIcon = document.querySelector('.header__moon');
const sunIcon = document.querySelector('.header__sun');
const bodyNocturno = document.querySelector('body');
const inputNocturno = document.querySelector('.header__input');
const taskListLastNocturno = document.querySelector('.task-list__last');
const manageTasksNocturno = document.querySelector('.task-list__manage-tasks');
const taskList = document.querySelector('#task-list');
const taskListBg = document.querySelector('.task-list__item1');
const backgroundElement = document.querySelector('.background');
var contador = 0;

// funciones secundarias

function modoNocturno(){
	moonIcon.classList.toggle('hidden');
	sunIcon.classList.toggle('hidden');
	inputText.classList.toggle('colorNocturnoElementos');
	inputNocturno.classList.toggle('colorNocturnoElementos');
	taskListBg.classList.toggle('colorNocturnoElementos');
	list.classList.toggle('colorNocturnoElementos');
	taskListLastNocturno.classList.toggle('colorNocturnoElementos');
	manageTasksNocturno.classList.toggle('colorNocturnoElementos');
	bodyNocturno.classList.toggle('colorNocturnoBody');
	botoninput.classList.toggle('colorNocturnoElementos');
	taskList.style.backgroundColor = "hsl(235, 24%, 19%)";
	backgroundElement.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
}

function modoLuz(){
	moonIcon.classList.toggle('hidden');
	sunIcon.classList.toggle('hidden');
	inputText.classList.toggle('colorNocturnoElementos');
	inputNocturno.classList.toggle('colorNocturnoElementos');
	taskListBg.classList.toggle('colorNocturnoElementos');
	list.classList.toggle('colorNocturnoElementos');
	taskListLastNocturno.classList.toggle('colorNocturnoElementos');
	manageTasksNocturno.classList.toggle('colorNocturnoElementos');
	bodyNocturno.classList.toggle('colorNocturnoBody');
	taskList.style.backgroundColor = "#FFFFFF";
	botoninput.style.backgroundColor = "#FFFFFF";
	backgroundElement.style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
}

moonIcon.addEventListener('click', modoNocturno);
sunIcon.addEventListener('click', modoLuz);

function incrementarContador() {
	contador++;
}

function decrementarContador() {
	contador--;
}

function createLi() {
  const li = document.createElement('li');
  li.id = 'task';
  li.className = 'task';
  li.classList.toggle('active');
  incrementarContador();
  return li;
}

function createDiv() {
  const div = document.createElement('div');
  div.id = 'task-content-container';
  return div;
}

function createP() {
  const textValue = inputText.value;
  const p = document.createElement('p');
  p.id = 'textValue';
  p.textContent = textValue;
  p.classList.toggle('active');
  return p;
}

function createCross() {
  const removeCross = document.createElement('img');
  removeCross.src = "./images/icon-cross.svg";
  removeCross.alt = "remove cross";
  removeCross.className = "remove-cross";
  return removeCross;
}

function createCheckCircle() {
  const checkCircle = document.createElement('img');
  checkCircle.src = "./images/icon-check.svg";
  checkCircle.alt = "circle to check";
  checkCircle.className = "checkCircle-unchecked";
  return checkCircle;
}

function removeTask() {
  let liToRemove = this.parentNode.parentNode;
  liToRemove.parentNode.removeChild(liToRemove);
  decrementarContador();
  itemsLeft.textContent = `${contador} items left`;
}

function toggleTask() {
  let pToToggle = this.parentNode.querySelector('p');
  pToToggle.classList.toggle('tachado');
  pToToggle.classList.toggle('active');
  let litoToggle = this.parentNode.parentNode; 
  litoToggle.classList.toggle('completed');
  litoToggle.classList.toggle('active');
}

// funciones principales
function agregarTarea() {
  const li = createLi();
  const div = createDiv();
  const p = createP();
  const removeCross = createCross();
  const checkCircle = createCheckCircle();

  div.appendChild(checkCircle);
  div.appendChild(p);
  div.appendChild(removeCross);
  li.appendChild(div);
  list.appendChild(li);

  itemsLeft.textContent = `${contador} items left`

  inputText.value = "";

  removeCross.addEventListener("click", removeTask);
  checkCircle.addEventListener("click", toggleTask);
}

function clearCompletedTasks() {
  const elementosTachados = document.querySelectorAll('.tachado');
  elementosTachados.forEach(function(elemento) {
    const liPadre = elemento.closest('li');
    liPadre.remove();
    decrementarContador();
    itemsLeft.textContent = `${contador} items left`;
  });
}

function showCompleted() {
  const activeElements = document.querySelectorAll('.active');
  Array.from(activeElements).forEach(function(element) {
    element.classList.toggle('hidden');
  });
}

function showActive() {
  const completedElements = document.querySelectorAll('.completed');
  Array.from(completedElements).forEach(function(element) {
    element.classList.toggle('hidden');
  });
}

function showAll() {
  const allElements = document.querySelectorAll('.task');
  Array.from(allElements).forEach(function(element) {
    element.classList.remove('hidden');
    const pchilds = element.querySelectorAll('p');
    Array.from(pchilds).forEach(function(pchild) {
      pchild.classList.remove('hidden');
    });
  });
}
// event listeners
botoninput.addEventListener('click', agregarTarea);
clearCompleted.addEventListener('click', clearCompletedTasks);
completed.addEventListener('click', showCompleted);
active.addEventListener('click', showActive);
all.addEventListener('click', showAll);