const axios = require('axios');

class CardsApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.pokemontcg.io/v2'
    });
  }

  getAllCards = (num) => this.api.get(`cards?pageSize=24&page=${num}`);
  getCardByName= (nameParam) => this.api.get(`/cards?q=name:${nameParam}`)

}



module.exports = CardsApi;