//调用
//<button onclick="btnDownload();" id="downfilebtn">查看图纸</button>

function btnDownload()
{
var cadId=document.thisItem.getAttribute("id");
var nativeid=document.thisItem.getProperty("native_file");
var viewid=document.thisItem.getProperty("viewable_file");
var fileNd=undefined;
debugger;
if(viewid!=undefined)
{
fileNd=top.aras.getItemById("File",viewid);
top.aras.downloadPhysicalFileTo(fileNd,top.aras.getWorkingDir(false,window),window);
}
if(nativeid!=undefined)
{
fileNd=top.aras.getItemById("File",nativeid);
var inn=top.aras.newIOMInnovator();
var cadstr=inn.applyAML("<AML><Item type=’CAD Structure’ action=’get’ select=’id,related_id’><source_id>"+cadId+"</source_id></Item></AML>");
var cadsum=cadstr.getItemCount();
if(cadsum>0)
{
for(var i=0;i<cadsum;i++)
{
var subcad=cadstr.getItemByIndex(i).getRelatedItem();
var subfile=undefined;
nativeid=subcad.getProperty("native_file");
if(nativeid!=undefined){subfile=top.aras.getItemById("File",nativeid);top.aras.downloadPhysicalFileTo(subfile,top.aras.getWorkingDir(false,window),window);}
viewid=subcad.getProperty("viewable_file");
if(viewid!=undefined){subfile=top.aras.getItemById("File",viewid);top.aras.downloadPhysicalFileTo(subfile,top.aras.getWorkingDir(false,window),window);}
}
}
top.aras.downloadPhysicalFileTo(fileNd,top.aras.getWorkingDir(false,window),window);
var SID_STopLevelBrowser = "4c96be40-915c-11cf-99d3-00aa004ae837";
var guidIServiceProvider = "6d5140c1-7436-11ce-8034-00aa006009fa";
var SID_SWebBrowserApp = "0002df05-0000-0000-c000-000000000046";
var guidIWebBrowser = "eab22ac1-30c1-11cf-a7eb-0000c05bae0b";
var serviceProvider = top.aras.utils.QueryServiceFromServiceProvider(window, SID_STopLevelBrowser, guidIServiceProvider);
var objIWebBrowser = top.aras.utils.QueryServiceFromServiceProvider(serviceProvider, SID_SWebBrowserApp, guidIWebBrowser);
objIWebBrowser.Navigate("file:///"+top.aras.getWorkingDir(false,window)+"/"+top.aras.getItemProperty(fileNd,"filename"));
}
}
