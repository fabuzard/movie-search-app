const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL; 
export async function searchMovies(title) {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${title}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.Response === "True" ? data.Search : [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
