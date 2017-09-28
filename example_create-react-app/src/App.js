import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nabbar from './Nabbar';

class App extends Component {
    /* NOTES:
     * - this.state.menu_items holds the menu item list, and
     *      is passed to Nabbar as props
     * - Each menu item needs a title 
     * - Each menu item needs either an href or onClick attribute
     *     - href works for menu items that are links
     *     - onClick works for menu items that call functions
     * - Add as many or as few menu items as you want */
    constructor() {
        super();
        this.state = {
            menu_items: [
                // Form: {
                //      title: title of link in nav bar,
                //      href:  where that link should point to
                //     }
                {
                    title: "# Nabbar Nav",
                    href:  "#"
                },
                {
                    title: "# Makes it easy",
                    href:  "#"
                },
                {
                    title: "# To add a Nav bar",
                    onClick:  this.tempFunc
                },
                {
                    title: "# To your website",
                    href:  "#"
                }
            ],
        };
    }

    tempFunc() {
        alert("Woah, I'm a function!");
    }

    render() {
        let menu_items = [
            {
                title: "# Menu Item 1",
                href:  "/link_for_menu_item_1"
            },
            {
                title: "# Menu Item 2",
                onClick:  this.FunctionCalledByMenuItem2
            },
        ];
        return (
            <div className="App">
                <Nabbar menu_items={this.state.menu_items} />
                <div className="Body">

                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
