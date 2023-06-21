const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/home', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/home/:id', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/addContact', (req, res) => res.sendFile(path.join(__dirname,'html','addContact.html')));
			this.app.get('/addContact/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addContact.html')));
			this.app.get('/updateContact', (req, res) => res.sendFile(path.join(__dirname,'html','updateContact.html')));
			this.app.get('/updateContact/:id', (req, res) => res.sendFile(path.join(__dirname,'html','updateContact.html')));
			this.app.get('/ContactInfo', (req, res) => res.sendFile(path.join(__dirname,'html','ContactInfo.html')));
			this.app.get('/ContactInfo/:id', (req, res) => res.sendFile(path.join(__dirname,'html','ContactInfo.html')));
			this.app.get('/funders', (req, res) => res.sendFile(path.join(__dirname,'html','funders.html')));
			this.app.get('/funders/:id', (req, res) => res.sendFile(path.join(__dirname,'html','funders.html')));
			this.app.get('/accelerators', (req, res) => res.sendFile(path.join(__dirname,'html','accelerators.html')));
			this.app.get('/accelerators/:id', (req, res) => res.sendFile(path.join(__dirname,'html','accelerators.html')));
			this.app.get('/developers', (req, res) => res.sendFile(path.join(__dirname,'html','developers.html')));
			this.app.get('/developers/:id', (req, res) => res.sendFile(path.join(__dirname,'html','developers.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;