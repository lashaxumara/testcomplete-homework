function addAndSave(){
  KeywordTests.AddOrder.Run()
}

function closeApp(){
  Aliases.Orders.MainForm.Close();
  Aliases.Orders.dlgConfirmation.btnNo.Click();
}

function openApp(){
  TestedApps.Orders.Run(1, true);
}

function removeOrder(){
  Aliases.Orders.MainForm.ToolBar.ClickItem(6, false);
  Aliases.Orders.dlgConfirmation.btnYes.Click();
}
  
module.exports.closeApp = closeApp;
module.exports.openApp = openApp;
module.exports.addAndSave = addAndSave;
module.exports.removeOrder = removeOrder;
