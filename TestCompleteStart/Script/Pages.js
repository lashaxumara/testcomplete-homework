function imageAppOpen(){
  ImageRepository.DesktomOrderIMG.Item1.DblClick();
}
function openApp(){
  TestedApps.Orders.Run(true);
}

function OrderButton()
{
  Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);
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

function openOrder(){
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
}

function fillOrder(name, street, city, state, zip, cardNo){
  Aliases.Orders.OrderForm.Group.Customer.SetText(name);
  Aliases.Orders.OrderForm.Group.Street.SetText(street);
  Aliases.Orders.OrderForm.Group.City.SetText(city);
  Aliases.Orders.OrderForm.Group.State_.SetText(state);
  Aliases.Orders.OrderForm.Group.Zip.SetText(zip);
  Aliases.Orders.OrderForm.Group.CardNo.SetText(cardNo);
}

function cancelOrder(){
  Aliases.Orders.OrderForm.WinFormsObject("ButtonCancel").ClickButton();
}

function acceptOkButton(){
  Aliases.Orders.orderForm.ButtonOK.Click();
}

function orderPick(){
   Aliases.Orders.MainForm.OrdersView.DblClickItem("Lasha", "MyMoney");
}


function FiledFill(price,discount,total)
{
  Aliases.Orders.OrderForm.Group.Price.SetText(price);
  Aliases.Orders.OrderForm.Group.Discount.Click(9, 3);
  Aliases.Orders.OrderForm.Group.Discount.SetText(discount);
  Aliases.Orders.OrderForm.Group.groupBox1.Total.Click(26, 16);
  Aliases.Orders.OrderForm.Group.groupBox1.Total.SetText(total);
}

function dateField(date){
   Aliases.Orders.OrderForm.Group.WinFormsObject("Date").wDate = date;
}

function errorButtonOk(){
  Aliases.Orders.Window("#32770", "Warning").Window("Button", "OK").ClickButton();
}

module.exports.imageAppOpen = imageAppOpen;
module.exports.openApp = openApp;
module.exports.OrderButton = OrderButton;
module.exports.CloseApp = CloseApp;
module.exports.Save = Save;
module.exports.openOrder = openOrder;
module.exports.fillOrder = fillOrder;
module.exports.cancelOrder = cancelOrder;
module.exports.acceptOkButton = acceptOkButton;
module.exports.orderPick = orderPick;
module.exports.FiledFill=FiledFill;
module.exports.dateField = dateField;
module.exports.errorButtonOk = errorButtonOk;