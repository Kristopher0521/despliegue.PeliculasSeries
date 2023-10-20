document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.getElementById("results");
  
    // Define un array de datos de películas. Agrega todos los detalles de tus 16 películas aquí.
    const peliculasData = [
      {
        title: "DORA",
        category: "Drama",
        imgSrc: "../Img/images (3).jpg",
        descrip: "Dora, una joven exploradora, decide embarcarse en una apasionante aventura junto con su nuevo grupo de amigos para poder salvar a sus padres y resolver el gran misterio de la ciudad perdida de oro.",
        trailerLink: "https://youtu.be/PCCuJbPz0Oo?si=r5IdhkKdXMidAUmN",
      },
      {
        title: "INTRIGA",
        category: "Drama",
        imgSrc: "../Img/images (4).jpg",
        descrip: "Un hombre desesperado por la desaparición de su pequeña hija no descansará hasta verle la cara al culpable. Ve todo lo que quieras. Hugh Jackman y Jake Gyllenhaal protagonizan esta intensa intriga junto con Viola Davis y Terrence Howard.",
        trailerLink: "https://youtu.be/P99iQMCI32U?si=bKIQOMGccQEIsL9s",
      },
      {
        title: "SCREAM",
        category: "Drama",
        imgSrc: "../Img/images (5).jpg",
        descrip: "Scream es una franquicia de películas de asesinatos de misterio y slasher estadounidense que incluye seis películas, una serie de televisión, productos, y juegos. scream no esta inspirado en el diablo practicamente solo es un simple asesino no es inspirado en terror es una historia inventada.",
        trailerLink: "https://youtu.be/gUTtJjV852c",
      },
      {
        title: "ARMADOS Y PELIGROSOS",
        category: "Drama",
        imgSrc: "../Img/images (6).jpg",
        descrip: "Dos agentes especiales —uno de la Inteligencia Naval y otro de la DEA— se asocian para combatir un cartel de drogas con una operación encubierta que da un giro inesperado. Ve todo lo que quieras.",
        trailerLink: "https://youtu.be/RvSkxcNPR7Q",
      },
      {
        title: "MASACRE EN TEXAS",
        category: "Drama",
        imgSrc: "../Img/images (7).jpg",
        descrip: "En esta secuela, unos influencers en busca de un nuevo comienzo en un pueblo fantasma de Texas se topan con Leatherface, el infame asesino de la máscara de piel humana. Ve todo lo que quieras. Elsie Fisher («La vida de Kayla») actúa en la secuela de terror de los creadores de «No respires» y «Posesión infernal».",
        trailerLink: "https://youtu.be/p8XWtiIvfAo",
      },
      {
        title: "CHUKY",
        category: "Drama",
        imgSrc: "../Img/images (8).jpg",
        descrip: "La cinta narraba la historia del feroz asesino Charles Lee Ray (interpretado por Brad Dourif​) quien, herido en el pecho y acorralado por la policía, decide traspasar su alma a un juguete de moda, un muñeco Good Guy.",
        trailerLink: "https://youtu.be/Za3L68Y6ZFY",
      },
      {
        title: "MALEFICIO",
        category: "Drama",
        imgSrc: "../Img/images (9).jpg",
        descrip: "'Maleficio' (Incantation, 2022) es la nueva película de terror de Netflix, que intenta unir elementos tradicionalmente taiwaneses con el terror contemporáneo cosechando un gran éxito en su país, convirtiéndose en lpelícula taiwanesa más taquillera de 2022 hasta el momento.",
        trailerLink: "https://youtu.be/txdHUYA7R6Q",
      },
      {
        title: "TELEFONO",
        category: "Drama",
        imgSrc: "../Img/images (10).jpg",
        descrip: "El teléfono (The Call), gira en torno a dos mujeres jóvenes Seo-yeon (Park Shin-hye) y Young-sook (Jeon Jong-seo). Ambas viven diferentes periodos de tiempo, pero se encuentran conectadas a través de un teléfono inalámbrico antiguo y viviendo en la misma casa. Agárrense, que vienen curvas.",
        trailerLink: "https://youtu.be/kQ3EMxTAwXY",
      },
      {
        title: "LA CASA BAJO EL AGUA",
        category: "Drama",
        imgSrc: "../Img/images.jpg",
        descrip: "La casa bajo el agua es una película que ha sorprendido a quienes la han visto a través de Netflix, al hablar del caso de una pareja de youtubers quienes arriesgan sus vidas para sumergirse en una casa que se encuentra bajo el agua, en la que ocurrieron crímenes atroces.",
        trailerLink: "https://youtu.be/CczXHso96Yc",
      },
      {
        title: "PATERNIDAD",
        category: "Drama",
        imgSrc: "../Img/images (11).jpg",
        descrip: "Un papá novato y viudo les hace frente a las dudas, los miedos, el dolor y los pañales sucios al criar a su hija por su cuenta. Inspirada en una historia real. Ve todo lo que quieras. Una película cómica y tierna de Paul Weitz, basada en una historia real.",
        trailerLink: "https://youtu.be/Z6Yk2hlK9gQ",
      },
      {
        title: "EL INFIERNO",
        category: "Drama",
        imgSrc: "../Img/images (12).jpg",
        descrip: "Sinopsis. Durante las fiestas del Bicentenario de la Independencia, Benjamín García es expulsado de los Estados Unidos y regresa a su pueblo, donde encuentra un panorama desolador provocado por la violencia y la crisis económica. Para salvar a su familia de la miseria, se involucra en el tráfico de drogas.",
        trailerLink: "https://youtu.be/_ZqQ4nBfYRs",
      },
      {
        title: "RUIDO DE FONDO",
        category: "Drama",
        imgSrc: "../Img/images (13).jpg",
        descrip: "El profesor universitario Jack Gladney y su familia ven alterada su vida cuando una fuga de productos químicos provoca un "Evento Tóxico en el Aire", liberando una nociva nube negra sobre la región que obliga a la familia Gladney a evacuar.",
        trailerLink: "https://youtu.be/__ck2M2VfD4",
      },
      {
        title: "MISTERIO A BORDO",
        category: "Drama",
        imgSrc: "../Img/images (14).jpg",
        descrip: "Un policía de Nueva York y su mujer se van de vacaciones a Europa para revitalizar la chispa de su matrimonio, pero terminan acusados del asesinato de un anciano multimillonario y tienen que huir.",
        trailerLink: "https://youtu.be/R8HZeYfJnNU",
      },
      {
        title: "DOS POLICIAS REBELDES",
        category: "Drama",
        imgSrc: "../Img/images (15).jpg",
        descrip: "Dos policías de Miami tienen 72 horas para encontrar 100 millones de dólares en heroína robada del almacén de evidencias de su comisaría, pero, para lograrlo, deben intercambiar sus identidades.",
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
            <p>${result.descrip}</p>
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

