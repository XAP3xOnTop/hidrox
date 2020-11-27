const prefix = require('../../botconfig.json');

module.exports = client => {

    client.user.setUsername('hidrox'); // sets the bots name
    client.user.setStatus("idle"); // sets the bots status
  
  console.log('╚═════════════════════════════════╝')  
  console.log(`Hello ${client.user.username} is now online⚡!`); // consoles logs this when bot is turned on
  
};
