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
# 可以根据窗体中，输入的值，来动态的进行权限的设定，具体见文档Permissions Based on Item Property Values.docx
# 通过Server Method进行动态的给用户，赋予临时的参与者，可以临时拥有相应的权限，具体见文件：通过服务器端方法动态临时的给用户授与参与者.docx
# 自定义创建对象类的 Keyed Names，通过Server Method以及GetKeyedName服务器事件，来定义Keyed Names为自定义的内容,具体见：自定义对象类的Keyed Names.docx
# 传递服务器事件的参数，这个功能主要用于以下三点：1、Item Versioning：在一个item被版本化之前，保存已经存在的属性数据；当这个版本要被提交保存到数据库时，可以比对值。2、Item Deletion：在一个对象被删除之前，请求属性数据；以及在一个对象被删除后，在子程序操作中可以使用保存的值。3、Related Items：Obtaining the property values of a parent Item that are used when a new relationship is added to the parent Item。具体见文件 How to Pass Server Event Parameters.docx
# 在Innovator中可以使用用户自己编译的.DLL，因为内部的方法针对于小的相对简单的代码片段或者至少是受限制的方法。因此提供了这种可以添加自己编译dll的功能，具体见文件：使用自己编译的dll文件
# innovator可以使用多种方式，来与外部系统进行交互，属性的数据类型可以使Federated；对象类的实现类型可以使Federated；当对象在CRUD的时候，可以调用.NET方法，方法用来实现这些接口，来和外部系统进行调用，具体见文件：使用外部数据的方法.docx
# 使用关系form表单来添加数据，在拆分窗口的下方有个form表单，见文件Using Relationship Forms使用关系表单进行数据的添加.docx
