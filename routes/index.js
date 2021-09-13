  
module.exports = (app) => {

  app.use("/auth", require('./auth'))
  app.use("/", require('./cards.routes'))
  app.use("/", require('./base.routes.js'))
  
  }  
  
  