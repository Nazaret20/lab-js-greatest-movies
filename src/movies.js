// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  const uniqueDirectors = directors.filter((director, index) => {
    return directors.indexOf(director) === index;
  });

  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenSpielberg = moviesArray.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );

  const dramaMovieStevenS = stevenSpielberg.filter((movie) =>
    movie.genre.includes('Drama')
  );

  return dramaMovieStevenS.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const sumScore = moviesArray.reduce((acc, movie) => {
    if (movie.score && typeof movie.score === 'number') {
      return acc + movie.score;
    }
    return acc;
  }, 0);

  const averageScore = sumScore / moviesArray.length;

  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((movie) => movie.genre.includes('Drama'));

  if (drama.length === 0) {
    return 0;
  }

  const sumDrama = drama.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  const averageDrama = sumDrama / drama.length;

  return Number(averageDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyOfMovies = [...moviesArray];

  const orderedYear = copyOfMovies.sort((movieA, movieB) => {
    if (movieA.year !== movieB.year) {
      return movieA.year - movieB.year;
    } else {
      if (movieA.title > movieB.title) return 1;
      if (movieA.title < movieB.title) return -1;
      return 0;
    }
  });

  return orderedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copyOfMovies = [...moviesArray];
  const allTitles = copyOfMovies.map((movie) => movie.title);
  const sortedTitles = allTitles.sort();

  if (sortedTitles.length < 20) {
    return sortedTitles;
  } else {
    return sortedTitles.slice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const deepCloneOfMovies = JSON.parse(JSON.stringify(moviesArray));

  deepCloneOfMovies.forEach((movie) => {
    const separationDuration = movie.duration.split(' ');
    let totalMins = 0;

    separationDuration.forEach((separate) => {
      if (separate.includes('h')) {
        totalMins += Number(separate.replace('h', '')) * 60;
      } else if (separate.includes('min')) {
        totalMins += Number(separate.replace('min', ''));
      }
    });
    movie.duration = totalMins;
  });
  return deepCloneOfMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  
  const yearByYear = {};

  moviesArray.map((movie) => {
    const year = movie.year;

    if (!yearByYear[year]) {
      yearByYear[year] = [];
    }

    yearByYear[year].push(movie);
  });

  let bestYear = null;
  let bestAverage = 0;

  for (const year in yearByYear) {
    const yearOfTheMovie = yearByYear[year];

    let finalScore = 0;
    for (const movie of yearOfTheMovie) {
      finalScore += movie.score;
    }

    const average = finalScore / yearOfTheMovie.length;

    if (average > bestAverage) {
      bestAverage = average;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}

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
