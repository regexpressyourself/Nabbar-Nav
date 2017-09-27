
<img alt="Nabbar Nav" align="right" src="./nabber_logo.png" width="400px"/>

# Nabbar Nav

A general purpose nav bar component for React, using CSS grid.

[See it live here!](https://smessina.com/gitflow/#/)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Deployment](#deployment)
2. [Built With](#built-with)
3. [Contributing](#contributing)
3. [Authors](#authors)
3. [License](#license)


## Introduction

"Nabbar": an unfortunately common typo for "navbar"


Nabbar Nav is a React component for navigation bars, made to fit into existing projects with relative ease.

The inspiration for Nabbar came out of my interest in CSS Grid. Until learning grid, I had relied on Bootstrap for most of my layout needs. The power of CSS Grid made me think I could do without Bootstrap, and so far that has been the case. One component I missed, however, was the nav bar. With that in mind, I set out to make one of my own and ended up with Nabbar.


## Getting Started

### Prerequisites

Because Nabbar is a React Component, it is expected that you have a React site ready for it. If you are starting from scratch, I recommend using Facebook's own create-react-app, and have included an example in example-create-react-app. 

### Component Hierarchy

There is also a specific way to set up your component hierarchy if you want to start using Nabbar out of the box. In addition the Nabbar component, you will need at least two others: a main wrapper which will call Nabbar, and a body element which will hold the body of your site.

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
render {
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

### Installing

#### Manual Installation 

First, clone the project to a local directory.

```
   git clone https://github.com/regexpressyourself/Nabbar-Nav.git && cd Nabbar-Nav
```

Then simply include the Nabbar component as shown above.

#### Using NPM

```
   npm install
```

#### Using Yarn

```
   yarn install
```

**[Back to top](#table-of-contents)**

## Deployment


**[Back to top](#table-of-contents)**

## Built With

* [React](https://facebook.github.io/react/) - The web framework that powers the site
* [Webpack](https://webpack.github.io/) - A module builder automate development and production build processes
* [Babel](https://babeljs.io/) - Transpiler to convert raw React code into browser-ready HTML and Javascript
* [CSS Grid]() - CSS Grid was the inspiration for this project, and is actually amazingly fun to work with

**[Back to top](#table-of-contents)**

## Contributing

I'm always happy to receive pull requests, questions/issues regarding code, and feature requests on all my projects. Please feel free to open an issue or submit a pull request.

**[Back to top](#table-of-contents)**

## Authors

* **[Sam Messina](https://www.github.com/regexpressyourself)** - *Sole Developer* 

**[Back to top](#table-of-contents)**

## License

Nabbar Nav is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


**[Back to top](#table-of-contents)**

