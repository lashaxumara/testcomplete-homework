var step = require("step");
var dictionary = require("Dictionary");

function Run2(){
  step.openApp()

  for(var i = 0; i < dictionary.quantity; i++){
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
    Aliases.Orders.OrderForm.Group.Customer.SetText(dictionary.name);
    Aliases.Orders.OrderForm.Group.Street.SetText(dictionary.street);
    Aliases.Orders.OrderForm.Group.City.SetText(dictionary.city);
    Aliases.Orders.OrderForm.Group.State_.SetText(dictionary.state);
    Aliases.Orders.OrderForm.Group.Zip.SetText(dictionary.zip);
    Aliases.Orders.OrderForm.Group.CardNo.SetText(dictionary.cardNo);
    Aliases.Orders.orderForm.Group.Quantity.wValue = dictionary.quantity;
    Aliases.Orders.orderForm.ButtonOK.Click();
  }
  
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, dictionary.quantity);
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wSelectedItems", cmpEqual, dictionary.name);
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Created", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "DeviceDpi", cmpEqual, 96);
  
  step.removeOrder();
  step.closeApp();
}
