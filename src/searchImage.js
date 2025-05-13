import axios from 'axios';

export function searchImage(request, page = 1, per_page = 20) {
  const API_KEY = 'VTk42li90hxpRUUsYr9T-LUKilGHFOedvbnRv5f5LAE';

  const BASE_URL = 'https://api.unsplash.com/search/photos';
  const param = new URLSearchParams({
    client_id: API_KEY,
    query: encodeURIComponent(request),
    page: page,
    per_page: per_page,
  });

  const URL = `${BASE_URL}?${param}`;

  const response = axios.get(URL).then((response) => {
    // console.log(response);
    return {
      quary: request,
      images: response.data.results,
      pagesLoaded: page,
      pagesAvailable: response.data.total_pages,
    };
  });
  return response;
}