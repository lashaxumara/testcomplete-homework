function concatenateDigitSums(num1, num2) {
  var sum1 = aqConvert.StrToInt(num1.toString()[0]) + aqConvert.StrToInt(num1.toString()[1]) + aqConvert.StrToInt(num1.toString()[2]);
  var sum2 = aqConvert.StrToInt(num2.toString()[0]) + aqConvert.StrToInt(num2.toString()[1]) + aqConvert.StrToInt(num2.toString()[2]);
  var result = aqConvert.StrToInt(aqString.Concat(sum1, sum2));
  return result;
  
}

function conc(){
var num1 = 271;
var num2 = 392;

var concatenatedSum = concatenateDigitSums(num1, num2);
Log.Message(concatenatedSum);
}

function generateDatePattern() {
  var currentDate = aqDateTime.Today();
  var day = aqDateTime.GetDay(currentDate).toString().padStart(2, '0');
  var month = aqDateTime.GetMonth(currentDate).toString().padStart(2, '0');
  var year = aqDateTime.GetYear(currentDate).toString();
  
  var pattern = `${year}-${month}-${day}`;
  return pattern;
}

function Date(){
  Log.Message(generateDatePattern())
}
module.exports.conc = conc;
module.exports.Date = Date;