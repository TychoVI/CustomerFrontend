import React from "react";

class MenuItem extends React.Component {
    render() {
        let menuItem = this.props.item;

        return (
            <tr key={menuItem.id}>
                <td>{menuItem.name}</td>
                <td>{menuItem.price}</td>
                <td></td>
            </tr>
        );
    }
}

export default MenuItem;