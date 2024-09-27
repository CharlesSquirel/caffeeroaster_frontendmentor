# Frontend Mentor - Coffeeroasters subscription site solution

This is a solution to the [Coffeeroasters subscription site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Make selections to create a coffee subscription and see an order summary modal of their choices

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

How to configure tailwind plugins, prettier + eslint:

1. Install following packages

```bash
  npm i -D prettier eslint-config-prettier prettier-plugin-tailwind
```

2. Create "prettier.config.js" in the root of your app and paste following snippet:

```js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
};
```

3. Ensure that you have extensions installed – „Tailwind CSS IntelliSense”, „Prettier – Code formatter” and „ESlint”.

4. Open settings => Files:Associations and ensure you have item: "\*.css" with value: "tailwindcss".

5. Open settings => Editor: Quick Suggestions and ensure you have "other" on, "comments" off and "strings" on.

6. Select Prettier as default formatter in settings => Default Formatter.

7. Create file ".eslintrc.json" in the root of your app and paste following snippet:

```json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
