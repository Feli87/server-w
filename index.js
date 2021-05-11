
const app = require('./src/app.js');
const { conn } = require('./src/db.js');


conn.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log('SERVER :  listening at port 3001'); // eslint-disable-line no-console

  })
});
