//API TROUBLESHOOT

fetch("https://api.themoviedb.org/3/movie/76341?api_key=a0972e5a728e08b3660f4f6962de43b6&query=hindi")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data.spoken_languages);
        //displayCocktail(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));

//https://api.themoviedb.org/3/movie/76341?api_key=<<a0972e5a728e08b3660f4f6962de43b6>>&language=de
