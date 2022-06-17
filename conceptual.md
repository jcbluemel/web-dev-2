# Conceptual Exercise

Answer the following questions below in Markdown.
Check out the
[Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## CSS

### What are differences between ``display: inline`` and ``display: block``?
    Inline only takes as much space as needed, ignores height and width, and are side-by-side with other inline items. Block have 100% the width of their parent unless specified, can modify height and width, and items are separated on separate lines.

### What are some advantages to using a CSS framework like Twitter Bootstrap?
    Ease of use, templates, responsive by design, reusable components
---

## jQuery

### What is jQuery?
    Library for more readable manipulation of the DOM. Also simplifies event listeners/handlers, CSS, animation, and AJAX.

### What are differences between finding things with
`document.querySelector(".book")` and `$(".book")`?
    Using jquery's '$' syntax creates a jquery object. Jquery objects have their own methods that are often easier to read and understand. Jquery methods usually return another jquery object, so you can chain methods.

---

## Advanced JavaScript

### What is event delegation? Why would you use it?
    Allows us to attach an event listener to a parent element, but only invoke the callback if the event target matches a specified selector. Great way to use a single (or at least many less) listeners to cover more elements that might need them.

### What is the `event` object? What kinds of things are in it?
    The event is an object that is created when an event listener is called. The object contains properties that describe what type of event occured. Using the .target method on the object will let you see what DOM element was interacted with during the event.

### In the Hack or Snooze API project, what did we use async/await for?
    AJAX

### What happens if you forget the `async` keyword on  the declaration of a function that uses `await` inside of it?
    Your code will break, await can only be used inside async functions.

### What happens if you forget the `await` keyword in front of an asynchronous expression?
    The function executes and returns a promise, and won't know that the function wasn't finished.

### What is the difference between a static method and an instance method?
    Static methods are run on the Class itself, whereas an instance method is run on an instance of a class.

### In JS: `let a = [1, 2, 3]; b = a.slice(); a.push(4);`: does `b` contain 4? Why or why not?
    No, slice makes a new copy of an array, so pushing to 'a' is not connected to 'b'. if b had been set = to a, then 4 would have been in b.

### What are some strategies you've learned for being organized in larger projects, like Hack or Snooze?
    1. Understand the problem.  2. Explore concrete examples.  3. Break it down.  4. Solve a simpler problem.  5. Use tools strategically.  6. Look back and rethink.
---

## How the Web Works and APIs

### What is a hostname?
    Nickname for a server, making it easier for our chimp brains to remember websites.

### What is an IP address?
    Unique address used to find a specific computer on a network.

### What is a port?
    Endpoints of a network connection used to exchange info between servers and clients.

### What is DNS?
    Global phonebook that converts hostnames into IP addresses.

### What is an HTTP header?
    Field of an HTTP request or response that passes additional context along.

### What is an HTTP Response Code?
    3 digit codes issued by server in response to a browser-side request. A quick and easy way of determining how the server responded to the request.

### What is the difference between GET and POST?
    GET is used for viewing things without changing it, POST is used for changing things.

### What is AJAX? Why would you use it?
    Javascript in the browser! Allows web apps to send and receive data async without refreshing the page

### What is JSON?
    String that represents a JS object. Used to send structured data over a network.

### What is an API?
    Set of clearly defined methods of communication between various components.

### What are some limitations of AJAX requests?
    Not all sites use it so there can be compatibility issues, can cause latency during the request/response.

### What is the Same Origin Policy?
    Requires the connecting devices to have the same hostname, protocol and port.