console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this"

const node2 = document.getElementsByClassName("node2")[0];
node2.textContent =
  "I used the getElementsByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these"

const h3Tags = document.getElementsByTagName("h3");
for (let i = 0; i < h3Tags.length; i++) {
  h3Tags[i].textContent =
    "I used the getElementsByTagName('h3') method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

const paragraph = document.createElement("p");
paragraph.textContent =
  "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

let parentNode = document.getElementById("parent");
parentNode.appendChild(paragraph);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

const anchorElement = document.createElement("a");
anchorElement.textContent = "I am a <a> tag";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parentNode.insertBefore(anchorElement, paragraph);

// BONUS: Add a link href to the <a>

anchorElement.href = "https://example.com";

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

parentNode = document.getElementById("exercise-container3");
const oldChildNode = document.getElementById("N1");
const newParagraph = document.createElement("p");
newParagraph.textContent = "New Child Node";
parentNode.replaceChild(newParagraph, oldChildNode);

// TODO: Remove the "New Child Node"

newParagraph.remove();

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
let container = document.getElementById("container");
let unorderedList = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each

list.forEach(function (item) {
  let listItem = document.createElement("li");
  listItem.textContent = item;

  // TODO: Append the new list items to the unordered list element

  unorderedList.appendChild(listItem);
});

// TODO: Append the unordered list to the `div#container` under exercise 4

container.appendChild(unorderedList);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
  const modal = document.createElement("div");
  const modalCard = document.createElement("div");
  const modalPara = document.createElement("p");

  modal.id = "modal";
  modalCard.classList.add("modal-card");
  modalPara.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  // Close Button
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.classList.add("modalCloseBtn");
  // Closing Modal
  function closeModal() {
    document.body.removeChild(modal);
  }
  modal.addEventListener("click", closeModal);
  modalCard.addEventListener("click", (event) => event.stopPropagation());
  closeButton.addEventListener("click", closeModal);
  //Appending Everything Created
  document.body.appendChild(modal);
  modal.append(modalCard);
  modalCard.append(closeButton, modalPara);
}

const modalButton = document.querySelector("#btn");
modalButton.addEventListener("click", show);
