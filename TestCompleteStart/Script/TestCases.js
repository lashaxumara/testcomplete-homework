var Common = require("Common");
var Data = require("Data");
var Pages = require("Pages");

function imageRunOrder(){
  
  Pages.imageAppOpen();
  Pages.OrderButton();
  // Check that order window open
  aqObject.CheckProperty(Aliases.Orders.OrderForm, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Orders.OrderForm, "WndCaption", cmpEqual, "Order");
  Pages.cancelOrder();
  Pages.openOrder();
   Pages.fillOrder(Common.NameVal, Common.StreetVal, Common.CityVal, Common.StateVal, Common.ZipVal, Common.CardNoVal)
 
 //Checked that product contains three member
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("ProductNames"), "wItemCount", cmpEqual, 3);
 
  //Checked that Quantyty is not getting alphabet members
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit, "wText", cmpNotMatches, "/[a-zA-Z]/", false);
  
  Pages.acceptOkButton()
  //Checked that Order Actually added
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Enabled", cmpEqual, true);
  
  Pages.orderPick();
  Pages.FiledFill(Data.pricePerUnit,Data.discount,Data.total);
  Pages.acceptOkButton();
  Pages.Save();
  Pages.orderPick();
  
  //Check that 'price per unit, discount,total' was not changed after save
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("Price"), "wText", cmpEqual, "$100");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("Discount"), "wText", cmpEqual, "0%");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("groupBox1").WinFormsObject("Total"), "wText", cmpEqual, "100");
  
  Pages.dateField(Data.date);
  //Check that date does not take non-valid function
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("Date"), "wMaxDate", cmpEqual, "9998-12-31");
  Pages.acceptOkButton();
  Pages.errorButtonOk();
 
  
  Pages.CloseApp();
 }

module.exports.imageRunOrder = imageRunOrder;