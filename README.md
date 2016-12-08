# clientUploadFiles.js 客户端上传文件
# downloadAndOpenFile.js下载文档，并且自动开启文档方案
# getProjectTaskNum.cs 获取项目任务序列号 服务端代码
# batchDownLoadRelatedFiles.js 客户端批量下载关联文件
# login aras.cs ARAS 登入API
# test ActionAccessPart.js 在My Part数据表格中，右键某一条记录之后，可以获取到选中的多条记录，然后处理选中的记录后，并且重新执行查询
# 在Server Method中增加class类，来讲业务逻辑进行封装处理，其中有相应的语法；并且可以将自己写的类库.DLL文件，放入到aras的平台下，进行调用。具体见文  件Using Classes inside Server Methods.java
# 可以指定窗口打开时，拆分窗口的高度，自定义，具体见文件 拆开窗口固定大小.docx
# 在平台里，可以通过拆分窗口中的下面窗口，展示外部的数据，展示的外部数据在拆分窗口的列数，是取决于关联的对象类的属性个数，基本原理是，通过连接其他数据库，然后获取数据，循环创建aras平台的对象类的实例对象，进行数据的展示，实例方法见test my part remote  sqlsever.cs，文档见：test my part remote  sqlsever.docx
# 可以将字典数据作为另一个对象的窗体的一个下拉列表框，进行选择信息，见文档ItemType List 字典数据作为下拉框.docx
#
