var todo = document.querySelector(".todo-sec");
var ul = document.querySelector(".todo-list");
var input = document.querySelector(".main-input");
var addBtn = document.querySelector(".add-btn");

var taskData = [{todoText: "JavaScript",
status: false}, {todoText: "CSS",
status: false},{todoText: "Drag and drop",
status: false},{todoText: "Mouse event",
status: false},{todoText: "Code refector",
status: false},{todoText: "Node",
status: false}
];

function tasks(){
	console.log("hello");
	var taskObject = {
		todoText: input.value,
		status: false
	}
	taskData.push(taskObject);
	input.value = "";
	displayTask(taskData);
} 
displayTask(taskData);
addBtn.addEventListener("click",tasks);

function displayTask(arr){
	ul.innerHTML = "";
	arr.forEach(val => {
		var li = document.createElement("li");
		li.classList.add("todoTask");
		// li.innerText = val.todoText;
		li.innerHTML = `<span>${val.todoText}</span> <span class="drag-txt">Drag me</span>`;
		ul.appendChild(li);
	});
}