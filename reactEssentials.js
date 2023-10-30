//What is JSX?
//JSX is a syntax extension for JavaScript.
//It was written to be used with React.
//JSX code looks a lot like HTML.

//In this case, it means that JSX is not valid JavaScript.
//Web browsers can’t read it!

/*If a JavaScript file contains JSX code,
then that file will have to be compiled.
This means that before the file reaches a web browser,
a JSX compiler will translate any JSX into regular JavaScript.
*/

//JSX Elements
<h1>Hello World</h1>;

/*This JSX element looks exactly like HTML! 
The only noticeable difference 
is that you would find it in a JavaScript file, 
instead of in an HTML file.*/

//JSX Elements And Their Surroundings

/*
JSX elements are treated as JavaScript expressions. 
They can go anywhere that JavaScript expressions can go.
This means that a JSX element can be saved in a variable, 
passed to a function, stored in an object or array… you name it.
*/

const navBar = <nav>I am a nav bar</nav>; //being saved as a variable.

const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>,
};

//being saved as an object.

// Attributes in JSX
