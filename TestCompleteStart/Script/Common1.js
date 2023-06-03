var ThirdData = require("ThirdData")
var parts = ThirdData.address.split(",");
var city = parts[0].trim();
var postalCode = parts[2].trim();
var street = parts[1].trim();


var NameVal = Project.Variables.CustomerName;
var StreetVal = Project.Variables.Street;
var StateVal = Project.Variables.State;
var CityVal = Project.Variables.City;
var ZipVal = Project.Variables.Zip;
var CardNoVal = Project.Variables.CardNo;



module.exports.NameVal = NameVal;
module.exports.StreetVal = StreetVal;
module.exports.StateVal = StateVal;
module.exports.CityVal = CityVal;
module.exports.ZipVal  = ZipVal ;
module.exports.CardNoVal = CardNoVal;

module.exports.city = city;
module.exports.postalCode = postalCode;
module.exports.street = street;