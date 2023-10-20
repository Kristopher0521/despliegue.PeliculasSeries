document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.getElementById("results");
  
    // Define an array of series data. You can include more series and details.
    const seriesData = [
        {
          title: "NARCOS",
          category: "Drama",
          imgSrc: "../img/NARCOS.jpg",
          trailerLink: "https://youtu.be/VNP2znpZvUE",
        },
        {
          title: "PEAKY BLINDERS",
          category: "Accion",
          imgSrc: "../img/PEAKY.jpg",
          trailerLink: "https://youtu.be/ZHZG6UArE3I",
        },
        {
          title: "EL RECLUSO",
          category: "Crimen",
          imgSrc: "../img/damer.jpg",
          trailerLink: "https://youtu.be/jzyp8V_jvBw",
        },
        {
          title: "HOMBRE VS. ABEJA",
          category: "Comedia",
          imgSrc: "../img/hombrevs.jpg",
          trailerLink: "https://youtu.be/WlqSarUV88M",
        },
        {
          title: "COMO VIVIR CONTIGO MISMO",
          category: "Ciencia Ficción",
          imgSrc: "../img/images (1).jpg",
          trailerLink: "https://youtu.be/V8GSDhdwh70",
        },
        {
          title: "BRONCA",
          category: "Drama",
          imgSrc: "../img/images (2).jpg",
          trailerLink: "https://youtu.be/Rl3nZ93BFRs",
        },
        {
          title: "BREAKING BAD",
          category: "Ciencia Ficción",
          imgSrc: "../img/images (3).jpg",
          trailerLink: "https://youtu.be/Bi3mMWw_cJ4",
        },
        {
          title: "DAYBREAK",
          category: "Comedia",
          imgSrc: "../img/images (4).jpg",
          trailerLink: "https://youtu.be/hMxE-6RAJm0",
        },
        {
          title: "EL JUEGO DEL CALAMAR",
          category: "Suspenso",
          imgSrc: "../img/images (5).jpg",
          trailerLink: "https://youtu.be/Mj4_xG5NXeo",
        },
        {
          title: "INSATIABLE",
          category: "Drama",
          imgSrc: "../img/images (6).jpg",
          trailerLink: "https://youtu.be/ZNHnTuG0NFs",
        },
        {
          title: "PRISON PLAYBLOOK",
          category: "Suspenso",
          imgSrc: "../img/images (7).jpg",
          trailerLink: "https://youtu.be/MAyHcIzvjnY",
        },
        {
          title: "COBRA KAI",
          category: "Accion",
          imgSrc: "../img/images.jpg",
          trailerLink: "https://youtu.be/ZjUzMd6p4R8",
        },
        {
          title: "MANIFIESTO",
          category: "Accion",
          imgSrc: "../img/images (9).jpg",
          trailerLink: "https://youtu.be/P1px9ChgBdY",
        },
        {
          title: "LUPIN",
          category: "Suspenso",
          imgSrc: "../img/images (10).jpg",
          trailerLink: "https://youtu.be/yX5Py7lL5dw",
        },
        {
          title: "OBSESION",
          category: "Crimen",
          imgSrc: "../img/images (11).jpg",
          trailerLink: "https://youtu.be/BQhPfLPX7ko",
        },
        {
          title: "LA CHICA DE NIEVE",
          category: "Suspenso",
          imgSrc: "../img/images (12).jpg",
          trailerLink: "https://youtu.be/SPcE8J2Xwjc",
        },
        // Add more series data here
      ];
      
  
    function displaySeriesResults(results) {
      resultsContainer.innerHTML = "";
  
      if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found</p>";
      } else {
        results.forEach((result) => {
          const seriesCard = document.createElement("div");
          seriesCard.classList.add("serie");
          seriesCard.innerHTML = `
            <img src="${result.imgSrc}" alt="${result.title}">
            <h2>${result.title}</h2>
            <p>Categoría: ${result.category}</p>
            <a class="ver-trailer" href="${result.trailerLink}" target="_blank">Ver Trailer</a>
          `;
          resultsContainer.appendChild(seriesCard);
        });
      }
    }
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      const filteredResults = seriesData.filter((series) => {
        return series.title.toLowerCase().includes(searchTerm);
      });
  
      displaySeriesResults(filteredResults);
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
  