/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipes, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
	title:"prueba",
	author:"Este es el author",
	readyInMinutes:42,
	summary:"Esta es la descripcion",
	weightWatcherSmart:5,
	aggregateLikes:0,
	price:200,
	healthScore:87,
	instructions:"Estas son las instrucciones",
	analyzedInstructions : [
            {
              number: 1,
              step: "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\""}, {
              number: 2,
              step: "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\""}],
	ingredients: [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
	image:"Este es un IMAGEn",
	diets:["paleolithic", "vegan", "gluten free"]
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipes.sync({ force: true })
    .then(() => Recipes.create(recipe)));
  describe('GET /recipe/1', () => {
    it('should get 200', () =>
      agent.get('/recipe/715392').expect(200)
    );
  });
});
