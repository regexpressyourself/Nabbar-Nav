import React, { Component} from 'react';

class NavMenu extends Component {
    /* NOTES:
     * - this.state.menu_items holds the menu item list. 
     * - Each menu item needs a title and a link destination, as shown below. 
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
                    title: "# Nabber Nav",
                    href:  "/menu-item-1"
                },
                {
                    title: "# Makes it easy",
                    href:  "/menu-item-2"
                },
                {
                    title: "# To add a Nav bar",
                    href:  "/menu-item-3"
                },
                {
                    title: "# To your website",
                    href:  "/menu-item-4"
                }
            ],
            // li_elements will store the actual <li> tags for our nav
            li_elements: []
        };
    }

    componentWillMount() {
        /* Create the menu list elements, stored in this.sate.li_elements */
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
