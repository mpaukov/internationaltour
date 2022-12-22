import ServiceAPI from './api/service';
import cities from '../cities.json';

const gallery = document.querySelector('.gallery') as HTMLElement;

const load = new ServiceAPI();

let i: number = Math.floor(Math.random() * cities.length);
loadPicture();

setInterval(loadPicture, 10000);

function loadPicture(): void {
  gallery.innerHTML = '';
  load.searchQuery = cities[i];
  const test = load.getPictures();
  test.then(data =>
    gallery.insertAdjacentHTML('beforeend', markup(data.data.hits)),
  );
  i++;
  if (i >= cities.length) {
    i = 0;
  }
}

function markup(data: { webformatURL: string; tags: string }[]): string {
  return data
    .map(({ webformatURL, tags }) => {
      return `
  <div class="img__gallery">  
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />  
  </div>`;
    })
    .join('');
}