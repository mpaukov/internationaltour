import axios from 'axios';

export default class ServiceAPI {
  options: {
    params: {
      key: string;
      q: string;
      image_type: string;
      orientation: string;
      safesearch: boolean;
      page: number;
      per_page: number;
    };
  };

  constructor() {
    this.options = {
      params: {
        key: '25182566-6d97045846fa1b6cae2a84492',
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 6,
      },
    };
  }

  async getPictures() {
    const response = await axios
      .get('https://pixabay.com/api/', this.options)
      .then(data => data)
      .catch(error => error);
    return response;
  }

  get searchQuery() {
    return this.options.params.q;
  }

  set searchQuery(newQuery) {
    this.options.params.q = newQuery;
  }
}
