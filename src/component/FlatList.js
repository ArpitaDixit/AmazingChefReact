import React from "react";

/**
 * Utility to render a Flat List given a data array.
 *
 * @props data: data array to be render
 * @props keyExtractor: a function take in an array element and return unique key for each element
 *                if element already have unique key field, this props is not necessary
 * @props renderItem: function take in two parameters item and index to render each element
 */
export class FlatList extends React.Component {
    _keyExtractor = (item) => {
        return item.key || '';
    };

    _renderData() {
        let data = this.props.data;
        let keyExtractor = this.props.keyExtractor || this._keyExtractor;
        let listItems = data.map((item, index) => {
            return (
                <li key={keyExtractor(item)}>
                    {this.props.renderItem(item, index)}
                </li>
            )
        });
        return listItems;
    }

    render() {
        return (
            <ul>{this._renderData()}</ul>
        )
    }
}