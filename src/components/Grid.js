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
        const width = window.innerWidth;
        const height = window.innerHeight;

        console.log(height, width);

        initGrid(height / 28, width / 20);


        function handleResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            console.log(height, width);

            initGrid(height / 28, width / 20);
        }

        window.addEventListener('resize', handleResize);
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
     * Calls and visualizes the depth first search algorithm.
     */
    const generateMaze = () => {
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if (grid[i][j].isStart || grid[i][j].isEnd) {
                    continue;
                }
                if(grid[i][j].isWall) {
                    grid[i][j].setWall(false);
                    document.getElementById(`node-${grid[i][j].x}-${grid[i][j].y}`).className = 'node';
                }
            }
        }

        const walls = []

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if (grid[i][j].isStart || grid[i][j].isEnd) {
                    continue;
                }
                const randInt = getRandomInt(4);
                if(randInt === 0) {
                    grid[i][j].setWall(true);
                    walls.push(grid[i][j]);
                }
            }
        }

        for(let k = 0; k < walls.length; k++) {
            setTimeout(() => { 
                const currPoint = walls[k];
                document.getElementById(`node-${currPoint.x}-${currPoint.y}`).className = 'node node-wall';
            }, 2 * k)
            
        }


    }

    /**
     * Helper function to get random integer.
     * @param {*} max ceiling
     * @returns random int.
     */
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
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

        const pointsInOrder = breadthFirstSearch(startPoint, endPoint, grid);
       
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
        <>
            <div className="container">
            <h1 style={{marginBottom: '15px'}} >Pathfinding Visualizer</h1>
                <Button style={{marginBottom: '15px', marginRight: '10px'}} onClick={() => window.location.reload(false)}>Reset</Button>
                <Button style={{marginBottom: '15px', marginRight: '10px'}} onClick={generateMaze}>Generate Maze</Button>
                <Button style={{marginBottom: '15px', marginRight: '10px'}} onClick={bfs}>Breadth First Search</Button>
            </div>
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
        </>    
    )
}