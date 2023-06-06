var Data4 = require("Data4");
var Common4 = require("Common4");
var Steps4 = require("Steps4");
var API = require("API");
//var orderAppOpenner2 = new Steps4.OrderAppOpenner2;
var orderButtonOpenner  = new Steps4.OrderButtonOpenner;
var custName = new Steps4.CustomersName(API.httpGetRequestAct())
var orderAcceptButton = new Steps4.OrderAcceptButton;
//var closeApp = new Steps4.CloseApp;



 function activityFunc() {
   orderButtonOpenner;
  custName;
  orderAcceptButton;
 
}
module.exports.activityFunc = activityFunc;