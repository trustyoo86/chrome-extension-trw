'use strict';

const mode = process.env.NODE_ENV;

module.exports = require(`./tools/${mode}.js`);
