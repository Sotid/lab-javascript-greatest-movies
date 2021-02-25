// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
  let directors = moviesArray.map(function (film) {
    return film.director;
  });
  return directors;
}

console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function removeDuplicates(moviesArray) {
  let allDirectors = getAllDirectors(moviesArray);

  let cleanArray = allDirectors.filter((film, index) => {
    return allDirectors.indexOf(film) === index;
  });

  return cleanArray;
}

console.log(removeDuplicates(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  let steven = moviesArray.filter(function (film) {
    return film.director === "Steven Spielberg" && film.genre.includes("Drama");
  });
  return steven.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const rates = moviesArray.map(function (film) {
    return film.rate;
  });

  console.log(rates);

  let totalRate = rates.reduce(function (acc, el) {
    if (el) {
      return acc + el;
    } else {
      return acc;
    }
  }, 0);

  return Math.round((totalRate / moviesArray.length) * 100) / 100;
}

console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  let dramaMovies = moviesArray.filter(function (film) {
    return film.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }
  const dramaMoviesRate = dramaMovies.map(function (film) {
    return film.rate;
  });

  let rateDrama = dramaMoviesRate.reduce(function (acc, el) {
    return acc + el;
  }, 0);

  return Math.round((rateDrama / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderedArray = moviesArray.slice().sort(function compare(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    }
  });

  return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  let orderedArray = moviesArray.slice().sort(function compare(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  const titlesOrderedArray = orderedArray.map(function (film) {
    return film.title;
  });

  return titlesOrderedArray.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHourToMinutes(moviesArray){
    const updatedMovies= moviesArray.map(film)=>{
        const movieCopy = {...}

        movieCopy.duration = covertDuration
    }
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
create an object and create its properties using object bracket notation

function bestYearAvg(moviesArray) {
    const dict = {};

    moviesArray.forEach(movie) => {
        const year= dict[movie.year];

        if (!year){
         dict[movie.year] = [movie]
       } else {
           dict[movie.year].push(movie)
       }      
   }
}