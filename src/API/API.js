export const fetchApi = (query, page) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '29990165-8c350ed327b5f0dec080b7ac6';
  const per_page = 12;
  return fetch(
    `${URL}?q=${query}&page=${page}&per_page=${per_page}&key=${KEY}&image_type=photo&orientation=horizontal`
  ).then(r => r.json());
};
