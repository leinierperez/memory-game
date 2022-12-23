import { useState, useEffect } from 'react';
import { getChampionImageURLs } from '../utils';

function useChampionImageURLs() {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setUrls(await getChampionImageURLs());
    };
    getData();
  }, []);
  return urls;
}

export default useChampionImageURLs;
