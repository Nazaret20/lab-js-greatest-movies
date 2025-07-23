// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);
  const uniqueDirectors = directors.filter((director, index) => {
    return directors.indexOf(director) === index;
  });

  return uniqueDirectors;
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenSpielberg = movies.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );

  const dramaMovieStevenS = stevenSpielberg.filter((movie) =>
    movie.genre.includes('Drama')
  );

  return dramaMovieStevenS;
}
howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const sumScore = movies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  const averageScore = sumScore / movies.length;

  return averageScore.toFixed(2);
}
scoresAverage(movies);

const averageOfAll = scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const drama = movies.filter((movie) => movie.genre.includes('Drama'));

  const sumDrama = drama.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  const averageDrama = sumDrama / drama.length;

  return averageDrama.toFixed(2);
}
dramaMoviesScore(movies);

const averageOfDrama = dramaMoviesScore(movies);

if (averageOfDrama > averageOfAll) {
  console.log(
    `The average of the Drama movies is better than the general average with ${averageOfDrama}`
  );
} else if (averageOfDrama < averageOfAll) {
  console.log(
    `The average in all movies is better than the average of the Drama movies with ${averageOfAll}`
  );
} else {
  console.log('Both averages are the same');
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const copyOfMovies = [...movies];

  const orderedYear = copyOfMovies.sort((movieA, movieB) => {
    if (movieA.year !== movieB.year) {
      return movieA.year - movieB.year;
    } else {
      if (movieA.title > movieB.title) return 1;
      if (movieA.title < movieB.title) return -1;
      return 0
    }
  });

  return orderedYear;
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const copyOfMovies = [...movies]

  const allTitles = copyOfMovies.map(movie => movie.title)

  if (allTitles.length < 20) {
    return allTitles
  } else {
    return allTitles.sort().slice(0, 20)
  }
}
orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const deepCloneOfMovies = JSON.parse(JSON.stringify(movies))

  const duration = deepCloneOfMovies.map(movie => {
    if (movie.duration.includes('h')) {
      return movie.duration.split('h')
    }
  })

  console.log(deepCloneOfMovies)


  
}
turnHoursToMinutes(movies)

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
