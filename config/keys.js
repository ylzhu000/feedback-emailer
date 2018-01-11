// key.js - figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
   // Production keys are exported
   module.exports = require('./prod');
} else {
  // Developmenet keys are exported
  module.exports = require('./dev');
}
