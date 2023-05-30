var step = require("step");

function helloWorld() {
    Log.Message("Hello, World!");
}

function Run(){
  step.openApp()
  step.addAndSave()
  step.closeApp()
}
