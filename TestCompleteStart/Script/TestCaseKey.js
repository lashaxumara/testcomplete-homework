var Data = require("Data");
var Common4 = require("Common4");
var Steps4 = require("Steps4");
var API = require("API");
//var orderAppOpenner3 = new Steps4.OrderAppOpenner3;
var orderButtonOpenner  = new Steps4.OrderButtonOpenner;
var cardNumber = new Steps4.CardNoField(API.httpGetRequest())
var orderAcceptButton = new Steps4.OrderAcceptButton;
var closeApp = new Steps4.CloseApp;

function activityKey(){
  orderButtonOpenner;
  cardNumber;
  orderAcceptButton;
  closeApp;
  }
module.exports.activityKey = activityKey;  