var Common = require("Common");
var Data = require("Data");
var Pages = require("Pages");

var imageAppOpen = new Pages.ImageAppOpen;
var orderButton = new Pages.OrderButton;
var cancelOrder = new Pages.CancelOrder;
var openOrder = new Pages.OpenOrder;
var fillOrder = new Pages.FillOrder(Common.NameVal, Common.StreetVal, Common.CityVal, Common.StateVal, Common.ZipVal, Common.CardNoVal);
var acceptOkButton = new Pages.AcceptOkButton();
var orderPick = new Pages.OrderPick;
var filledFill = new Pages.FilledFill(Data.pricePerUnit,Data.discount,Data.total);
var dateField = new Pages.DateField(Data.date);

function imageRunOrder(){
  imageAppOpen;
  orderButton;
  // Check that order window open
  aqObject.CheckProperty(Aliases.Orders.OrderForm, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Orders.OrderForm, "WndCaption", cmpEqual, "Order");
  cancelOrder;
  openOrder;
  fillOrder;
 
 //Checked that product contains three member
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("ProductNames"), "wItemCount", cmpEqual, 3);
 
  //Checked that Quantyty is not getting alphabet members
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit, "wText", cmpNotMatches, "/[a-zA-Z]/", false);
  
  acceptOkButton;
  //Checked that Order Actually added
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Enabled", cmpEqual, true);
  
  orderPick;
  filledFill;
  acceptOkButton;
  Pages.Save();
  orderPick;
  
  //Check that 'price per unit, discount,total' was not changed after save
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("Price"), "wText", cmpEqual, "$100");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("Discount"), "wText", cmpEqual, "0%");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("groupBox1").WinFormsObject("Total"), "wText", cmpEqual, "100");
  
  dateField;
  //Check that date does not take non-valid function
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("Date"), "wMaxDate", cmpEqual, "9998-12-31");
  Pages.AcceptOkButton1();
  Pages.errorButtonOk();
 
  
  Pages.CloseApp();
 }

module.exports.imageRunOrder = imageRunOrder;