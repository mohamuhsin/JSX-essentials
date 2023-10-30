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

These tips and common errors should help you work with JSX more effectively.
```
