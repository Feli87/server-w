const { Recipes,Diets, conn } = require('./../../src/db');
const { expect } = require('chai');

describe('Recipes model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipes.sync({ force: true }));
    describe('title', () => {
      it('should throw an error if title is null', (done) => {
        Recipes.create({})
          .then(() => done(new Error('It requires a valid title')))
          .catch(() => done());
      });
      it('should work when its a valid title', () => {
        Recipes.create({ title: 'Milanesa a la napolitana' });
      });
    });
    describe('summary', () => {
      it('should throw an error if summary is null', (done) => {
        Recipes.create({})
          .then(() => done(new Error('It requires a valid summary')))
          .catch(() => done());
      });
      it('should work when its a valid summary', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd' });
      });
    });
    describe('image', () => {
      it('should throw an error if image is null', (done) => {
        Recipes.create({})
          .then(() => done(new Error('It requires a valid image')))
          .catch(() => done());
      });
      it('should work when its a valid image', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg' });
      });
    });
    describe('readyInMinutes', () => {
      it('should throw an error if readyInMinutes is null', (done) => {
        Recipes.create({})
          .then(() => done(new Error('It requires a valid readyInMinutes')))
          .catch(() => done());
      });
      it('should work when its a valid readyInMinutes', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35 });
      });
    });
    describe('author', () => {
      it('should throw an error if author is null', (done) => {
        Recipes.create({})
          .then(() => done(new Error('It requires a valid author')))
          .catch(() => done());
      });
      it('should work when its a valid readyInMinutes', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli' });
      });
    });
    describe('weightWatcherSmart', () => {
      it('should work when its a valid weightWatcherSmart', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli', weightWatcherSmart:12 });
      });
    });
    describe('license', () => {
      it('should work when its a valid license', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli', weightWatcherSmart:12, license:'some license' });
      });
    });
    describe('aggregateLikes', () => {
      it('should work when its a valid aggregateLikes', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli', weightWatcherSmart:12, license:'some license', aggregateLikes:15 });
      });
    }); 
    describe('healthScore', () => {
      it('should work when its a valid healthScore', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli', weightWatcherSmart:12, license:'some license', aggregateLikes:15, healthScore:98 });
      });
    });    
    describe('price', () => {
      it('should work when its a valid price', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli', weightWatcherSmart:12, license:'some license', aggregateLikes:15, healthScore:98, price:200 });
      });
    });   
    describe('instructions', () => {
      it('should work when its a valid price', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli', weightWatcherSmart:12, license:'some license', aggregateLikes:15, healthScore:98, price:200, instructions:"Instructions kjashjkhasjkhas" });
      });
    });   
    describe('local', () => {
      it('should work when its a valid local', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli', weightWatcherSmart:12, license:'some license', aggregateLikes:15, healthScore:98, price:200, instructions:"Instructions kjashjkhasjkhas", local:true });
      });
    });   
    describe('spocularDiets', () => {
      it('should work when its a valid spocularDiets', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli', weightWatcherSmart:12, license:'some license', aggregateLikes:15, healthScore:98, price:200, instructions:"Instructions kjashjkhasjkhas", local:true, spocularDiets:['vegan', 'primal'] });
      });
    });   
    describe('analyzedInstructions', () => {
      it('should work when its a valid analyzedInstructions', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli', weightWatcherSmart:12, license:'some license', aggregateLikes:15, healthScore:98, price:200, instructions:"Instructions kjashjkhasjkhas", local:true, spocularDiets:['vegan', 'primal'], analyzedInstructions:[{step:"stape 1 prueba" }, {step:"stape 2 prueba" }] });
      });
    });  
    describe('ingredients', () => {
      it('should work when its a valid ingredients', () => {
        Recipes.create({ title: 'Milanesa a la napolitana', summary:'asdsadasdasd', image:'http://www.imagen.com/imagen.jpg',readyInMinutes:35, author:'Feli', weightWatcherSmart:12, license:'some license', aggregateLikes:15, healthScore:98, price:200, instructions:"Instructions kjashjkhasjkhas", local:true, spocularDiets:['vegan', 'primal'], analyzedInstructions:[{step:"stape 1 prueba" }, {step:"stape 2 prueba" }], ingredients:[{ingredient:"stape 1 prueba", image:"imagen", amount:15, unit:"gr" }] });
      });
    }); 
    describe('dients', () => {
      it('should work when its a valid dients', () => {
        Diets.create({name:"vegan" });
      });
    }); 
  });
});
