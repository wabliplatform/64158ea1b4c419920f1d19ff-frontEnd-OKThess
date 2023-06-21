const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'addContact' : './javascript/addContact.js',
	'updateContact' : './javascript/updateContact.js',
	'ContactInfo' : './javascript/ContactInfo.js',
	'funders' : './javascript/funders.js',
	'accelerators' : './javascript/accelerators.js',
	'developers' : './javascript/developers.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};