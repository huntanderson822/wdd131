
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];
           
function toISODateAttr(dataText) {
  const date = new Date(dataText);
  if (isNaN(date)) return '';
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function starCount(text) {
  if (!text) return 0;
  return Array.from(text).filter(ch => ch === '⭐' || ch === '★').length;
}

function makeReview(a) {
  const article = document.createElement('article');
  article.className = 'review';
  article.setAttribute('aria-labelledby', `title-${a.id}`);

  const meta = document.createElement('article');
  meta.className = 'review-meta';
  meta.innerHTML = `
    <p class="review-date">
      <time datetime="${toISODateAttr(a.date)}">${a.date}</time>
    </p>
    <p class="review-age">Ages: ${a.ages}</p>
    <p class="review-genre">Genre: ${a.genre}</p>
    <p class="review-star">Rating: ${starCount(a.stars)} out of 5</p>
  `;

  const body = document.createElement('article');
  body.className = 'review-body';

  const header = document.createElement('header');
  const h2 = document.createElement('h2');
  h2.className = 'review-title';
  h2.id = `title-${a.id}`;
  h2.textContent = a.title;
  header.appendChild(h2);

  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.src = a.imgSrc;
  img.alt = a.imgAlt || '';
  img.loading = 'lazy';
  img.width = 360;
  img.height = 480;
  const figcaption = document.createElement('figcaption');
  figcaption.textContent = a.genre;
  figure.appendChild(img, figcaption);


  const summary = document.createElement('p');
  summary.className = 'review-summary';
  summary.textContent = a.description;

  body.append(header, figure, summary);
  article.append(meta, body);
  return article;
  }

  function renderArticles() {
    const container = document.querySelector('.articles');
    if (!container) return;
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    articles.forEach(a => fragment.appendChild(makeReview(a)));
    container.appendChild(fragment);
  }
  document.addEventListener('DOMContentLoaded', renderArticles);

