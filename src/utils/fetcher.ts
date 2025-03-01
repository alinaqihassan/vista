const CACHE_EXPIRATION = 5 * 60 * 1000;

const fetcher = async (url: string) => {
  const cached = localStorage.getItem(url);

  if (cached) {
    const { data, timestamp } = JSON.parse(cached);

    if (Date.now() - timestamp < CACHE_EXPIRATION) {
      return data;
    }
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');

  const data = await res.json();

  localStorage.setItem(url, JSON.stringify({ data, timestamp: Date.now() }));

  return data;
};

export default fetcher;
