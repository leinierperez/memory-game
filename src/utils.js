export async function getChampionData() {
  const url =
    'https://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/champion.json';
  const response = await fetch(url);
  const data = (await response.json()).data;
  const newUrls = [];
  for (const champ in data) {
    newUrls.push({
      name: data[champ].name,
      key: data[champ].key,
      src: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data[champ].id}_0.jpg`,
    });
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
