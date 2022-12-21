import ServiceAPI from './api/service';

const gallery = document.querySelector('.gallery');

const load = new ServiceAPI();

load.searchQuery = 'rio';

load.getPictures().then(data => console.log('data', data));
