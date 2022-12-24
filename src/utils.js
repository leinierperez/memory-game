export async function getChampionImageURLs() {
  const url =
    'https://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/champion.json';
  const response = await fetch(url);
  const data = (await response.json()).data;
  const newUrls = [];
  for (const champ in data) {
    const champId = data[champ].id;
    newUrls.push(
      `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champId}_0.jpg`
    );
  }
  return newUrls;
}

export function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex, temp;
  while (--currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
