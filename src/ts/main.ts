import ServiceAPI from './api/service';
import cities from '../cities.json';

const gallery = document.querySelector('.gallery') as HTMLElement;

const load = new ServiceAPI();

let i: number = Math.floor(Math.random() * cities.length);
loadPicture();

setInterval(loadPicture, 15000);

function loadPicture(): void {
  load.searchQuery = cities[i];
  const test = load.getPictures();

  test.then(data => {
    if (data.data.hits.length >= 6) {
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', markup(data.data.hits));
    } else {
      loadPicture();
    }
  });

  i++;
  if (i >= cities.length) {
    i = 0;
  }
}

function markup(data: { webformatURL: string; tags: string }[]): string {
  return data
    .map(({ webformatURL, tags }) => {
      return `
  <div class="thumb__gallery">  
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />  
  </div>`;
    })
    .join('');
}
