import React from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuItems: [], loading: true };
    }

    componentDidMount() {
        this.loadMenuItems();
    }

    static renderMenuItems(menuItems) {
        return (
            <center>
                <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Add to order?</th>
                </tr>
                </thead>
                <tbody>
                {menuItems.map(menuItem =>
                    <MenuItem item={menuItem}></MenuItem>
                )}
                </tbody>
            </table>
            </center>
        );
    }

    render() {
        let contents = this.state.loading ? <span>Loading...</span> : Menu.renderMenuItems(this.state.menuItems)

        return (
            <div>
                {contents}
                <button onClick={() => this.loadMenuItems()}>Reload!</button>
            </div>
        );
    }

    async loadMenuItems() {
        const response = await fetch("https://localhost:5001/MenuItems")
        const data = await response.json();
        this.setState({ menuItems: data, loading: false});
    }
}

export default Menu;