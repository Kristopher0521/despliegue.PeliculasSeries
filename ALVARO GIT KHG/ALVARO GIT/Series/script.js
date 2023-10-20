document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.getElementById("results");
  
    // Define an array of series data. You can include more series and details.
    const seriesData = [
        {
          title: "NARCOS",
          category: "Drama",
          imgSrc: "../img/NARCOS.jpg",
          descrip: "'Narcos' es una serie de televisión desarrollada por Netflix que se centra en la historia real de una peligrosa difusión y propagación de una red de cocaína por todo el mundo durante los años 70 y 80. Mientras tanto, las fuerzas de seguridad harán frente a este brutal y sangrante conflicto.",  
          trailerLink: "https://youtu.be/VNP2znpZvUE",
        },
        {
          title: "PEAKY BLINDERS",
          category: "Accion",
          imgSrc: "../img/PEAKY.jpg",
          descrip: "'Peaky Blinders' es un drama de gánsteres ambientado en las calles del Birmingham post I Guerra Mundial. En 1919, Gran Bretaña es una mezcla tumultuosa de desesperación y hedonismo. Thomas Shelby y su familia lideran el más poderoso y temido grupo de mafiosos: los Peaky Blinders.",  
          trailerLink: "https://youtu.be/ZHZG6UArE3I",
        },
        {
          title: "EL RECLUSO",
          category: "Crimen",
          imgSrc: "../img/damer.jpg",
          descrip: "Un exmilitar se hace pasar por un recluso en una cárcel mexicana para infiltrarse en una banda sospechada de secuestrar a la hija de un juez estadounidense. Ve todo lo que quieras. Ignacio Serricchio (Perdidos en el espacio, Bones) protagoniza esta versión mexicana del éxito argentino El marginal.",  
          trailerLink: "https://youtu.be/jzyp8V_jvBw",
        },
        {
          title: "HOMBRE VS. ABEJA",
          category: "Comedia",
          imgSrc: "../img/hombrevs.jpg",
          descrip: "En esta serie de comedia, el torpe Trevor se enfrenta a una abeja muy astuta mientras cuida una elegante mansión, pero solo logra causar estragos. Ve todo lo que quieras. Rowan Atkinson, ganador del BAFTA, protagoniza esta comedia sobre la guerra entre el cuidador de una casa y una abeja.",  
          trailerLink: "https://youtu.be/WlqSarUV88M",
        },
        {
          title: "COMO VIVIR CONTIGO MISMO",
          category: "Ciencia Ficción",
          imgSrc: "../img/images (1).jpg",
          descrip: "Harto de la vida, Miles se somete a un extraño tratamiento en un spa dudoso y, al despertar, descubre que lo reemplazaron con una mejor versión de sí mismo. Ve todo lo que quieras. Paul Rudd (Ant-Man, Ligeramente embarazada) encarna a dos versiones del mismo hombre en esta comedia existencial.",  
          trailerLink: "https://youtu.be/V8GSDhdwh70",
        },
        {
          title: "BRONCA",
          category: "Drama",
          imgSrc: "../img/images (2).jpg",
          descrip: "La historia sigue a Amy, una exitosa empresaria que está por cerrar un trato millonario; y Danny, un contratista fracasado cuya familia atraviesa un mal momento. Ambos se ven involucrados en un incidente de tráfico que escalará hasta convertirse en una pelea que llevarán hasta sus últimas consecuencias.",  
          trailerLink: "https://youtu.be/Rl3nZ93BFRs",
        },
        {
          title: "BREAKING BAD",
          category: "Ciencia Ficción",
          imgSrc: "../img/images (3).jpg",
          descrip: "Un profesor de Química de secundaria con cáncer terminal se asocia a un exestudiante para asegurar el futuro de su familia al fabricar y vender metanfetamina. Ve todo lo que quieras. 'Breaking Bad' ganó 16 premios Emmy, incluidos cuatro a mejor actor para la estrella Bryan Cranston.",  
          trailerLink: "https://youtu.be/Bi3mMWw_cJ4",
        },
        {
          title: "DAYBREAK",
          category: "Comedia",
          imgSrc: "../img/images (4).jpg",
          descrip: "Un adolescente vive una vida posapocalíptica normal en Los Ángeles: busca a su chica mientras enfrenta a pandillas callejeras y adultos descerebrados llamados 'gulies'. Ve todo lo que quieras. Una hilarante serie de acción posapocalíptica protagonizada por Matthew Broderick y Colin Ford (Capitana Marvel).",  
          trailerLink: "https://youtu.be/hMxE-6RAJm0",
        },
        {
          title: "EL JUEGO DEL CALAMAR",
          category: "Suspenso",
          imgSrc: "../img/images (5).jpg",
          descrip: "La trama gira en torno a 456 personas que, desesperadas por su situación económica, compiten en un misterioso juego de supervivencia que consiste en múltiples juegos infantiles. Quien logre victorioso se llevará un gran premio y los perdedores, simplemente perderán la vida en el intento.",  
          trailerLink: "https://youtu.be/Mj4_xG5NXeo",
        },
        {
          title: "INSATIABLE",
          category: "Drama",
          imgSrc: "../img/images (6).jpg",
          descrip: "Una adolescente que fue víctima de acoso escolar se anota en concursos de belleza para vengarse, con la ayuda de un desdichado entrenador que no sabe en la que se metió. Ve todo lo que quieras. Debby Ryan explora su lado siniestro como una adolescente vengativa en esta comedia coprotagonizada por Alyssa Milano.",  
          trailerLink: "https://youtu.be/ZNHnTuG0NFs",
        },
        {
          title: "PRISON PLAYBOOK",
          category: "Suspenso",
          imgSrc: "../img/images (7).jpg",
          descrip: "Un jugador de béisbol a punto de iniciar su carrera en la liga profesional acaba en prisión, un nuevo mundo en el que deberá aprender las reglas desde cero. Ve todo lo que quieras. Este drama coreano a lo 'Orange is the New Black' cuenta con Krystal Jung, del grupo de K-pop f(x).",  
          trailerLink: "https://youtu.be/MAyHcIzvjnY",
        },
        {
          title: "COBRA KAI",
          category: "Accion",
          imgSrc: "../img/images.jpg",
          descrip: "Cobra Kai es la secuela de la famosa saga cinematográfica Karate Kid. La serie sigue la historia 30 años después del campeonato de 1984, en el que Johnny no se encuentra en el mejor momento de su vida por lo que decide volver a abrir el famoso Dojo Cobra Kai para darle un giro.",  
          trailerLink: "https://youtu.be/ZjUzMd6p4R8",
        },
        {
          title: "MANIFIESTO",
          category: "Accion",
          imgSrc: "../img/images (9).jpg",
          descrip: "Se centra en los pasajeros y la tripulación de un avión comercial, que reaparece repentinamente, después de haber sido considerados muertos durante más de cinco años. Está protagonizada por Melissa Roxburgh, Josh Dallas, Athena Karkanis, J.",  
          trailerLink: "https://youtu.be/P1px9ChgBdY",
        },
        {
          title: "LUPIN",
          category: "Suspenso",
          imgSrc: "../img/images (10).jpg",
          descrip: "Inspirado por las aventuras de Arsène Lupin, el ladrón de guante blanco Assane Diop se propone vengar la injusticia sufrida por su padre a manos de una familia rica. Ve todo lo que quieras.",  
          trailerLink: "https://youtu.be/yX5Py7lL5dw",
        },
        {
          title: "OBSESION",
          category: "Crimen",
          imgSrc: "../img/images (11).jpg",
          descrip: "La trama refleja la tórrida aventura entre un reputado cirujano casado y la prometida de su hijo que se convertirá en una peligrosa obsesión con terribles consecuencias para la familia. Entra en juego la traición, la infidelidad y la relación entre dos personas con una evidente diferencia de edad.",  
          trailerLink: "https://youtu.be/BQhPfLPX7ko",
        },
        {
          title: "LA CHICA DE NIEVE",
          category: "Suspenso",
          imgSrc: "../img/images (12).jpg",
          descrip: "Cuando la pequeña Amaya desaparece durante la cabalgata de los Reyes Magos de Málaga, una joven periodista se deja la piel para ayudar a sus padres a encontrarla. Ve todo lo que quieras. Milena Smit es una reportera obsesionada con un caso angustioso en este thriller basado en la novela de Javier Castillo.",  
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
            <p>"${result.descrip}"</p>
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
  
