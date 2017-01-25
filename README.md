# quark

**Quark.js is a microscopic atomic CSS polyfill in 140 bytes**

This plugin is the smallest 'atomic' CSS framework, at only 140 bytes it's [small enough to fit in a tweet](https://twitter.com/innovati/status/821079700076371972).


## What is 'atomic' CSS?

There are a number of CSS frameworks like [ACSS](https://acss.io/), [BassCSS](http://basscss.com/), [Tachyons](http://tachyons.io/), [Universal.CSS](https://github.com/marmelab/universal.css), and [Bootstrap v4](https://v4-alpha.getbootstrap.com/utilities/spacing/) that include pre-made classes for certain properties. These can apply directly to an element in HTML as classes instead of as styles.


## How to write classes for Quark

The naming convention Quark uses for writing classes is based on the JavaScript [DOM style property names](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) which are similar to their CSS property equivalents. After the property name there is a dash `-`, and finally we write the value we want. All lengths are in pixels.

For example the following styles:

```html
<div style="color: red; font-size: 20px;"></div>
```

Could be re-written with Quark classes as:

```html
<div class="color-red fontSize-20"></div>
```

View the source of [index.html](index.html) to see more!


## Adding Quark to your Website

To use Quark, either link to `quark.js` using a `<script>` tag like this:

```html
<script src=quark.js></script>
```

Or embed the entire script inline in the page:

```html
<script>for(t=document.querySelectorAll`*`,i=t.length;i--;)for(s=t[i].classList,c=s.length;c--;)z=s[c].split`-`,u=z[1],t[i].style[z[0]]=~~u?u+'px':u</script>
```

There's also an ES6 version of the code available in `quark-es6.js` that can be linked to or included using a `<script>` tag like this:

```html
<script>[...document.querySelectorAll`*`].map(e=>[...e.classList].map(c=>e.style[[a,b]=c.split`-`,a]=~~b?b+'px':b))</script>
```

### 3rd Party Support

Github user @tomhodgins provided a way that Quark classes could be read without the use of `quark.js` or `quark.es6.js` using EQCSS in this pen on Codepen: [Reading Quark Classes with EQCSS](http://codepen.io/tomhodgins/pen/ggGYZJ?editors=1100)

## Documentation

There is an annotated source code file similar (but not identical) to the 140 byte version that explains how the plugin works in an easier-to-read format.

**[Read Annotated Source](annotated.js)**