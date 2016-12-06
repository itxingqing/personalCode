//引入IOM.dll API
//C#
//连接数据库
public bool RunConn(string http, string db, string name, string pwd)
{
	try
	{
		HttpServerConnection connection = IomFactory.CreateHttpServerConnection(http, db, name, pwd);
		Item result = connection.Login();
		if (result.isError())
		{
			if (connection != null) { connection.Logout(); }
			string str = result.getErrorString();
			int startIndex = (str.IndexOf(":") + 1);
			if(startIndex > 0){str = str.Substring(startIndex);}
			if(str.Contains("Authentication")){str = "Invalid user or password";}
			if(str.Contains("Database") ){str = "Database not available";}
			MessageBox.Show(("Login failed!" + str), "Error", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
			return false;
		}
		else
		{
			//conn = result.getInnovator();
			conn = result.getInnovator();
			return true;
		}
	}
	catch (Exception)
	{
		return false;
	}
}