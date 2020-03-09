import React from 'react';
import Board from './Board'
var _ = require('lodash');

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            history: []
        }
    }

    // funtion to reset the board
    resetBoard = () => {
        this.setState({
            history: [],
            xIsNext: true
        })
    }

    // function to handle every click of button
    handleClick = (i) => {
        const { history } = _.cloneDeep(this.state);
        if (this.calculateWinner(history) || history[i])
            return;
        history[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history,
            xIsNext: !this.state.xIsNext
        });

    }

    // function to check if user won
    calculateWinner = () => {
        const { history } = this.state
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (history[a] && history[a] === history[b] && history[b] === history[c]) {
                return history[a];
            }
        }
        return null;
    }

    //function to check if board ended with draw
    checkDraw = () => {
        const { history } = this.state
        if (history.length === 9 && this.allWithValues())
            return true;
        else
            return false
    }

    allWithValues = () => {
        const { history } = this.state
        for (let i in history) {
            if (!history[i]) return false
        }
        return true;
    }

    // function to display the status
    setStatus = () => {
        const winner = this.calculateWinner();
        const status = winner ? ('Winner is ' + winner) :
            this.checkDraw() ? 'Draw'
                : ('Next Player is ' + (this.state.xIsNext ? 'X' : 'O'));

        return status
    }

    render() {
        const { history } = _.cloneDeep(this.state);
        const status = this.setStatus();

        return (
            <div className="game">
                <h1>Tic - Toc Game</h1>
                <div className="game-board">
                    <Board
                        onClick={(i) => this.handleClick(i)}
                        squares={history}
                        status={status}
                        reset={() => this.resetBoard()} />
                </div>
            </div>
        );
    }
};

