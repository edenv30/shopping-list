var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var btnsDelete = document.getElementsByClassName("delete");

// function liClick(){
// 	this.classList.toggle("done");
// }

function liClick(e){
	e.currentTarget.classList.toggle("done");
}

function removeItem(e){
	// e.target.removeEventListener("click",removeItem,false);
	// e.target.parentNode.remove();
	e.currentTarget.parentNode.remove();
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeItem;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
	li.addEventListener("click",liClick);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// attach a "click" listener all the li elements
for(var i=0; i <list.length; i++) {
	list[i].addEventListener("click",liClick);
}

for (var i=0; i<btnsDelete.length; i++) {
	btnsDelete[i].addEventListener("click",removeItem,false);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);