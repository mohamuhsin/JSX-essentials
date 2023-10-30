//1. class Vs className:

/* This lesson will cover more advanced JSX.
We will learn some powerful tricks and some common errors to avoid.

Grammar in JSX is mostly the same as in HTML, 
but there are subtle differences to watch out for. 
The most frequent of these involves the word class.

In HTML, it’s common to use class as an attribute name:*/

<h1 class="big">Title</h1>;

//In JSX, you can’t use the word class! You have to use className instead:

<h1 className="big">Title</h1>;

/*This is because JSX gets translated into JavaScript, 
and class is a reserved word in JavaScript.

When JSX is rendered, JSX className attributes are automatically 
rendered as class attributes.*/

//2. Self-Closing Tags

/* 
Another common JSX error involves self-closing tags.

What’s a self-closing tag?

Most HTML elements use two tags: an opening tag (<div>), and a closing tag (</div>). However, some HTML elements such as <img> and <input> use only one tag. The tag that belongs to a single-tag element isn’t an opening tag or a closing tag; it’s a self-closing tag.

When you write a self-closing tag in HTML, it is optional to include a forward slash immediately before the final angle bracket:
*/

// Fine in HTML with a slash:
<br />;

// Also fine, without the slash:
//<br>;

/* But, in JSX, you have to include the slash. 
If you write a self-closing tag in JSX and forget the slash, 
you will raise an error:*/

// Fine in JSX:
<br />;

// NOT FINE AT ALL in JSX:
//<br>

const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png" />
    <article>
      My name is John Smith.
      <br />
      I am a software developer.
      <br />I specialize in creating React applications.
    </article>
  </div>
);
