$.index.open();
var win1 = Alloy.createController('win1').getView();
$.navgroup.open(win1, {}); // no options
Alloy.Globals.navGroup = $.navgroup;
