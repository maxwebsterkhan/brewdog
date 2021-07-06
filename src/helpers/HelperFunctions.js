export const sortBeersByAbv = (beers, reverse) => {
  if (beers && reverse) {
    return beers.sort((a, b) => b.abv - a.abv);
  }
  if (beers && !reverse) {
    return beers.sort((a, b) => a.abv - b.abv);
  }
  return beers;
};
