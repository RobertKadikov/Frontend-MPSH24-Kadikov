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



document.addEventListener("DOMContentLoaded", function() {
    const quotesList = document.querySelector(".quotes__list");
    const authorsDropdown = document.querySelector("#authors-dropdown");
    const randomQuotesButton = document.querySelector("#random-quotes-button");
    let authorsSet = new Set();
    let cachedQuotes = []; // Массив для сохранения загруженных цитат

    // Функция для загрузки 10 цитат одним запросом
    async function fetchBulkQuotes() {
        try {
            const response = await fetch("https://programming-quotesapi.vercel.app/api/bulk");
            if (!response.ok) {
                throw new Error("Ошибка при загрузке цитат");
            }
            const quotes = await response.json();
            return quotes;
        } catch (error) {
            console.error("Ошибка при загрузке цитат:", error);
            return [];
        }
    }

    // Функция для загрузки и отображения 10 случайных цитат
    async function loadRandomQuotes() {
        quotesList.innerHTML = ""; // Очищаем список цитат
        authorsSet.clear();
        authorsDropdown.innerHTML = ""; // Очищаем список авторов
        cachedQuotes = []; // Сбрасываем кэшированные цитаты

        const quotes = await fetchBulkQuotes();
        cachedQuotes = quotes; // Сохраняем цитаты в кэш

        quotes.forEach(quote => {
            const listItem = document.createElement("li");
            listItem.classList.add("quotes__list-item");
            listItem.textContent = `"${quote.quote}" — ${quote.author}`;
            quotesList.appendChild(listItem);

            // Сохраняем автора
            authorsSet.add(quote.author);
        });

        // Обновляем выпадающий список авторов
        authorsSet.forEach(author => {
            const option = document.createElement("option");
            option.value = author;
            option.textContent = author;
            authorsDropdown.appendChild(option);
        });
    }

    // Функция для загрузки и отображения цитат определённого автора
    function loadQuotesByAuthor(author) {
        quotesList.innerHTML = ""; // Очищаем список цитат
        let authorQuotes = cachedQuotes.filter(quote => quote.author === author);

        if (authorQuotes.length === 0) {
            console.warn("Нет цитат для выбранного автора в кэше.");
            return;
        }

        authorQuotes.forEach(quote => {
            const listItem = document.createElement("li");
            listItem.classList.add("quotes__list-item");
            listItem.textContent = `"${quote.quote}" — ${quote.author}`;
            quotesList.appendChild(listItem);
        });
    }

    // Обработчик выбора автора из выпадающего списка
    authorsDropdown.addEventListener("change", function() {
        const selectedAuthor = authorsDropdown.value;
        if (selectedAuthor) {
            loadQuotesByAuthor(selectedAuthor);
        }
    });

    // Обработчик кнопки случайные цитаты
    randomQuotesButton.addEventListener("click", loadRandomQuotes);

    // Загрузка случайных цитат при загрузке страницы
    loadRandomQuotes();
});