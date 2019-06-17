'use strict';

require('dotenv').config();
const Client = require('@nmq/q/client');

const database = new Client('database');

database.subscribe('create', () => {
  console.log('created');
});
database.subscribe('update', () => {
  console.log('updated');
});
database.subscribe('delete', () => {
  console.log('deleted');
});
database.subscribe('read', () => {
  console.log('read');
});
database.subscribe('error', () => {
  console.log('error');
});
