class AppOpen{ 
  constructor(){
    this.open =TestedApps.Orders.Run((1, true));   
  }
}

class OrderButton{
  constructor(){
    this.button = Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);  
  }
}

class FillOrder{
  constructor(name){
    this.text = Aliases.Orders.OrderForm.Group.Customer.SetText(name);
  }
}

class CustomerName{
  constructor(name){
   this.field =  Aliases.Orders.OrderForm.Group.Customer.Click();
  }
}



class CityStreetNo{
  constructor(adress){
 this.address = Aliases.Orders.OrderForm.Group.Street.SetText(adress);
 }
}

class CheckStreetLabel{
  constructor(){
 this.assert = aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.WinFormsObject("label8"), "WndCaption", cmpEqual, "Street:");
 }
}

class City{
  constructor(cityName){
 this.city = Aliases.Orders.OrderForm.Group.City.SetText(cityName)
 }
}

class Zip{
  constructor(ZIP){
 this.zip = Aliases.Orders.OrderForm.Group.Zip.SetText(ZIP)
  }
}

class AcceptOrder{
  constructor(){
    this.accept = Aliases.Orders.OrderForm.ButtonOK.Click();
  }
}
class CancelOrder{
 constructor(){
   this.cancel = Aliases.Orders.MainForm.Close();
   this.exitButton = Aliases.Orders.dlgConfirmation.btnNo.Click();
 }
}

module.exports.AppOpen = AppOpen;
module.exports.OrderButton = OrderButton;
module.exports.CancelOrder = CancelOrder;
module.exports.FillOrder = FillOrder;
module.exports.CustomerName = CustomerName;
module.exports.CityStreetNo = CityStreetNo;
module.exports.CheckStreetLabel = CheckStreetLabel;
module.exports.Zip = Zip;
module.exports.City = City;
module.exports.AcceptOrder = AcceptOrder;