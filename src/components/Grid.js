import React, {useEffect, useState} from "react";
import {Point} from './../Objects/Point';
import Node from './Node';
import {Button, Modal} from 'react-bootstrap';
import './../main.css'
import {breadthFirstSearch, shortestPathInOrder} from './../algorithms/bfs';

export default function Grid () {

    const [grid, setGrid] = useState([]);
    const [numSpecials, setNumSpecials] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

        if(startPoint === null || endPoint === null) {
            handleShow();
            return;
        }

        const pointsInOrder = breadthFirstSearch(startPoint, grid);
        for(let k = 0; k <= pointsInOrder.length; k++) {
            if (k === pointsInOrder.length) {
                setTimeout(() => { 
                    const shortestPath = shortestPathInOrder(endPoint);
                    for(let k = 0; k < shortestPath.length; k++) {
                        setTimeout(() => { 
                            const currPoint = shortestPath[k];
                            if (!currPoint.equals(startPoint) && !currPoint.equals(endPoint)) {
                                document.getElementById(`node-${currPoint.x}-${currPoint.y}`).className = 'node node-path';
                            }
                        }, 20 * k)
                    }
                }, 2 * k)
            }
            else {
                setTimeout(() => { 
                    const currPoint = pointsInOrder[k];
                    if (!currPoint.equals(startPoint) && !currPoint.equals(endPoint)) {
                        document.getElementById(`node-${currPoint.x}-${currPoint.y}`).className = 'node node-visited';
                    }
                }, 2 * k)
            }
        }
    }
    
    return (
        <div className="container">
            <h1>Pathfinding Visualizer</h1>
            <br/>
            <Button style={{marginBottom: '15px', marginRight: '10px'}} onClick={() => window.location.reload(false)}>Reset</Button>
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Illegal grid state. Please specify a start and end point.</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>    
    )
}