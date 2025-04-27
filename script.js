// Change the text of the main title
const changeTextBtn = document.getElementById('change-text-btn');
const mainTitle = document.getElementById('main-title');

changeTextBtn.addEventListener('click', () => {
  mainTitle.textContent = 'You Changed the Title!';
});

// Change the style of the description
const changeStyleBtn = document.getElementById('change-style-btn');
const description = document.getElementById('description');

changeStyleBtn.addEventListener('click', () => {
  description.style.color = 'red';
  description.style.fontSize = '24px';
});

// Add a new paragraph element
const addElementBtn = document.getElementById('add-element-btn');
const dynamicArea = document.getElementById('dynamic-area');

addElementBtn.addEventListener('click', () => {
  const newPara = document.createElement('p');
  newPara.textContent = 'A new paragraph was added!';
  newPara.className = 'dynamic-paragraph';
  dynamicArea.appendChild(newPara);
});

// Remove the last added paragraph
const removeElementBtn = document.getElementById('remove-element-btn');

removeElementBtn.addEventListener('click', () => {
  if (dynamicArea.lastChild) {
    dynamicArea.removeChild(dynamicArea.lastChild);
  }
});
