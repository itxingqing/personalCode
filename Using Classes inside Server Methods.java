The programming environment for Innovator is a little different from your normal Visual Studio type application.

Because you are inside a framework where templates are pre-defined it¡¯s easy to get caught out by things that 
would otherwise be simple to figure out in a normal IDE.

You can use Classes inside Innovator server methods but you don¡¯t have to.

You don¡¯t need to define a static main() method as a program entry point because the program is already running.

For a normal small server method you don¡¯t need to worry about ¡°using¡± or class definitions. 
The method will run according to other triggers and when the method is compiled it is decorated with class 
and using definitions automatically according to the template and defined in the ¡°method-config.xml¡± file located under 
the Innovator installation directory (Aras/Innovator/Server/method-config.xml).

So if I want to do ¡°something¡± (say update variable on the onAfterGet trigger) inside a server method I might write code that looks like this:

Innovator inn = this.getInnovator();  // get the Innovator object instance. We aren¡¯t using it here but we would use it to return an error or run a generic method.

string nme = this.getProperty(¡°name¡±,¡±¡±);   // retrieve the existing value of the ¡°name¡± property

nme = nme + ¡°- Not current. Do not use for new designs¡±;  // add some information

this.setProperty(¡°name¡±,nme);  // replace the name property in the information to be delivered to the client.

return this;   // return the context object. All server methods must return an Item object.

Since this was all very easy I didn¡¯t bother with helper classes or any structure I just dropped the method code into the method and set the trigger (onAfterGet).

If I have more complex code then I can write classes to help support what I am doing. It looks something like this:

 

// using a class in  Innovator

 Foo f = new Foo();

int add = f.add(1,3);

return this;

}

public class Bar

{

public Bar(){ }

}

public class Foo

{

public Foo(){ }

public int add(int first, int second)

{

return first + second;

}

// it is important that the class ¡°ending¡± parenthases is missing at the end of the file

// If more than one class is being defined in the file then only the last class would be missing

// the closing ¡®}¡¯

 

If I want to use the Innovator object inside these classes then I pass that object in as a ¡°ref¡±

Innovator inn = this.getInnovator();

Foo f = new foo();

f.createNewItem(ref inn,¡±Part¡±);

return this;

}

public class Foo{

private int var1;

public Foo(){

var1 = 100;

}

public Item createNewItem(ref Innovator inn, string type){

Item itm = inn.newItem(type,¡±add¡±);

itm = itm.apply();

return itm;

}

//}  don¡¯t include this ending parenthases

If you need libraries that are not included in the normal template for Innovator server methods 
	then edit the method-config.xml file and include the ¡°using¡± directives and the path to the .dll for the library object. 
	These should be put under the ¡°Innovator/Server/dll/¡± directory.

It¡¯s important to ensure that .dll files are compiled with the correct .net Framework for the Application Pool that Innovator is running under in IIS.