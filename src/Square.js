import React from 'react';

export default class Square extends React.Component {

    shouldComponentUpdate(nextProps) {
        if (this.props.value !== nextProps.value || this.props.disable !== nextProps.disable)
            return true;
        else
            return false;
    }

    render() {
        return (
            <button className="square" disabled={this.props.disable || this.props.value} onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
};
