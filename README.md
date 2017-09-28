<img alt="Nabbar Nav" align="right" src="./nabbar_logo.png" width="400px"/>

# Nabbar Nav
_**Nabbar**: an unfortunately common typo for "navbar"_

A general purpose nav bar component for React, using CSS grid.

[See it live here!](https://smessina.com/nabbar-demo)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Deployment](#deployment)
2. [Built With](#built-with)
3. [Contributing](#contributing)
3. [Authors](#authors)
3. [License](#license)


## Introduction

Nabbar Nav is a React component for navigation bars, made to fit into existing projects with relative ease.

The inspiration for Nabbar came out of my interest in [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). Until learning grid, I had relied on [Bootstrap](https://getbootstrap.com/) for most of my layout needs. The power of CSS Grid made me think I could do without Bootstrap, and so far that has been the case. One aspect of Bootstrap that I missed, however, was the nav bar. With that in mind, I set out to make one of my own and ended up with Nabbar Nav.

## Getting Started

### Prerequisites

Because Nabbar is a React Component, it is expected that you have a React site ready for it. If you are starting from scratch, I recommend using [Facebook's own create-react-app](https://github.com/facebookincubator/create-react-app), and have included a boilerplate example in [example_create-react-app](example_create-react-app).


### Installing

#### Manual Installation 

First, clone the project to a local directory.

```
   git clone https://github.com/regexpressyourself/Nabbar-Nav.git && cd Nabbar-Nav
```

Then simply include the Nabbar component as shown below.

#### Using NPM

An NPM version of Nabbar Nav is currently in the works. If you are interested in helping publish Nabbar Nav, see [contributing](#contributing).


**[Back to top](#table-of-contents)**

## Deployment

You will need to include the Nabbar Nav component somewhere in your React project to use it. All Nabbar components and stylesheets expect to be placed in the same directory. 

Once you have Nabbar Nav included in your project, you should make sure that the surrounding component hierarchy is in place:


### Component Hierarchy

There is a specific way to set up your component hierarchy if you want to start using Nabbar out of the box. In addition the Nabbar component, you will need at least two others: a main wrapper which will call Nabbar, and a body element which will hold the body of your site.

The selectors for each of these elements are defined in Nabbar.css, but by default, the wrapper is expected to have an attribute of:

```
className="App" 
```

and the body should have an attribute of:

```
className="Body"
```

A mockup of the top-level component's render method is as follows:

``` js
render() {
  return (
    <div className="App">
      <Nabbar />
      <div className="Body">
        Body content/component goes here.
      </div>
    </div>
  )
}
```

### Defining Menu Items

Menu Items in your navigation are defined as an array of objects, and can be passed to Nabbar as props under the name "menu_items", as follows:

```js
<Nabbar menu_items={menu_items_object_array} />
```

When clicked, Menu Items can either call a component function or link to a route, depending on how you define your menu item objects.

Each menu item object is laid out as follows:

```js
   {
      // title is required
      title: Title Of Menu Item, 

      // href should only be declared if the menu item is a link
      href: The link the the menu item points to,

      // onClick should only be declared if the menu item calls a function
      onClick: The function to be called when clicking the menu item
   }
```

Creating an array of these objects and passing them to Nabbar as props ensures that they will be placed on the navigation. See below for example:

```js
render() {
    let menu_items = [
        {
            title: "# Menu Item 1",
            href:  "/link_for_menu_item_1"
        },
        {
            title: "# Menu Item 2",
            onClick:  this.FunctionCalledByMenuItem2
        }
    ];
    return (
        <div className="App">
            <Nabbar menu_items={menu_items} />
            <div className="Body">
            </div>
        </div>
    );
}
```


**[Back to top](#table-of-contents)**

## Built With

* [React](https://facebook.github.io/react/) - The web framework that powers the site
* [Webpack](https://webpack.github.io/) - A module builder automate development and production build processes
* [Babel](https://babeljs.io/) - Transpiler to convert raw React code into browser-ready HTML and Javascript
* [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - CSS Grid was the inspiration for this project, and is actually amazingly fun to work with

**[Back to top](#table-of-contents)**

## Contributing

I'm always happy to receive pull requests, questions/issues regarding code, and feature requests on all my projects. Please feel free to open an issue, submit a pull request, or just contact me directly because that's probably easier.

**[Back to top](#table-of-contents)**

## Authors

* **[Sam Messina](https://www.github.com/regexpressyourself)** - *Sole Developer* 

**[Back to top](#table-of-contents)**

## License

Nabbar Nav is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


**[Back to top](#table-of-contents)**

