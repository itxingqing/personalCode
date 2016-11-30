//调试
//<button onclick="btnDownload();" id="downfilebtn">批量下载关联文件</button>
function btnDownload() {
	var cadId = document.thisItem.getAttribute("id");
	if (cadId != undefined) {
		var inn = top.aras.newIOMInnovator();
		var cadstr = inn
				.applyAML("<AML><Item type='CAD File' action='get' select='id,related_id'><source_id>"
						+ cadId + "</source_id></Item></AML>");
		var cadsum = cadstr.getItemCount();
		for ( var i = 0; i < cadsum; i++) {
			var subcad = cadstr.getItemByIndex(i).getRelatedItem();
			var subfile = undefined;
			nativeid = subcad.getID();
			if (nativeid != undefined) {
				subfile = top.aras.getItemById("File", nativeid);
				top.aras.downloadPhysicalFileTo(subfile, top.aras
						.getWorkingDir(false, window), window);
			}
		}
	}
}
