/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Developer: Anton Serdyuchenko anton415@gmail.com
******************************************/

/**
 * Variable to store the student list item elements in the student list.
 */
const studentListItem = document.querySelectorAll('li');

/**
 * Variable to store the number of items to show on each "page".
 */
const NUMBER_OF_ITEMS_ON_PAGE = 10;

/**
 * Hide all students.
 */
function hideAllStudens(listOfAllStudents) {
	for(let i=0; i < listOfAllStudents.length; i++){
		listOfAllStudents[i].style.display = 'none';
	}
}

/**
 * Get start index.
 */
function getStartIndex(pageNumber) {
	return (pageNumber * NUMBER_OF_ITEMS_ON_PAGE) - NUMBER_OF_ITEMS_ON_PAGE;
}

/**
 * Get end index.
 */
function getEndIndex(pageNumber) {
	return pageNumber * NUMBER_OF_ITEMS_ON_PAGE;
}

/**
 * Display students.
 */
function displayStudents(listOfStudents, startIndex, endIndex) {
	for(let i = 0; i < listOfStudents.length; i++) {
		if(i >= startIndex && i < endIndex) {
			listOfStudents[i].style.display = '';
		}
	}
}

/**
 * Function show page with some number of students.
 */
function showPage(list, page) {
	hideAllStudens(list);

	const startIndex = getStartIndex(page);
	const endIndex = getEndIndex(page);

	displayStudents(list, startIndex, endIndex);
}

/**
 * Create element and append to parent.
 */
function createAndAppendElement(newElement, parent) {
	const element = document.createElement(newElement);
	parent.appendChild(element);
	return element;
}

/**
 * Create list of pagination buttons with links (a elements).
 */
function fillListOfPagginationButtons(linkElement, listOfPaginationButtons, index) {
	linkElement.href = '#' + (index+1);
	linkElement.innerHTML = (index+1);
	listOfPaginationButtons.push(linkElement);
}

/**
 * Active class name to pagination element.
 */
function activeClassNameOfPaginationElement(linkElement, studentListItem) {
	linkElement.className='active';
	hideAllStudens(studentListItem);
	for(let i=0; i < studentListItem.length && i < NUMBER_OF_ITEMS_ON_PAGE; i++) {
		studentListItem[i].style.display = "";
	}
}

/**
 * Add event listener to link element.
 */
function addEventListenerToLinkElement(linkElement, listOfPaginationButtons) {
	linkElement.addEventListener("click", (e) => {
		for(let j = 0; j < listOfPaginationButtons.length; j++) {
			// Remove active class from all links.
			listOfPaginationButtons[j].className = "";
		}
		// Add active class to link that was just clicked.
		e.target.className = "active";
		// The function to show page should be called.
		showPage(studentListItem, e.target.innerHTML);
	});
}


/**
 * Create the pagination buttons.
 */
function appendPageLinks(list) {
	const listOfPaginationButtons = [];
	const pageElement = document.querySelector('.page');

	//	A container DIV element with a class name of "pagination", and
	//	appended to the div element with the class name of page.
	const div = createAndAppendElement('div', pageElement);
	div.className = 'pagination';

	//	A nested UL element containing one LI element for every ten
	//	students in the list.
	const ul = createAndAppendElement('ul', div);

	//	Each LI element should contain an A element.
	for(let i = 0; i < (list.length / NUMBER_OF_ITEMS_ON_PAGE); i++) {
		const li = createAndAppendElement('li', ul);
		const a = createAndAppendElement('a', li);

		fillListOfPagginationButtons(a, listOfPaginationButtons, i);

		//	Active class name to the first pagination.
		if(i==0) activeClassNameOfPaginationElement(a, list);

		//	Add "click" event listener to each A element.
		addEventListenerToLinkElement(a, listOfPaginationButtons)
	}
}

// Run all script (Run main function).
appendPageLinks(studentListItem);
