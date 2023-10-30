# JSX Tips and Common Errors

## 1. `class` vs `className`:

In JSX, there are some key differences from HTML, and one of the most common issues involves the use of the `class` attribute.

In HTML, you typically use the `class` attribute like this:
```jsx
<h1 class="big">Title</h1>
```

However, in JSX, you should use `className` instead of `class` due to JavaScript reserved words:
```jsx
<h1 className="big">Title</h1>
```

When JSX is rendered, the `className` attribute is automatically translated into the `class` attribute.

## 2. Self-Closing Tags:

Another common mistake in JSX involves self-closing tags, which are necessary in JSX but optional in HTML.

In HTML, self-closing tags are often written with or without a slash:
```html
<br />
<br>
```

In JSX, you must include the slash for self-closing tags; omitting it will result in an error:
```jsx
<br />
```

The following is **NOT** acceptable in JSX and will cause an error:
```jsx
<br>
```

Here's an example of JSX code with proper usage of `className` and self-closing tags:

```jsx
const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png" />
    <article>
      My name is John Smith.
      <br />
      I am a software developer.
      <br />
      I specialize in creating React applications.
    </article>
  </div>
);
```

## 3. Using Curly Braces in JSX

In JSX, code placed between tags is treated as JSX itself, not as regular JavaScript. This can lead to unexpected behavior, as seen when trying to add 2 and 3 between `<h1>` tags, which resulted in "2 + 3" as a string of text. To treat code as regular JavaScript, you can wrap it in curly braces `{}`.

Here's an example of using curly braces to evaluate `2 + 3` as JavaScript within a JSX element:

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

// Wrapping the expression in curly braces to evaluate it as JavaScript
root.render(<h1>{2 + 3}</h1>);
```

By wrapping `2 + 3` in curly braces, it's treated as a JavaScript expression and correctly evaluates to `5` within the `<h1>` element.

This allows you to seamlessly integrate JavaScript logic into your JSX code and achieve the desired behavior.


## 4. Using Variables in JSX

In JSX, JavaScript code is part of the same environment as the rest of your JavaScript file. This means you can access variables declared outside the JSX code block from within JSX expressions. 

Here's an example of how to declare a variable and access it within a JSX expression:

```jsx
// Declare a variable:
const name = 'Gerdo';

// Access your variable inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```

In this example, the variable `name` is declared outside the JSX code block but can be accessed and used inside the JSX expression by wrapping it in curly braces `{}`. This allows you to dynamically insert the value of `name` into the JSX element, resulting in the message "Hello, Gerdo!".

Using variables in JSX enables you to create dynamic and data-driven content within your JSX elements.

