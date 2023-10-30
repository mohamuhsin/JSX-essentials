//1. WHAT IS JSX?:

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

//2. JSX ELEMENTS:

<h1>Hello World</h1>;

/*This JSX element looks exactly like HTML! 
The only noticeable difference 
is that you would find it in a JavaScript file, 
instead of in an HTML file.*/

//3. JSX ELEMENTS AND THEIR SURROUNDINGS

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

//4. ATTRIBUTES IN JSX

/*JSX elements can have attributes, just like how HTML elements can.
A JSX attribute is written using HTML-like syntax: a name, 
followed by an equals sign, followed by a value. 
The value should be wrapped in quotes, as shown below*/

const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

//5. NESTED JSX

/*
You can nest JSX elements inside of other JSX elements, just like in HTML.

Here’s an example of a JSX <h1> element, 
nested inside of a JSX <a> element: */

<a href="https://www.example.com">
  <h1>Click me!</h1>
</a>;

const theExample = (
  <a href="https://www.example.com">
    <h1>Click me!</h1>
  </a>
);

//6. JSX OUTER ELEMENTS

/* There’s a rule that we haven’t mentioned: 
a JSX expression must have exactly one outermost element.

In other words, this code will work: */

const paragraph = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

// But this code will not work:

//const paragraphs = (
// <p>I am a paragraph.</p>
// <p>I, too, am a paragraph.</p>
//);

//7. RENDERING JSX:

//To render a JSX expression means to make it appear on screen.

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

//the code above will render JSX.

//8. RENDERING JSX EXPLAINED:

/*Before we get started it is essential to understand that 
React relies on two things to render: 
what content to render and 
where to place the content.*/

//const container = document.getElementById("app");

/*Uses the document object which represents our web page.
Uses the getElementById() method of document to get 
the Element object representing the HTML element with the passed in id (app).
Stores the element in container.*/

//const root = createRoot(container);

/*we use createRoot() from the react-dom/client library,
which creates a React root from container 
and stores it in root. 
root can be used to render a JSX expression.
This is the “where to place the content” part of React rendering.*/

root.render(<h1>Hello world</h1>);

/*uses the render() method of root to render the content 
passed in as an argument. Here we pass an <h1> element, 
which displays Hello world. 
This is the “what content to render” part of React rendering.*/

//8. PASSING A VARIABLE TO render():

/* The render() method’s argument doesn’t need to be JSX,
but it should evaluate to a JSX expression. 
The argument could also be a variable, 
so long as that variable evaluates to a JSX expression.*/

const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

//const container = document.getElementById("app");
//const root = createRoot(container);
root.render(toDoList);

//9. VIRTUAL DOM:

/*One special thing about a React root’s render() method is that
 it only updates DOM elements that have changed.

That means that if you render the exact same thing twice in a row,
 the second render will do nothing:*/

const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
root.render(hello, document.getElementById("app"));

// This won't do anything at all:
root.render(hello, document.getElementById("app"));
