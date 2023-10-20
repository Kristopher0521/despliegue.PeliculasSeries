document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.getElementById("results");
  
    // Define un array de datos de películas. Agrega todos los detalles de tus 16 películas aquí.
    const peliculasData = [
      {
        title: "DORA",
        category: "Drama",
        imgSrc: "../img/images (3).jpg",
        trailerLink: "https://youtu.be/PCCuJbPz0Oo?si=r5IdhkKdXMidAUmN",
      },
      {
        title: "INTRIGA",
        category: "Drama",
        imgSrc: "../img/images (4).jpg",
        trailerLink: "https://youtu.be/P99iQMCI32U?si=bKIQOMGccQEIsL9s",
      },
      {
        title: "SCREAM",
        category: "Drama",
        imgSrc: "../img/images (5).jpg",
        trailerLink: "https://youtu.be/gUTtJjV852c",
      },
      {
        title: "ARMADOS Y PELIGROSOS",
        category: "Drama",
        imgSrc: "../Img/images (6).jpg",
        trailerLink: "https://youtu.be/RvSkxcNPR7Q",
      },
      {
        title: "MASACRE EN TEXAS",
        category: "Drama",
        imgSrc: "../Img/images (7).jpg",
        trailerLink: "https://youtu.be/p8XWtiIvfAo",
      },
      {
        title: "CHUKY",
        category: "Drama",
        imgSrc: "../Img/images (8).jpg",
        trailerLink: "https://youtu.be/Za3L68Y6ZFY",
      },
      {
        title: "MALEFICO",
        category: "Drama",
        imgSrc: "../Img/images (9).jpg",
        trailerLink: "https://youtu.be/txdHUYA7R6Q",
      },
      {
        title: "TELEFONO",
        category: "Drama",
        imgSrc: "../Img/images (10).jpg",
        trailerLink: "https://youtu.be/kQ3EMxTAwXY",
      },
      {
        title: "LA CASA BAJO EL AGUA",
        category: "Drama",
        imgSrc: "../Img/images.jpg",
        trailerLink: "https://youtu.be/CczXHso96Yc",
      },
      {
        title: "PATERNIDAD",
        category: "Drama",
        imgSrc: "../Img/images (11).jpg",
        trailerLink: "https://youtu.be/Z6Yk2hlK9gQ",
      },
      {
        title: "EL INFIERNO",
        category: "Drama",
        imgSrc: "../Img/images (12).jpg",
        trailerLink: "https://youtu.be/_ZqQ4nBfYRs",
      },
      {
        title: "RUIDO DE FONDO",
        category: "Drama",
        imgSrc: "../Img/images (13).jpg",
        trailerLink: "https://youtu.be/__ck2M2VfD4",
      },
      {
        title: "MISTERIO A BORDO",
        category: "Drama",
        imgSrc: "../Img/images (14).jpg",
        trailerLink: "https://youtu.be/R8HZeYfJnNU",
      },
      {
        title: "DOS POLICIAS REBELDES",
        category: "Drama",
        imgSrc: "../Img/images (15).jpg",
        trailerLink: "https://youtu.be/bbqWBZEjSO8",
      },
    ];
  
    function displayPeliculasResults(results) {
      resultsContainer.innerHTML = "";
  
      if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontraron resultados</p>";
      } else {
        results.forEach((result) => {
          const peliculaCard = document.createElement("div");
          peliculaCard.classList.add("pelicula");
          peliculaCard.innerHTML = `
            <img src="${result.imgSrc}" alt="${result.title}">
            <h2>${result.title}</h2>
            <p>Género: ${result.category}</p>
            <a class="ver-trailer" href="${result.trailerLink}" target="_blank">Ver Trailer</a>
          `;
          resultsContainer.appendChild(peliculaCard);
        });
      }
    }
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      const filteredResults = peliculasData.filter((pelicula) => {
        return pelicula.title.toLowerCase().includes(searchTerm);
      });
  
      displayPeliculasResults(filteredResults);
    });
  
    document.addEventListener("click", function (event) {
        if (event.target !== searchInput) {
          resultsContainer.innerHTML = "";
        }
      });
      
      searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
      
        if (searchTerm === "") {
          resultsContainer.innerHTML = "";
        } else {
          const filteredResults = peliculasData.filter((pelicula) => {
            return pelicula.title.toLowerCase().includes(searchTerm);
          });
      
          displayPeliculasResults(filteredResults);
        }
      });
  });

