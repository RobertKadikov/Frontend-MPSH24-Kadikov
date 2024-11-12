const blocksWrapper = document.querySelector('.job__class');
const addProjectBtn = document.querySelector('.job__button');
const tmpAddProjectBtn = document.querySelector('#tmp');
const addProjectModal = document.querySelector('.modal');

addProjectBtn.addEventListener('click', addProject);
tmpAddProjectBtn.addEventListener('click', tmpAddProject);

function addProject( ) {
  addProjectModal.classList.add('open');
}


// function addProject( ) {
//   addProjectModal.classList.add('remove');
// }

function tmpAddProject( ) {
  const newElement = document.createElement('div');
  newElement.classList.add('job__block');
  const title = 'title text';
  const desc = 'description text';
  newElement.innerHTML = `
      <div class="job__img">
          <img src="job 3.jpg" alt="" class="job__naked">
      </div>
      <div class="job__name">
      <h2 class="job__word">
          ${title}
      </h2>
      <p class="job__description">
          ${desc}
      </p>
      </div>
  `

  blocksWrapper.appendChild(newElement);
}
  

