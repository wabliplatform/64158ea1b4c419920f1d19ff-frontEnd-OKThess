const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'addContact' : './javascript/addContact.js',
	'updateContact' : './javascript/updateContact.js',
	'ContactInfo' : './javascript/ContactInfo.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};