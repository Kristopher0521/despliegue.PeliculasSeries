// // Captura el elemento HTML (El buscador) con el id "search-input".
// const searchInput = document.getElementById('search-input');
// // Captura el elemento HTML (Los resultados que se van a ver debajo del buscador) con el id "results".
// const resultsContainer = document.getElementById('results');
// const body = document.body; // Capturamos el elemento body. La parte principal de la página.

// // Este array ("movies") contendrá objetos que representan películas.
// const movies = [
//     // Cada objeto contiene dos propiedades: Title que sería para el titulo de la película y id que es el identificador único.
//     { title: 'PEAKY BLINDERS', id: 1 },
// ];

// // "searchInput" se activa cada vez que se ingresa texto en el buscador.
// searchInput.addEventListener('input', () => {
//     // Se obtiene el valor actual del campo con "searchTerm" y luego se convierte a minúsculas con "tolowerCase" para que sea
//     // insensible a minúsculas y mayúsculas.
//     const searchTerm = searchInput.value.toLowerCase();
//     // Luego se filtran las películas en el array "movies" para encontrar coinsidencias de la búsqueda ("searchTerm").
//     // Estos resultados se almacenan en "filteredMovies".
//     const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
//     // Ya luego se llama la función "displayResults" para mostrar los resultados en el contenedor de resultados.
//     displayResults(filteredMovies);
// });

// // Agregamos un evento de clic al elemento body para eliminar los resultados cuando se hace clic en otra parte de la pantalla
// body.addEventListener('click', () => {
//     clearResults();
// });

// searchInput.addEventListener('click', (event) => {
//     // Evitamos que el clic en el input elimine los resultados
//     // Esta función garantiza que los resultados permanezcan visibles mientras se interactua con el campo de búsqueda.
//     event.stopPropagation();
// });

// // La función "displayResults" recibe una lista de resultados y los muestra en el contenedor de resultados ("resultsContainer")
// function displayResults(results) {
//     // Esto borra cualquier contenido previo.
//     resultsContainer.innerHTML = '';
//     // Se itera a través de los resultados y se crea un elemento "div" para cada resultado.
//     results.forEach(result => {
//         // Se establece el texto del "div" con el titulo de la película.
//         const resultDiv = document.createElement('div');
//         resultDiv.classList.add('result');
//         resultDiv.textContent = result.title;

//         // Agregamos un evento de clic para redirigir a la página de detalles
//         resultDiv.addEventListener('click', () => {
//             window.location.href = `detalle.html?id=${result.id}`;
//         });

//         resultsContainer.appendChild(resultDiv);
//     });
// }

// // La función "clearResults" sirve para borrar el contenido del contenedor de resultados ("resultContainer"). Esto solo sucede cuando
// // se hace click en alguna parte del Body que no sea la barra de búsqueda.
// function clearResults() {
//     resultsContainer.innerHTML = '';
// }

// Captura el elemento HTML (El buscador) con el id "search-input".
const searchInput = document.getElementById('search-input');
// Captura el elemento HTML (Los resultados que se van a ver debajo del buscador) con el id "results".
const resultsContainer = document.getElementById('results');
const body = document.body; // Capturamos el elemento body. La parte principal de la página.

// Este array ("movies") contendrá objetos que representan películas.
const movies = [
    // Cada objeto contiene una propiedad "title" para el título de la película.
    { title: 'PEAKY BLINDERS' },
    // Agrega más películas aquí...
];

// "searchInput" se activa cada vez que se ingresa texto en el buscador.
searchInput.addEventListener('input', () => {
    // Se obtiene el valor actual del campo con "searchTerm" y luego se convierte a minúsculas con "toLowerCase" para que sea
    // insensible a minúsculas y mayúsculas.
    const searchTerm = searchInput.value.toLowerCase();
    // Luego se filtran las películas en el array "movies" para encontrar coincidencias de la búsqueda en los títulos.
    // Estos resultados se almacenan en "filteredMovies".
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    // Ya luego se llama la función "displayResults" para mostrar los resultados en el contenedor de resultados.
    displayResults(filteredMovies);
});

// Agregamos un evento de clic al elemento body para eliminar los resultados cuando se hace clic en otra parte de la pantalla
body.addEventListener('click', () => {
    clearResults();
});

searchInput.addEventListener('click', (event) => {
    // Evitamos que el clic en el input elimine los resultados
    // Esta función garantiza que los resultados permanezcan visibles mientras se interactúa con el campo de búsqueda.
    event.stopPropagation();
});

// La función "displayResults" recibe una lista de resultados y los muestra en el contenedor de resultados ("resultsContainer")
function displayResults(results) {
    // Esto borra cualquier contenido previo.
    resultsContainer.innerHTML = '';
    // Se itera a través de los resultados y se crea un elemento "div" para cada resultado.
    results.forEach(result => {
        // Se establece el texto del "div" con el título de la película.
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        resultDiv.textContent = result.title;

        resultsContainer.appendChild(resultDiv);
    });
}

// La función "clearResults" sirve para borrar el contenido del contenedor de resultados ("resultContainer"). Esto solo sucede cuando
// se hace clic en alguna parte del Body que no sea la barra de búsqueda.
function clearResults() {
    resultsContainer.innerHTML = '';
}

