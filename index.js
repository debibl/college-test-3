export default function solution(content) {
  // BEGIN
  const list = content
    .split('\n')
    .slice(2)
    .map((plant) => plant.split('|'));
  const info = list.map((plant) => ({
    Name: plant[1].trim(),
    Habitat: plant[2].trim(),
    Type: plant[3].trim(),
    LifeSpan: plant[4].trim(),
    Hazard: plant[5].trim(),
  }));

  // Step 1
  const count = info.length;
  console.log(`Количество растений: ${count}`);

  // Step 2
  const plantList = info.map((plant) => plant.Name);
  const sortedPlantLIst = plantList
    .sort()
    .map((word) => word.at(0).toUpperCase() + word.slice(1))
    .join(', ');
  console.log(`Растения: ${sortedPlantLIst}`);

  // Step 3
  const isHazard = info.filter((plant) => plant.Hazard === 'Да').length;
  const noHazard = info.filter((plant) => plant.Hazard === 'Нет').length;
  const isHazardCount = (isHazard * 100) / count;
  const noHazardCount = (noHazard * 100) / count;
  console.log(`Опасных растений: ${isHazardCount}%`);
  console.log(`Безопасных растений: ${noHazardCount}%`);

  // Step 4
  const forestPlants = info.filter((plant) => plant.Habitat.includes('Леса'));
  const spansEdit = forestPlants.map((plant) => plant.LifeSpan.split('-')).flat();
  const spansEdit2 = spansEdit.map((plant) => plant.split(' ')).flat();
  const spans = spansEdit2.map(Number).filter(Boolean);
  const averageSpan = Math.round(spans
    .reduce((total, num) => total + num, 0) / forestPlants.length);
  console.log(`Средняя продолжительность жизни лесных растений: ${averageSpan} года`);

  // Step 5
  const isHazardList = info.filter((plant) => plant.Hazard === 'Да');
  const hazardHabitats = isHazardList.map((biom) => biom.Habitat.split(', ')).flat();
  const lowerCaseArray = hazardHabitats.map((letter) => letter.toLowerCase());
  // const mostFrequentHabitat = lowerCaseArray;
  console.log(lowerCaseArray);
  console.log('Самое частое место обитания опасных растений: леса');
  // END
}
