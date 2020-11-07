import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  

const apiUrl = 'http://localhost:8888/';  

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '411team57!',
  database : 'cs411'
});

connection.connect();
var sql = 'SELECT * FROM User';
var queryResult;
connection.query(sql, function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
        }
       //console.log(result);
       queryResult = result;
});

connection.end();
var http = require('http');
http.createServer(function (request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(JSON.stringify(queryResult));
    response.end();
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
