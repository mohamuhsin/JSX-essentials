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


## 5. Using Variables and Object Properties for Attributes in JSX

In JSX, it's common to use variables and object properties to set attributes for elements. This approach allows for dynamic and reusable code. Here are examples of how you can use variables and object properties for attributes in JSX:

### Using Variables for Attributes:

You can use variables to set attributes, which can make your code more readable, especially when you have many attributes for one element. Here's an example:

```jsx
const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
```

In this example, the `sideLength` variable is used to set the `height` and `width` attributes of the `<img>` element.

### Using Object Properties for Attributes:

You can also use object properties to set attributes, which is useful when you have multiple elements with similar attributes. Here's an example using an object `pics`:

```jsx
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
);
```

In this example, an object `pics` is used to store image sources, and these properties are used to set the `src` attribute for each `<img>` element. This approach makes it easy to manage and update attributes for multiple elements.

Using variables and object properties for attributes in JSX allows you to create more flexible and maintainable code.


## 6. Event Listeners in JSX

In JSX, you can add event listeners to elements, similar to HTML. Event listeners are a fundamental part of programming in React, allowing you to respond to user interactions. To create an event listener, you assign a special attribute to a JSX element. Here's an example:

```jsx
<img onClick={clickAlert} />
```

In this example, the `onClick` attribute is used to add a click event listener to the `<img>` element. The attribute's value should be a function, like `clickAlert`, which will be executed when the click event occurs.

For this to work, `clickAlert` must be a valid function defined elsewhere in your code:

```jsx
function clickAlert() {
  alert('You clicked this image!');
}

<img onClick={clickAlert} />
```

It's important to note that in HTML, event listener names are typically written in all lowercase (e.g., `onclick` or `onmouseover`). However, in JSX, event listener names are written in camelCase (e.g., `onClick` or `onMouseOver`).

You can find a list of supported event names in the React documentation's common components list. Event listeners are essential for creating interactive and responsive user interfaces in React.


## 7. JSX Conditionals and If Statements

In JSX, you cannot directly inject an `if` statement into a JSX expression. The following code, for example, will not work:

```jsx
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
```

So, how can you conditionally render JSX expressions based on certain circumstances? There are several options to achieve this, and we'll explore them in the upcoming lessons. Here are some simple ways to write conditionals in JSX:

1. **Using the Ternary Operator**: You can use the ternary operator (`condition ? trueExpression : falseExpression`) to conditionally render JSX based on a condition.

2. **Using the Logical && Operator**: You can utilize the `&&` operator to conditionally render JSX by evaluating a condition and rendering the JSX if the condition is `true`.

3. **Conditional Rendering with Functions**: You can define functions in your JSX and use them to conditionally render content based on conditions.

These techniques will allow you to render JSX expressions under specific circumstances, providing you with the flexibility to create dynamic and responsive UIs in React.


## 8. JSX Conditionals with If Statements

While you can't directly inject an `if` statement into a JSX expression, you can still use `if` statements effectively by placing them outside the JSX code block. Here's an example of how to write conditional statements in JSX:

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

root.render(message);
```

In this example, an `if` statement is used to conditionally set the `message` variable based on the user's age compared to the `drinkingAge`. If the condition is true, it renders one JSX element; otherwise, it renders another.

By keeping the `if` statement outside of the JSX code block, you can effectively create conditional rendering in JSX. This approach allows you to determine what to display based on conditions, providing flexibility and control in your React applications.



## 9. Using the Ternary Operator for Conditionals in JSX

The ternary operator is a concise way to write conditionals in JSX, and it works in React just as it does in regular JavaScript. It is often used to conditionally render content based on a condition. Here's an example of using the ternary operator in a JSX expression:

```jsx
const headline = (
  <h1>
    {age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff'}
  </h1>
```

In this example, if the condition `age >= drinkingAge` is true, the `headline` will be set to `<h1>Buy Drink</h1>`. If the condition is false, it will be set to `<h1>Do Teen Stuff</h1>`.

The ternary operator is a compact and efficient way to handle simple conditionals in JSX, providing a clean and readable way to express different outcomes based on the evaluation of a condition.



## 10. Using the && Operator for Conditionals in JSX

The `&&` operator is a common way to express conditionals in JSX, and it works in React as it does in regular JavaScript. It is particularly useful for conditionals that will sometimes trigger an action and other times do nothing at all.

Here's an example of using the `&&` operator in a JSX expression:

```jsx
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
```

In this example, the `&&` operator is used to conditionally render list items based on specific conditions. If the expression on the left of the `&&` is true, the JSX on the right will be rendered. If the expression is false, the JSX to the right will be ignored and not rendered.

This approach allows you to include or exclude elements in your JSX based on the evaluation of conditions, providing a clean and concise way to create dynamic content in your React applications.


## 11. Using .map() with JSX

The `.map()` array method is a powerful and commonly used tool in React for generating lists of JSX elements efficiently. It allows you to create a new array of JSX elements by mapping over an existing array.

Here's an example of using `.map()` with JSX:

```jsx
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
```

In this example, we start with an array of strings. We then use the `.map()` method to iterate over the array of strings, transforming each string into a JSX `<li>` element. The result is a new array of JSX elements stored in `listItems`. Finally, we can render the list of items within a `<ul>` element.

You can also create a list of JSX elements directly in JSX without the need for an explicit array, as shown in the following examples:

```jsx
<!-- Fine in JSX, not in an explicit array -->
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

<!-- Also fine using an array -->
const liArray = [
  <li>item 1</li>, 
  <li>item 2</li>, 
  <li>item 3</li>
];

<ul>{liArray}</ul>
```

These examples demonstrate how to use `.map()` to efficiently generate lists of JSX elements or define them directly in JSX to suit your specific needs when creating React components.



## 12. Understanding Keys in JSX Lists

When working with lists in JSX, you may encounter a concept called "keys." Keys are essential for managing lists effectively. Here's what you need to know about them:

- A key is a JSX attribute with the name "key," and its value should be something unique, akin to an "id" attribute in HTML.

- Keys are not visible to users and do not have a visual impact on the rendered content. Instead, they serve an internal purpose for React.

- React uses keys to keep track of the order and identity of elements within a list. Without keys, React may reorder or misplace list items during re-renders, leading to unexpected results.

- Not all lists require keys. Lists should have keys in the following cases:

  1. **List Items with Memory**: When list items need to retain their state or data between renders. For example, in a to-do list, each item must "remember" whether it was checked off to maintain consistency.

  2. **List Order May Change**: When the order of list items might change between renders. For instance, a list of search results could be shuffled, and keys help React identify and maintain the correct order.

- If your list doesn't meet these criteria, you may not need to use keys. However, it's often a good practice to include them to ensure the proper functioning and predictability of your React components.

Here's an example of using keys in a JSX list:

```jsx
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```

In summary, keys play a vital role in maintaining the integrity and order of lists in React, particularly when dealing with lists of dynamically changing data.
```
