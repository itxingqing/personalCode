//调用代码
//<button onclick="btnupload();" id="uploadfile">上传文件</button>

function btnupload() {
	// debugger;
	var cadId = document.thisItem.getAttribute("id");
	var Message = "请选择文件夹"; // 选择框提示信息
	var Shell = new ActiveXObject("Shell.Application");
	// var Folder = Shell.BrowseForFolder(0, Message, 64, 17); //起始目录为：我的电脑
	var Folder = Shell.BrowseForFolder(0, Message, 0); // 起始目录为：桌面
	if (Folder != null) {
		var inn = top.aras.newIOMInnovator();
		Folder = Folder.items(); // 返回 FolderItems 对象
		Folder = Folder.item(); // 返回 Folderitem 对象
		Folder = Folder.Path; // 返回路径
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		var f = fso.GetFolder(Folder);
		var fc = new Enumerator(f.files);
		for (; !fc.atEnd(); fc.moveNext()) {
			var s = "";
			s = fc.item();
			var sname = s.Name;
			var spath = s.Path;
			var getfileitem = inn.newItem("File", "get");
			getfileitem.setProperty("filename", sname);
			getfileitem = getfileitem.apply();
			if (getfileitem.getItemCount() >= 1) {
				var isexist = false;
				var fileid = "";
				for ( var i = 0; i < getfileitem.getItemCount(); i++) {
					var cadfiletiem = inn
							.applyAML("<AML><Item type='CAD File' action='get' select='id'><source_id>"
									+ cadId
									+ "</source_id><related_id>"
									+ getfileitem.getItemByIndex(i)
											.getProperty("id")
									+ "</related_id></Item></AML>");
					if (cadfiletiem.getItemCount() >= 1) {
						isexist = true;
					}
					if (isexist == false) {
						var addcadfiletiem = inn.newItem("CAD File", "add");
						addcadfiletiem.setProperty("related_id", getfileitem
								.getItemByIndex(i).getProperty("id"));
						addcadfiletiem.setProperty("source_id", cadId);
						addcadfiletiem = addcadfiletiem.apply();
						if (addcadfiletiem.isError()) {
							alert(addcadfiletiem.getErrorString());
							return;
						}
						break;
					}
				}

			} else {
				var filetiem = inn.newItem("File", "add");
				filetiem.attachPhysicalFile(spath);
				filetiem.setProperty("filename", sname);
				filetiem = filetiem.apply();
				if (!filetiem.isError()) {
					var cadfiletiem2 = inn.newItem("CAD File", "add");
					cadfiletiem2.setProperty("related_id", filetiem
							.getProperty("id"));
					cadfiletiem2.setProperty("source_id", cadId);
					cadfiletiem2 = cadfiletiem2.apply();
					if (cadfiletiem2.isError()) {
						alert(cadfiletiem2.getErrorString());
						return;
					}
				}
			}
		}
	}
}
