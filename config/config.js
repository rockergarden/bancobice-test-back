require('dotenv').config(); 


const env = process.env.NODE_ENV; // 'dev' o 'test'

const dev = {
 app: {
   port: parseInt(process.env.DEV_APP_PORT) || 3000
 },
 endpoint: {
     url: 'https://www.indecon.online/'
 }
};
const test = {
 app: {
   port: parseInt(process.env.TEST_APP_PORT) || 3000
 },
 endpoint: {
    url: 'https://www.indecon.online/'
 }
};

const config = {
 dev,
 test
};

module.exports = config[env];