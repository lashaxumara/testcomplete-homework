//function imageAppOpen(){
//  ImageRepository.DesktomOrderIMG.Item1.DblClick();
//}

class ImageAppOpen{
  constructor(){
    this.open = ImageRepository.DesktomOrderIMG.Item1.DblClick();
  }
}

class OrderButton{
  constructor(){
    this.button = Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);
  }
}

class CancelOrder{
  constructor(){
    this.cancel = Aliases.Orders.OrderForm.WinFormsObject("ButtonCancel").ClickButton();
  }
}

class OpenOrder{
  constructor(){
    this.openOrder = Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  }
}

class FillOrder{
  constructor(name, street, city, state, zip, cardNo){
    Aliases.Orders.OrderForm.Group.Customer.SetText(name);
    Aliases.Orders.OrderForm.Group.Street.SetText(street);
    Aliases.Orders.OrderForm.Group.City.SetText(city);
    Aliases.Orders.OrderForm.Group.State_.SetText(state);
    Aliases.Orders.OrderForm.Group.Zip.SetText(zip);
    Aliases.Orders.OrderForm.Group.CardNo.SetText(cardNo);
  }
}

class AcceptOkButton{
  constructor(){
    this.ok = Aliases.Orders.orderForm.ButtonOK.Click();
  }
}

class OrderPick{
  constructor(){
    this.pick = Aliases.Orders.MainForm.OrdersView.DblClickItem("Lasha", "MyMoney");
  }
}

class FilledFill{
  constructor(price, discount, total){
    Aliases.Orders.OrderForm.Group.Price.SetText(price);
    Aliases.Orders.OrderForm.Group.Discount.Click(9, 3);
    Aliases.Orders.OrderForm.Group.Discount.SetText(discount);
    Aliases.Orders.OrderForm.Group.groupBox1.Total.Click(26, 16);
    Aliases.Orders.OrderForm.Group.groupBox1.Total.SetText(total);
  }
}

class DateField{
  constructor(date){
    this.date = Aliases.Orders.OrderForm.Group.WinFormsObject("Date").wDate = date;
  }
}

function openApp(){
  TestedApps.Orders.Run(true);
}

function CloseApp()
{
  Aliases.Orders.MainForm.Close();
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
}

function Save()
{
  let orders = Aliases.Orders;
  orders.MainForm.MainMenu.Click("File|Save");
  orders.Window("#32770", "Save As").Window("Button", "&Save").ClickButton();
  orders.Window("#32770", "Confirm Save As").UIAObject("Confirm_Save_As").Window("CtrlNotifySink", "", 7).Window("Button", "&Yes").ClickButton();
}

//function openOrder(){
//  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
//}

//function fillOrder(name, street, city, state, zip, cardNo){
//  Aliases.Orders.OrderForm.Group.Customer.SetText(name);
//  Aliases.Orders.OrderForm.Group.Street.SetText(street);
//  Aliases.Orders.OrderForm.Group.City.SetText(city);
//  Aliases.Orders.OrderForm.Group.State_.SetText(state);
//  Aliases.Orders.OrderForm.Group.Zip.SetText(zip);
//  Aliases.Orders.OrderForm.Group.CardNo.SetText(cardNo);
//}

//function cancelOrder(){
//  Aliases.Orders.OrderForm.WinFormsObject("ButtonCancel").ClickButton();
//}

function AcceptOkButton1(){
  Aliases.Orders.orderForm.ButtonOK.Click();
}

function OrderPick1(){
   Aliases.Orders.MainForm.OrdersView.DblClickItem("Lasha", "MyMoney");
}


//function FilledFill(price,discount,total)
//{
//  Aliases.Orders.OrderForm.Group.Price.SetText(price);
//  Aliases.Orders.OrderForm.Group.Discount.Click(9, 3);
//  Aliases.Orders.OrderForm.Group.Discount.SetText(discount);
//  Aliases.Orders.OrderForm.Group.groupBox1.Total.Click(26, 16);
//  Aliases.Orders.OrderForm.Group.groupBox1.Total.SetText(total);
//}

//function dateField(date){
//   Aliases.Orders.OrderForm.Group.WinFormsObject("Date").wDate = date;
//}

function errorButtonOk(){
  Aliases.Orders.Window("#32770", "Warning").Window("Button", "OK").ClickButton();
}

module.exports.ImageAppOpen = ImageAppOpen;
module.exports.openApp = openApp;
module.exports.OrderButton = OrderButton;
module.exports.CloseApp = CloseApp;
module.exports.Save = Save;
module.exports.OpenOrder = OpenOrder;
module.exports.FillOrder = FillOrder;
module.exports.CancelOrder = CancelOrder;
module.exports.AcceptOkButton = AcceptOkButton;
module.exports.AcceptOkButton1 = AcceptOkButton1;
module.exports.OrderPick = OrderPick;
module.exports.OrderPick1 = OrderPick1;
module.exports.FilledFill=FilledFill;
module.exports.DateField = DateField;
module.exports.errorButtonOk = errorButtonOk;