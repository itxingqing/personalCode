 //Main grid is object of type GridContainer Class (control) 
var g = top.main.work.grid; 
//get selected ids and convert to an array 
var myids = g.GetSelectedItemIDs(","); 

var myarray = myids.split( ","); 

//Get each item in a loop and then set property 
for(i = 0; i < myarray.length; i++){ 
   var itm = this.newItem("My Part", "get"); 
   itm.setID(myarray[i]);
   itm = itm.apply(); 
   itm.setAction("edit"); 
   itm.setProperty("cost", "13"); 
   itm = itm.apply();
}
//Rerun the search grid to update contents 
top.main.work.doSearch(); 
alert("My Parts Modified");