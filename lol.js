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

  clearInputFields ();
}
  
function clearInputFields() {
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('link').value = '';
}

function close( ) {
  addProjectModal.classList.remove('open');
}



// Получаем элементы из DOM
const quotesList = document.querySelectorAll('.quotes__list-item');
const generateButton = document.getElementById('generateButton');
const authorSelect = document.getElementById('authorSelect');


// Функция для получения случайных цитат
async function fetchRandomQuotes() {
    try {
        const response = await fetch('https://programming-quotesapi.vercel.app/api/bulk');
        const quotes = await response.json();


        // Собираем уникальных авторов
        const authors = new Set();
        quotes.forEach(quote => {
            authors.add(quote.author);
        });

        
         // Обновляем выпадающий список авторов
         authorSelect.innerHTML = '<option value="">Выберите автора</option>'; // Сбрасываем список
         authors.forEach(author => {
             const option = document.createElement('option');
             option.value = author;
             option.textContent = author;
             authorSelect.appendChild(option);
         });
        
        // Обновляем список цитат на странице
        quotes.forEach((quote, index) => {
            if (index < quotesList.length) {
                quotesList[index].textContent = `"${quote.quote}" — ${quote.author}`;
            }
        });
    } catch (error) {
        console.error('Ошибка при получении цитат:', error);
    }
}

// Функция для получения цитат по выбранному автору
async function fetchQuotesByAuthor(author) {
  try {

      const response = await fetch("https://programming-quotes-api.vercel.app/quotes/author/${encodeURIComponent(author)}");
      const quotes = await response.json();

      // Обновляем список цитат на странице
      quotes.forEach((quote, index) => {
          if (index < quotesList.length) {
              quotesList[index].textContent = `"${quote.quote}" — ${quote.author}`;
          }
      });
  } catch (error) {
      console.error('Ошибка при получении цитат:', error);
  }
}

// Добавляем обработчик события на кнопку
generateButton.addEventListener('click', () => {
  const selectedAuthor = authorSelect.value;
  if (selectedAuthor) {
      fetchQuotesByAuthor(selectedAuthor);
  } else {
      fetchRandomQuotes();
  }
});

// Загружаем случайные цитаты при загрузке страницы
fetchRandomQuotes();

