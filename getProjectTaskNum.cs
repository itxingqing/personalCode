System.Diagnostics.Debugger.Break();
Innovator inn = this.getInnovator();
string wbsId = "61A469A19B3D422AB47BD3627622AFD4";
Item test = inn.applyMethod("GetActivitiesNumbers", "<rootWBS>" + wbsId + "</rootWBS>");
XmlDocument resDOM= CCO.XML.CreateXMLDocument();
string OuterXml = test.dom.OuterXml;
resDOM.LoadXml(OuterXml);
 
XmlNode rootNode = resDOM.SelectSingleNode("//Result");
if(rootNode == null){return inn.newError("当前项目没有任务节点");}
 
XmlNodeList aNodes = rootNode.SelectNodes("/descendant::a");
if(aNodes == null){return inn.newError("当前项目没有任务节点");}
Number = aNodes[i].Attributes.Item(1).Value;
id = aNodes[i].Attributes.Item(0).Value;
return this;
applyMethod("GetActivitiesNumbers", "<rootWBS>" + wbsId + "</rootWBS>")
