(function (){
  'use strict';

  var util = require('util');

  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  var catalogueHostname = process.env.CATALOGUE_HOSTNAME || "localhost";
  var cataloguePort = process.env.CATALOGUE_PORT || 80;
  var cartsHostname = process.env.CARTS_HOSTNAME || "localhost";
  var cartsPort = process.env.CARTS_PORT || 80;
  var ordersHostname = process.env.ORDERS_HOSTNAME || "localhost";
  var ordersPort = process.env.ORDERS_PORT || 80;
  var usersHostname = process.env.USERS_HOSTNAME || "localhost";
  var usersPort = process.env.USERS_PORT || 80;

  module.exports = {
    catalogueUrl:  util.format("http://%s:%s", catalogueHostname, cataloguePort),
    tagsUrl:       util.format("http://%s:%s/tags", catalogueHostname, cataloguePort),
    cartsUrl:      util.format("http://%s:%s/carts", cartsHostname, cartsPort),
    ordersUrl:     util.format("http://%s:%s", ordersHostname, ordersPort),
    customersUrl:  util.format("http://%s:%s/customers", usersHostname, usersPort),
    addressUrl:    util.format("http://%s:%s/addresses", usersHostname, usersPort),
    cardsUrl:      util.format("http://%s:%s/cards", usersHostname, usersPort),
    loginUrl:      util.format("http://%s:%s/login", usersHostname, usersPort),
    registerUrl:   util.format("http://%s:%s/register", usersHostname, usersPort),
  };
}());
