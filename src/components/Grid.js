import React, {useEffect, useState} from "react";
import {Point} from './../Objects/Point';
import Node from './Node';
import {Button} from 'react-bootstrap';
import './../main.css'

export default function Grid () {

    const [grid, setGrid] = useState([]);
    const [numSpecials, setNumSpecials] = useState(0);

    useEffect(() => { 
        initGrid(30, 80);
    }, [])

    
    /**
     * Initializes an empty grid.
     * 
     * @param {*} rows # of rows
     * @param {*} cols # of columns.
     */
    const initGrid = (rows, cols) => {
        const tempGrid = [];

        for(let i = 0; i < rows; i++) {
            const currRow = [];
            for(let j = 0; j < cols; j++) {
                currRow.push(new Point(i, j));
            }   

            tempGrid.push(currRow);
        }

        setGrid(tempGrid);
    }


    /**
     * Calls and visualizes the breadth first search algorithm.
     */
    const bfs = () => { 
        var startPoint = null;
        var endPoint = null;

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if (grid[i][j].isStart) {
                    startPoint = grid[i][j];
                }
                else if(grid[i][j].isEnd) {
                    endPoint = grid[i][j];
                }
            }
        }
    }
    
    return (
        <div className="container">
            <h1>Pathfinding Visualizer</h1>
            <br/>
            <Button style={{marginBottom: '15px'}} onClick={bfs}>Breadth First Search</Button>
            <div>
                {grid.map((row, rowId) => {
                    return (
                        <div key={rowId} className="rowContainer">
                            {row.map((col, colId) => {
                                return (
                                    <Node key={colId} point={grid[rowId][colId]} numSpecials={numSpecials} setNumSpecials={setNumSpecials} />
                                )
                            })}
                        </div>
                    )
                    })}
            </div>
        </div>    
    )
}