import { IPData, WeatherData } from '@/types/types';

const CACHE_EXPIRATION = 5 * 60 * 1000; // Cache expiration time (5 minutes)

// Custom fetcher with caching
export const fetchWithCache = async <T = IPData | WeatherData>(
  url: string
): Promise<T> => {
  const cached = localStorage.getItem(url);

  if (cached) {
    const { data, timestamp } = JSON.parse(cached);

    // If cache is still valid, return cached data
    if (Date.now() - timestamp < CACHE_EXPIRATION) {
      return data;
    }
  }

  // Fetch data from the URL if no valid cache exists
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');

  const data: T = await res.json();

  // Store the fetched data in localStorage with a timestamp
  localStorage.setItem(url, JSON.stringify({ data, timestamp: Date.now() }));

  return data;
};
