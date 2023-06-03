var ConcatenateFunc = require("ConcatenateFunc");
var TestCase = require("TestCase");

function run (){
  TestCase;
  ConcatenateFunc.conc();
  ConcatenateFunc.Date();
}

function Events_OnLogCheckpoint(Sender, LogParams)
{
   LogParams.MessageText = "Found CheckPoint woohoo";
}