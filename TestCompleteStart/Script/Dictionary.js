let orderData = getActiveXObject("Scripting.Dictionary");

orderData.Add("Name", "Lasha");
orderData.Add("Product", "MyMoney");
orderData.Add("City", "tbilisi");
orderData.Add("State", "tbilisi");
orderData.Add("Street", "rustaveli");
orderData.Add("Zip", "6100");
orderData.Add("CardNo", "121212121212");
orderData.Add("Quantity", 2);

// Access the data from the dictionary
var name = orderData.Item("Name");
var product = orderData.Item("Product");
var city = orderData.Item("City");
var state = orderData.Item("State");
var street = orderData.Item("Street");
var zip = orderData.Item("Zip");
var cardNo = orderData.Item("CardNo");
var quantity = orderData.Item("Quantity");

module.exports.name = name;
module.exports.product = product;
module.exports.quantity = quantity;
module.exports.city = city;
module.exports.state = state;
module.exports.street = street;
module.exports.zip  = zip ;
module.exports.cardNo = cardNo;



  