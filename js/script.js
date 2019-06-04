/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Developer: Anton Serdyuchenko anton415@gmail.com
******************************************/

// Variable to store the student list item elements in the student list.
var studentListItem = document.querySelectorAll("li");

// Variable to store the number of items to show on each "page".
var numberOfItemsOnPage = 10;

// Function show page with some number of students.
function showPage(list, page) {
	for(let i=0; i<studentListItem.length; i++){
		studentListItem[i].style.display = "none";
	}
	
	let startIndex = (page * numberOfItemsOnPage) - numberOfItemsOnPage;
	let endIndex = page * numberOfItemsOnPage;
	
	for(let i = 0; i < list.length; i++) {
		if(i >= startIndex && i < endIndex) {
			list[i].style.display = '';
		}
	}
}

// Create the pagination buttons.
function appendPageLinks(list) {

	
	let listOfA = [];
	/*
		A container DIV element with a class name of "pagination", and
		appended to the div element with the class name of page.
	*/
	const div = document.createElement("div");
	div.className = "pagination";
	document.querySelector("div").appendChild(div);
	/*
		A nested UL element containing one LI element for every ten
		students in the list.
	*/
	const ul = document.createElement("ul");
	div.appendChild(ul);
	/*
		Each LI element should contain an A element.
	*/
	for(let i = 0; i < (list.length / 10); i++) {
		let li = document.createElement("li");
		let a = document.createElement("a");
		a.href = "#" + (i+1);
		a.innerHTML = (i+1);
		li.appendChild(a);
		ul.appendChild(li);
		listOfA.push(a);
		
		/*
			Active class name to the first pagination.
		*/
		if(i==0) {
			a.className="active";
			for(let i=0; i<studentListItem.length; i++){
				studentListItem[i].style.display = "none";
			}
			for(let i=0; i<studentListItem.length && i<10; i++){
				studentListItem[i].style.display = "";
			}
		}
		
		/*
			"click" event listener to each A element.
		*/
		a.addEventListener("click", (e) => {
			for(let j = 0; j < listOfA.length; j++) {
				// Remove active class from all links.
				listOfA[j].className = "";
			}
			// Add active class to link that was just clicked.
			e.target.className = "active";
			// The function to show page should be called.
			showPage(studentListItem, e.target.innerHTML);
			
		});
		
	}
	
}



appendPageLinks(studentListItem);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
