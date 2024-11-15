const blocksWrapper = document.querySelector('.job__class');
const addProjectBtn = document.querySelector('.job__button');
const addProjectModal = document.querySelector('.modal');
const closeProjectBtn = document.querySelector('.modal__close');
const nameProject = document.getElementById('name');
const descriptionProject = document.getElementById('description');
const linkProject = document.getElementById('link');
const newProjectBtn = document.getElementById('newProject');




addProjectBtn.addEventListener('click', addProject);
closeProjectBtn.addEventListener('click', close);
newProjectBtn.addEventListener('click', addnewProject);




function addProject( ) {
  addProjectModal.classList.add('open');
}


function addnewProject( ) {
  const newElement = document.createElement('div');
  newElement.classList.add('job__block');
  const nameProject = document.getElementById('name').value;
  const descriptionProject = document.getElementById('description').value;
  const linkProject = document.getElementById('link').value;
  newElement.innerHTML = `
      <div class="job__img">
          <img src="${linkProject}" alt="" class="job__naked">
      </div>
      <div class="job__name">
      <h2 class="job__word">
          ${nameProject}
      </h2>
      <p class="job__description">
          ${descriptionProject}
      </p>
      </div>
  `

  blocksWrapper.appendChild(newElement);
}
  
function close( ) {
  addProjectModal.classList.remove('open');
}


