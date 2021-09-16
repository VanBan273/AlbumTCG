  
module.exports = (app) => {

  app.use("/auth", require('./auth'))
  app.use("/", require('./base.routes.js'))
  app.use("/", require('./cards.routes.js'))
  
  
  }  
  
  