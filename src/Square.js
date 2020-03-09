import React from 'react';

const areEqual = (prevProps, nextProps) => {
    const toRender = (prevProps.disable !== nextProps.disable) || (prevProps.value !== nextProps.value);
    return !toRender;
}

const Square = props => {
    return (
        <button className="square" disabled={props.disable || props.value} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

const SquareWithMemo = React.memo(Square, areEqual);

export default SquareWithMemo;

