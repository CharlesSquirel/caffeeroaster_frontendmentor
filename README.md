# Frontend Mentor - Coffeeroasters subscription site solution

This is a solution to the [Coffeeroasters subscription site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
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

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

- Mobile-first workflow
- React Hook Form

### What I learned

I **How to configure tailwind plugins, prettier + eslint:**

1. Install following packages

```bash
  npm i -D prettier eslint eslint-config-next prettier-plugin-tailwindcss prettier-plugin-organize-imports
```

2. **Create "prettierrc" in the root of your app and paste following snippet:**

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

II **I used my custom useOutsideClickHook**

```js
import { useEffect } from 'react';

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  refException: React.RefObject<HTMLElement>,
  callback: () => void,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        refException.current &&
        !refException.current.contains(event.target as Node)
      ) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, refException]);
};
export default useOutsideClick;

```

III **I searched for better img optimization. Advanced usage the Image component in Next**

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

IV **How to pass props to children prop in parent component using React.clone**

```js
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const clonedChild = React.cloneElement(child as ReactElement<any>, {
        propeToBePassed: propValue
      });
      return clonedChild;
    }
    return child;
  });
```

V **Custom hook that blurs the background behind modal (with GPT help)**

```js
import { useEffect } from 'react';

function useBlurBackground(modalRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!modalRef.current) return;

    const modalElement = modalRef.current;

    const backdrop = document.createElement('div');
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100vw';
    backdrop.style.height = '100vh';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    backdrop.style.zIndex = '1000';
    document.body.appendChild(backdrop);

    const allElements = Array.from(document.body.children) as HTMLElement[];

    allElements.forEach((el) => {
      if (
        !modalElement.contains(el) &&
        el !== modalElement &&
        el !== backdrop
      ) {
        el.style.filter = 'blur(5px)';
      }
    });

    return () => {
      allElements.forEach((el) => {
        if (el.style.filter === 'blur(5px)') {
          el.style.filter = '';
        }
      });
      document.body.removeChild(backdrop);
    };
  }, [modalRef]);
}

export default useBlurBackground;

```

### Useful resources

- [Tiny png](https://tinypng.com/) - This is quite famous tool for optimizing images, but I've started using it more right now.

## Author

- Frontend Mentor - [@CharlesSquirel](https://www.frontendmentor.io/profile/CharlesSquirel)
- Github - [@CharlesSquirel](https://github.com/CharlesSquirel)
