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
  
// Элементы DOM
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Функция для отображения результатов поиска
function displayResults(results) {
  searchResults.innerHTML = ''; // Очищаем предыдущие результаты

  if (results.length === 0) {
    searchResults.innerHTML = '<p class="p-3">Растение не найдено.</p>';
    return;
  }

  results.forEach(plant => {
    const resultItem = `
      <div class="search-result-card card mb-0">
        <div class="card-body">
          <h5 class="card-title">${plant.name}</h5>
          <p class="card-text">${plant.description}</p>
          <a href="./plants/${plant.id}.html" class="btn btn-primary">Подробнее</a>
        </div>
      </div>
    `;
    searchResults.innerHTML += resultItem;
  });
}

// Функция для поиска растений
function searchPlants(query) {
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(query.toLowerCase())
  );
  displayResults(filteredPlants);
}

// Обработчик ввода в поисковую строку
searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  searchPlants(query);
});