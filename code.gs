function FormExec() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sinput = ss.getSheetByName("input");
  var soutput = ss.getSheetByName("output");
  var input = sinput.getRange(2, 2, 4).getValues();
  sinput.getRange(2, 2, 4).clear();
  var flatin = [].concat.apply([], input);
  soutput.getRange(soutput.getLastRow()+1, 1,1,4).setValues([flatin]);
  soutput.insertRowAfter(soutput.getLastRow());
  Logger.log(input);  
}
