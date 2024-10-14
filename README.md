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

I How to configure tailwind plugins, prettier + eslint:

1. Install following packages

```bash
  npm i -D prettier eslint eslint-config-next prettier-plugin-tailwindcss prettier-plugin-organize-imports
```

2. Create "prettierrc" in the root of your app and paste following snippet:

```json
{
  "plugins": [
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss"
  ],
  "singleQuote": true,
  "semi": true,
  "pluginSearchDirs": false
}
```

3. Ensure that you have extensions installed – „Tailwind CSS IntelliSense”, „Prettier – Code formatter” and „ESlint”.

4. Open settings => Files:Associations and ensure you have item: "\*.css" with value: "tailwindcss".

5. Open settings => Editor: Quick Suggestions and ensure you have "other" on, "comments" off and "strings" on.

6. Select Prettier as default formatter in settings => Default Formatter.

7. Create file ".eslintrc.json" in the root of your app and paste following snippet:

```json
{
  "extends": "next/core-web-vitals"
}
```

II I used my custom useOutsideClickHook (in progress)

III I searched for better img optimization. Advanced usage the Image component in Next (in progress)

1. Art Direction Image component based on docs:

```js
import { getImageProps } from 'next/image';

interface ImgInfo {
  src: string;
  width: number;
  height: number;
}

interface ArtDirectionImageProps {
  alt: string;
  className?: string;
  mobileImg: ImgInfo;
  tabletImg: ImgInfo;
  desktopImg: ImgInfo;
}

export default function ArtDirectionImage({
  alt,
  className,
  mobileImg,
  tabletImg,
  desktopImg,
}: ArtDirectionImageProps) {
  const common = { alt: alt, quality: 100 };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: desktopImg.width,
    height: desktopImg.height,
    src: desktopImg.src,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: tabletImg.width,
    height: tabletImg.height,
    src: tabletImg.src,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: mobileImg.width,
    height: mobileImg.height,
    src: mobileImg.src,
  });
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <source media="(min-width: 500px)" srcSet={mobile} />
      <img
        {...rest}
        alt={alt}
        className={`${className} w-[${mobileImg.width}px] h-[${mobileImg.height}px] md:w-[${tabletImg.width}px] md:h-[${tabletImg.height}px] xl:w-[${desktopImg.width}px] xl:h-[${desktopImg.height}px]`}
      />
    </picture>
  );
}

```

### Useful resources

- [Tiny png](https://tinypng.com/) - This is quite famous tool for optimizing images, but I've started using it more right now.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
