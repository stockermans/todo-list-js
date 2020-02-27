
function toDoLiEvent(currentLi){

	currentLi.addEventListener('click', (evt)=>{
		
		evt.target.classList.toggle("li-completed");
	
	});

}

function toDoDeleteEvent(currentSpan){

	currentSpan.addEventListener('click', ( evt )=>{

		var toFadeAndRm = evt.target.parentElement;
		if (evt.target.parentElement.tagName === "SPAN"){
			toFadeAndRm = evt.target.parentElement.parentElement;
		}

		$(toFadeAndRm).fadeOut( () => {
			toFadeAndRm.remove();
		});

		evt.stopPropagation();
	
	});
}

function prependChild(newElement, parentElement) {

	var firstchild = parentElement.childNodes[0];
	parentElement.insertBefore(newElement, firstchild);

}

var toDoLis = document.querySelectorAll("#container ul li");

for (var i=0; i < toDoLis.length; i++){
	toDoLiEvent(toDoLis[i]);
}

var toDoSpans = document.querySelectorAll("#container ul li span");

for (var i=0; i < toDoSpans.length; i++){
	
	toDoDeleteEvent(toDoSpans[i]);

}

var addNewInput = document.querySelector("#container input");
var containerUl = document.querySelector("#container ul");

addNewInput.addEventListener("keypress",(evt)=>{


	if (evt.which === 13){
		var newLi = document.createElement("li");
		var newSpan = document.createElement("span");
		newSpan.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
		newLi.innerHTML = " " + addNewInput.value;
		prependChild(newSpan,newLi);
		containerUl.appendChild(newLi);
		addNewInput.value = "";
		toDoLiEvent(newLi);
		toDoDeleteEvent(newSpan);

	}

});

var openFormBtm = document.querySelector("#openForm");

openFormBtm.addEventListener("click",()=>{

	addNewInput.classList.toggle("hide");

});