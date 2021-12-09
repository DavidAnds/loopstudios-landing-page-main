# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/css-flexbox-grid-js-vanilla-cn09wUkOm](https://www.frontendmentor.io/solutions/css-flexbox-grid-js-vanilla-cn09wUkOm)
- Live Site URL: [https://davidands.github.io/loopstudios-landing-page-main/](https://davidands.github.io/loopstudios-landing-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM
- JS vanilla

### What I learned

Using BEM and grid. Changing img because of media queries in html. Using filter on img.

```html
<div class="gallery__card card">
  <picture class="card__picture">
    <source
      srcset="./images/desktop/image-curiosity.jpg"
      media="(min-width: 800px)"
    />
    <img src="./images/mobile/image-curiosity.jpg" alt="curiosity" />
  </picture>
  <h3 class="card__title">The <br />curiosity</h3>
</div>
```

```css
.card:hover .card__picture img{
  filter: opacity(50%);
}
```

### Continued development

I want to use scss to organise more my style


## Author

- Frontend Mentor - [@DavidAnds](https://www.frontendmentor.io/profile/DavidAnds)
- Github - [@DavidAnds](https://github.com/DavidAnds)



