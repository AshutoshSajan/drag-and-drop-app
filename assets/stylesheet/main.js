var todo = document.querySelector(".todo-sec");
var ul = document.querySelector(".todo-list");
var input = document.querySelector(".main-input");
var addBtn = document.querySelector(".add-btn");
var dragElmData = null;
// ===========================================================
// main array function
// ===========================================================
var taskData = [{todoText: "JavaScript",
status: false}, {todoText: "CSS",
status: false},{todoText: "Drag and drop",
status: false},{todoText: "Mouse event",
status: false},{todoText: "Code refector",
status: false},{todoText: "Node",
status: false}
];

// ===========================================================
// object cretion and pushing it into an array function
// ===========================================================
function tasks(){
	if(input.value.trim()){
		var taskObject = {
			todoText: input.value,
			status: false
		}
		taskData.push(taskObject);
		input.value = "";
		displayTask(taskData);
	}
} 
displayTask(taskData);

// ===========================================================
// enter click function
// ===========================================================
addBtn.addEventListener("click",tasks);
function enterClk(e){
	if (e.keyCode === 13) {
		tasks();
	}
}
input.addEventListener("keydown", enterClk);

// ===========================================================
// handleDragStart function ******all DnD functions
// ===========================================================
function	handleDragStart(e){
	e.target.style.opacity = '0.5';
	
  dragElmData = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
}

// ===========================================================
// handleDragEnter function
// ===========================================================
function	handleDragEnter(e){
	e.target.classList.add("over");
}

// ===========================================================
// handleDragOver function
// ===========================================================
function handleDragLeave(e) {
  e.stopPropagation();
  e.target.classList.remove('over');
}
// ===========================================================
// handleDragOver function
// ===========================================================
function	handleDragOver(e){
	if (e.preventDefault) {
    e.preventDefault();
  }
  
  e.dataTransfer.dropEffect = 'move';
  return false;
}

// ===========================================================
// handleDrop function
// ===========================================================
function	handleDrop(e){
  if (dragElmData != e.target) {
    dragElmData.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
  }
  e.target.style.opacity = '1';
  return false;
}

// ===========================================================
// handleDragEnd function
// ===========================================================
function	handleDragEnd(e){
	var elm = document.querySelectorAll("ul li");
	elm.forEach(val => val.classList.remove("over"));
	e.target.style.opacity = '1';
}

// ===========================================================
// display function
// ===========================================================
function displayTask(arr){
	ul.innerHTML = "";
	arr.forEach((val, index) => {
		var li = document.createElement("li");
		li.addEventListener('dragstart', handleDragStart, false);
		li.addEventListener('dragenter', handleDragEnter, false)
		li.addEventListener('dragover', handleDragLeave, false);
		li.addEventListener('dragover', handleDragOver, false);
		li.addEventListener('drop', handleDrop, false);
		li.addEventListener('dragend', handleDragEnd, false);

		li.classList.add("todoTask");
		li.setAttribute('draggable', true);
		li.setAttribute("data-id", index);
		li.innerHTML = `<span>${val.todoText}</span> <span class="drag-txt">Drag me</span>`;
		
		ul.appendChild(li);
	});
}