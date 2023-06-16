var Common1 = require("Common1");
var ThirdPages = require("ThirdPages")
var ThirdData = require("ThirdData")


var appOpen = new ThirdPages.AppOpen;
var orderButton = new ThirdPages.OrderButton;
var fillOrder = new ThirdPages.FillOrder(Common1.NameVal);
var customerName = new ThirdPages.CustomerName;
var cityStreetNo = new ThirdPages.CityStreetNo(ThirdData.address);
var checkStreetLabel = new ThirdPages.CheckStreetLabel;
var city = new ThirdPages.City(Common1.city);
var zip = new ThirdPages.Zip(Common1.postalCode);
var street = new ThirdPages.CityStreetNo(Common1.street);
var acceptOrder = new ThirdPages.AcceptOrder;
var cancelOrder = new ThirdPages.CancelOrder;

function testCase(){
  appOpen;
  orderButton;
  fillOrder;
  customerName;
  Sys.Keys("^A")
  Sys.Keys("[BS]")
  checkStreetLabel;
  cityStreetNo;
  street;
  zip;
  city;
  acceptOrder;
  cancelOrder;

}
