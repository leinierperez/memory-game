import { useState, useEffect } from 'react';
import { getChampionData } from '../utils';

function useChampionData() {
  const [champions, setChampions] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setChampions(await getChampionData());
    };
    getData();
  }, []);
  return champions;
}

export default useChampionData;
