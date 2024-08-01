import { ApiData } from "../types/apiData";

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export async function fetchApodData(date: string): Promise<ApiData> {
  const url = `${BASE_URL}?api_key=${NASA_API_KEY}&date=${date}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: ApiData = await response.json();
  return data;
}
