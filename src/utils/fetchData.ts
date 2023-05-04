const isFetchNeed = async (keyword: string) => {
  const cache = await caches.open('keywords');

  const cachedData = await cache.match(`api/v1/search-conditions/?name=${keyword}`);
  if (!cachedData) return true;
  return false;
};

export const fetchData = async (keyword: string) => {
  const cache = await caches.open('keywords');

  if (await isFetchNeed(keyword)) {
    cache.add(`api/v1/search-conditions/?name=${keyword}`);
    console.info('calling API');
  }
  return await cache.match(`api/v1/search-conditions/?name=${keyword}`);
};
