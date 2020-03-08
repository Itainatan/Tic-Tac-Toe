import React from 'react';

export default class Square extends React.Component {
    render() {
        return (
            <button className="square" style={{ 'width': '40px', 'height': '40px' }} onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
};
