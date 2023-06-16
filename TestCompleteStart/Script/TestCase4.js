var API = require("API");
var Steps4 = require("Steps4");
var Common4 = require("Common4");
var Data4 = require("Data4")

var orderAppOpenner = new Steps4.OrderAppOpenner;
var orderButtonOpenner  = new Steps4.OrderButtonOpenner;
var masterCard = new Steps4.MasterCard;
var visaCheck = new Steps4.VisaCheck;
var americanExprs = Steps4.AmericanExpress;
var generator = new Common4.RandomNumberGenerator;
var cardNoField = new Steps4.CardNoField(generator.randomNumber);
var copyPastePrint = new Steps4.CopyAndPaste;
var orderAcceptButton = new Steps4.OrderAcceptButton;
var openMyOrder = new Steps4.OpenMyOrder;
var customersName = new Steps4.CustomersName(Data4.customerName)
var streetAddress = new Steps4.StreetAddress(Data4.street)
var postalCode = new Steps4.ZipCode(Data4.zip)
var cancel = new Steps4.Cancel;
//var closeAppOrder = new Steps4.CloseOrderApp;

function TestCases4(){
  
  orderAppOpenner;
  orderButtonOpenner;
  
  visaCheck;
  masterCard;
  americanExprs;
  
  cardNoField;
  copyPastePrint;
  orderAcceptButton;
  
  openMyOrder;
  customersName;
  streetAddress;
  postalCode;
  cancel;
  

}  
 


module.exports.TestCases4 = TestCases4;