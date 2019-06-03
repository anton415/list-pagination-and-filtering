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
	let startIndex = (page * numberOfItemsOnPage) - numberOfItemsOnPage;
	let endIndex = page * numberOfItemsOnPage;

	for(let i = 0; i < list.length; i++) {
		if(i >= startIndex && i < endIndex) {
			list[i].style.display = '';
		}
	}
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
