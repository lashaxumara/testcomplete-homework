class OrderAppOpenner{
constructor(){
      this.app =TestedApps.Orders.Run((1, true));  
  }
}

class OrderButtonOpenner{
  constructor(){
    this.orderButton = Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);  
  }
}
class VisaCheck {
  constructor() {
    Aliases.Orders.OrderForm.Group.Visa.Click();
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Visa, "WndCaption", cmpEqual, "Visa");
  }
}
class AmericanExpress {
  constructor() {
    Aliases.Orders.OrderForm.Group.AE.Click();
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.AE, "WndCaption", cmpEqual, "American Express");
  }
}
class MasterCard {
  constructor() {
    Aliases.Orders.OrderForm.Group.MasterCard.Click();
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.MasterCard, "WndCaption", cmpEqual, "MasterCard");
  }
}

class CardNoField{
  constructor(number){
    Aliases.Orders.OrderForm.Group.CardNo.SetText(number)
   
  }
}
class CopyAndPaste {
  constructor() {
    Aliases.Orders.OrderForm.Group.CardNo.DblClick();
    Sys.Keys("^C^V");
    var cardN = Sys.Clipboard;
    Log.Message(cardN)
  }
}

class OrderAcceptButton{
  constructor(){
    Aliases.Orders.OrderForm.ButtonOK.Click();
  }
}

class OrderPick{
  constructor(){
    this.pick = Aliases.Orders.MainForm.OrdersView.DblClickItem("Lasha", "MyMoney");
  }
}
class OpenMyOrder{
  constructor(){
     Aliases.Orders.MainForm.OrdersView.DblClickItem(0, "MyMoney");
  }
}
class CustomersName{
  constructor(name){
    Aliases.Orders.OrderForm.Group.Customer.SetText(name);
  }
}
class StreetAddress{
  constructor(address){
    Aliases.Orders.OrderForm.Group.Street.SetText(address);
  }
}
class ZipCode{
  constructor(zip){
    Aliases.Orders.OrderForm.Group.Zip.SetText(zip);
  }
}

class CloseOrderApp{
 constructor(){
   Aliases.Orders.OrderForm.ButtonOK.Click();
   this.cancel = Aliases.Orders.MainForm.Close();
   this.exitButton = Aliases.Orders.dlgConfirmation.btnNo.Click();
 }
}
class CloseApp{
 constructor(){
   this.cancel = Aliases.Orders.MainForm.Close();
   this.exitButton = Aliases.Orders.dlgConfirmation.btnNo.Click();
 }
}
class Cancel{
  constructor(){
    Aliases.Orders.OrderForm.WinFormsObject("ButtonCancel").Click()
  }
}
module.exports.CloseApp = CloseApp;
module.exports.OrderAppOpenner = OrderAppOpenner;
module.exports.OrderButtonOpenner = OrderButtonOpenner;
module.exports.Cancel = Cancel;

module.exports.VisaCheck = VisaCheck;
module.exports.MasterCard = MasterCard;
module.exports.AmericanExpress = AmericanExpress;

module.exports.CardNoField = CardNoField;
module.exports.CopyAndPaste = CopyAndPaste;
module.exports.OrderAcceptButton = OrderAcceptButton;
module.exports.OpenMyOrder = OpenMyOrder;

module.exports.CustomersName = CustomersName;
module.exports.StreetAddress = StreetAddress;
module.exports.ZipCode = ZipCode;
module.exports.CloseOrderApp = CloseOrderApp;