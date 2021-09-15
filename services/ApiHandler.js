const axios = require('axios');

class CardsApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.pokemontcg.io/v2'
    });
  }

  getAllCards = () => this.api.get('/cards?pageSize=250');
  getCardByName= (nameParam) => this.api.get(`/cards?q=name:${nameParam}`)

}



module.exports = CardsApi;