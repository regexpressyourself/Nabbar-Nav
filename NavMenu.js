import React, { Component} from 'react';

class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /* menu_items holds the menu item list. 
             * Each menu item needs a title and a link 
             * destination, as shown below. */
            menu_items: [
                {
                    title: "# Page 1",
                    href:  "/menu-item-1"
                },
                {
                    title: "# Page 2",
                    href:  "/menu-item-2"
                },
                {
                    title: "# Page 3",
                    href:  "/menu-item-3"
                },
                {
                    title: "# Page 4",
                    href:  "/menu-item-4"
                },
                {
                    title: "# Page 5",
                    href:  "/menu-item-5"
                }
            ],
            li_elements: []
        };
    }

    componentWillMount() {
        /* Create the menu list elements */
        let li_elements = this.state.menu_items.map((menu_item) => {
            return (
                <li key={menu_item.title} className="nav-menu-item">
                    <a  className="nav-menu-link" 
                        href={menu_item.href}>
                        {menu_item.title}
                    </a>
                </li>
            );
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

export default NavMenu;
