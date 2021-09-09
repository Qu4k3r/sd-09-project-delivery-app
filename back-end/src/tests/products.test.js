const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /products', () => {
  describe('pegando todos os produtos', () => {
    let response;

    before(async () => {
      loginResponse = await chai.request(server)
      .post('/login')
      .send({
        email: 'adm@deliveryapp.com',
        password: '--adm2@21!!--'
      })
      .then((result) => result.body.token);

      response = await chai.request(server)
        .get('/products')
        .set('authorization', loginResponse);
    });

    it('retorna o codigo de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('array');
    });
  });
});