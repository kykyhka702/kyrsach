// Файл catalog.js
const plants = [
    {
      id: "ficus", // Уникальный идентификатор для ссылки
      name: "Фикус",
      description: "Неприхотливое растение, любит свет.",
      image: "./img/Phicus.jpg",
      watering: "1 раз в неделю"
    },
    {
      id: "cactus",
      name: "Кактус",
      description: "Не требует частого полива, так как обитает обычно в пустыне.",
      image: "./img/Cactus.webp",
      watering: "1 раз в 2 недели"
    },
    {
      id: "monstera",
      name: "Монстера",
      description: "Любит влажность и рассеянный свет.",
      image: "./img/Monstera.jpeg",
      watering: "2 раза в неделю"
    },
    {
      id: "aloe",
      name: "Алоэ",
      description: "Лечебное растение, не требует частого ухода.",
      image: "./img/aloe.jpg",
      watering: "1 раз в 10 дней"
    },
    {
      id: "spathiphyllum",
      name: "Спатифиллум",
      description: "Цветущее растение, любит влажность.",
      image: "./img/spathiphyllum.jpg",
      watering: "2 раза в неделю"
    },
    {
      id: "chlorophytum",
      name: "Хлорофитум",
      description: "Эффективно очищает воздух и неприхотлив в уходе",
      image: "./img/chlorophytum.jpg",
      watering: "1 раз в неделю"
    },
    {
      id: "dracaena",
      name: "Драцена",
      description: "Декоративное растение, любит умеренный полив.",
      image: "./img/dracaena.jpg",
      watering: "1 раз в 5 дней"
    },
    {
      id: "geranium",
      name: "Герань",
      description: "Цветущее растение, любит солнечный свет.",
      image: "./img/geranium.jpg",
      watering: "1 раз в 3 дня"
    },
    {
      id: "violet",
      name: "Фиалка",
      description: "Компактное растение с красивыми цветами.",
      image: "./img/violet.jpg",
      watering: "1 раз в 4 дня"
    },
    {
      id: "zamioculcas",
      name: "Замиокулькас",
      description: "Неприхотливое растение, подходит для начинающих.",
      image: "./img/zamioculcas.jpg",
      watering: "1 раз в 2 недели"
    },
    {
      id: "Sansevieria",
      name: "Сансевиерия",
      description: "Неприхотливое растение с вертикальными листьями, очищает воздух",
      image: "./img/Sansevieria.webp",
      watering: "1 раз в месяц"
    },
    {
      id: "Calathea",
      name: "Калатея",
      description: " Декоративное растение с яркими узорами на листьях, требует повышенной влажности.",
      image: "./img/Calathea.webp",
      watering: "2-3 раза в неделю"
    },
    {
      id: "Begonia",
      name: "Бегония",
      description: "Неприхотливое растение, подходит для начинающих.",
      image: "./img/Begonia.jpg",
      watering: "2 раза в неделю"
    },
    {
      id: "Asparagus",
      name: "Аспарагус",
      description: "Эффектное растение с ажурными ветвями, любит светлое место и регулярный полив.",
      image: "./img/Asparagus.jpg",
      watering: "3 раза в неделю"
    },
    {
      id: "Epipremnum_aureum",
      name: "Эпипремнум золотистый",
      description: "Вьющаяся лиана, известная как золотой потос, неприхотлива и очищает воздух.",
      image: "./img/Epipremnum.jpg",
      watering: "1 раз в неделю"
    },
    {
      id: "Croton",
      name: "Кротон",
      description: "Яркое растение с разноцветными листьями, требующее яркого освещения и умеренного полива.",
      image: "./img/Croton.jpg",
      watering: "2 раза в неделю"
    }
  ];

// Файл catalog.js
const searchInput = document.getElementById('search-input');
const plantsContainer = document.getElementById('plants-container');
const plantCards = plantsContainer.getElementsByClassName('card');

// Функция для создания карточки растения
// Файл catalog.js
function createPlantCard(plant) {
    return `
      <div class="col-md-3 mb-4">
        <a href="./plants/${plant.id}.html" class="text-decoration-none text-dark">
          <div class="card">
            <img src="${plant.image}" class="card-img-top" alt="${plant.name}">
            <div class="card-body">
              <h5 class="card-title">${plant.name}</h5>
              <p class="card-text">${plant.description}</p>
              <p class="card-text"><small>Полив: ${plant.watering}</small></p>
            </div>
          </div>
        </a>
      </div>
    `;
  }

// Функция для отображения всех растений
function displayPlants(plants) {
  plantsContainer.innerHTML = plants.map(plant => createPlantCard(plant)).join('');
}

// Изначально отображаем все растения
displayPlants(plants);

// Функция для поиска растений
function searchPlants(query) {
  const lowerCaseQuery = query.toLowerCase();

  // Проходим по всем карточкам растений
  Array.from(plantCards).forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const description = card.querySelector('.card-text').textContent.toLowerCase();

    // Проверяем, соответствует ли карточка запросу
    if (title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery)) {
      card.closest('.col-md-3').style.display = 'block'; // Показываем карточку
    } else {
      card.closest('.col-md-3').style.display = 'none'; // Скрываем карточку
    }
  });
}

// Обработчик ввода в поисковую строку
searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  searchPlants(query);
});

function searchPlants(query) {
  const lowerCaseQuery = query.toLowerCase();
  let found = false;

  Array.from(plantCards).forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const description = card.querySelector('.card-text').textContent.toLowerCase();

    if (title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery)) {
      card.closest('.col-md-3').style.display = 'block';
      found = true;
    } else {
      card.closest('.col-md-3').style.display = 'none';
    }
  });

  // Показываем сообщение, если ничего не найдено
  const noResultsMessage = document.getElementById('no-results-message');
  if (!found) {
    if (!noResultsMessage) {
      const message = document.createElement('p');
      message.id = 'no-results-message';
      message.className = 'text-center mt-4';
      message.textContent = 'Растение не найдено.';
      plantsContainer.appendChild(message);
    }
  } else if (noResultsMessage) {
    noResultsMessage.remove();
  }
}

searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  if (query === '') {
    Array.from(plantCards).forEach(card => {
      card.closest('.col-md-3').style.display = 'block';
    });
    const noResultsMessage = document.getElementById('no-results-message');
    if (noResultsMessage) noResultsMessage.remove();
  } else {
    searchPlants(query);
  }
});