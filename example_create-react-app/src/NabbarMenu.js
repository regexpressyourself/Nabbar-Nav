import React, { Component} from 'react';

class NabbarMenu extends Component {
    /* NOTES:
     * - this.state.menu_items holds the menu item list. 
     * - Each menu item needs a title 
     * - Each menu item needs either an href or onClick attribute
     *     - href works for menu items that are links
     *     - onClick works for menu items that call functions
     * - Add as many or as few menu items as you want */
    constructor(props) {
        super(props);
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
            // li_elements will store the actual <li> tags for our nav
            li_elements: []
        };
    }

    tempFunc() {
        alert("Woah, I'm a function!");
    }

    componentWillMount() {
        /* Create the menu list elements, stored in this.sate.li_elements */
        let li_elements = this.state.menu_items.map((menu_item) => {
            if (menu_item.href) {
                return (
                    <li key={menu_item.title} className="nav-menu-item">
                        <a  className="nav-menu-link" 
                            href={menu_item.href}>
                            <span>
                            {menu_item.title}
                        </span>
                        </a>
                    </li>
                );
            }
            else if (menu_item.onClick) {
                return (
                    <li key={menu_item.title} className="nav-menu-item">
                        <span  className="nav-menu-link" 
                            onClick={menu_item.onClick}>
                            <span>
                            {menu_item.title}
                        </span>
                        </span>
                    </li>
                );
            }
        });
        this.setState({
            li_elements: li_elements
        });
    }

    render() {
        return (
            <ul id="nav-menu">
                {/* Show the list elements created in componentWillMount */}
                {this.state.li_elements}
            </ul>
        );
    }
}

export default NabbarMenu;
