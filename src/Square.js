import React from 'react';

const areEqual = (prevProps, nextProps) => {
    return (prevProps.value === nextProps.value) || (prevProps.disable !== nextProps.disable)

}

function Square(props) {
    return (
        <button className="square" disabled={props.disable || props.value} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

const SquareWithMemo = React.memo(Square, areEqual);

export default SquareWithMemo;

