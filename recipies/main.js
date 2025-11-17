import { recipes } from './recipes.mjs';

document.querySelector('.search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const query = e.target.search.value.toLowerCase();
  const results = recipes.filter(r =>
    r.name.toLowerCase().includes(query)
  );
  console.log('Search results:', results);
});