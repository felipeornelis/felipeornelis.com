---
title: 'TypeScript vs JSDoc'
description: 'Useful for JavaScript development, both tools serve different purposes.'
date: '2023-08-16 04:41'
---

TypeScript and JSDoc are both valuable tools for JavaScript development for both frontend and backend, but they serve different purposes. TypeScript is a superset of JavaScript that adds static typing, while JSDoc is a way to add inline documentation to JavaScript code.

TypeScript, which is developed and maintained by Microsoft, offers a number of advantages over JSDoc, including:
- **Strong static typing:** TypeScript's type system can help catch type-related errors at compile-time, which can prevent runtime errors;
- **Enhanced tooling support:** TypeScript is well-supported by modern IDEs (i.e.: VSCode), which can provide code autocompletion, error detection, and other features that can improve developer productivity;
- **Improved documentation:** Its types can serve as a form of documentation, making the codebase more self-explanatory.

However, TypeScript also has some disadvantages, including:
- **Learning curve:** TypeScript can be a bit more difficult to learn than JavaScript, especially for developers who are not familiar with static typing;
- **Initial setup:** Integrating it into an existing project requires some configuration and build steps;
- **Strictness:** Type checking can sometimes be too strict, leadingto more verbose code in certain cases.

JSDoc, on the other hand, is a more lightweight tool that is focused on documentation and tooling support. It does not offer the same level of type safety as TypeScript, but it can be a valuable addition to any JavaScript codebase.

The choice between TypeScript and JSDoc depends on the specific needs of your project and what you think it's better for you development experience. If you are looking for a tool that can help you write more robust and maintainable code, go with TypeScript. However, if you are primarily concerned with documentation and tooling support, JSDoc may be a better choice.

Ultimately, the best way to decide which tool is right for you is to try both of them out and see which one you prefer. As a personal experience, I've migrated this website's code from TypeScript to JSDoc and has been a great development experience, even though SvelteKit handles all build steps.

## Examples:

TypeScript
```ts
    // number
    let num: number;

    // string
    let str: string;

    // boolean
    let bool: boolean;

    // object
    let obj: {
        [k: string]: any
    };
```

JSDoc
```js
    /** @type {number} */
    let num;

    /** @type {string} */
    let str;

    /** @type {boolean} */
    let bool;

    /** @type {{[k: string]: any}} */
    let obj;
```