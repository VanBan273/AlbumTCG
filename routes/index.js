  
module.exports = (app) => {

  app.use("/auth", require('./auth'))
  app.use("/", require('./cards.routes.js'))
  app.use("/", require('./base.routes.js'))
  
  }  
  
  