const API_KEY = "ec6ab290";
const BASE_URL = "https://www.omdbapi.com/";

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
