
/**
 * Main breadth first search function.
 * 
 * @param {*} startPoint starting point.
 * @param {*} endPoint ending point.
 * @param {*} grid whole grid.
 * @returns all visited points part of bfs in order.
 */
export const breadthFirstSearch = (startPoint, endPoint, grid) => {
    // console.log("YEEEEE");
    var pointsInOrder = []
    startPoint.setDistance(0);
    const unvisited = getAllPoints(grid);

    while(unvisited.length > 0) {
        unvisited.sort((point1, point2) => point1.distance - point2.distance);
        const closestPoint = unvisited.shift();

        closestPoint.setVisited(true);
        pointsInOrder.push(closestPoint);
        if(closestPoint.isEnd) {
            return pointsInOrder;
        }        

        var neighbors = [];
        const rowVal = closestPoint.x;
        const colVal = closestPoint.y;

        if(rowVal > 0) {
            neighbors.push(grid[rowVal - 1][colVal]);
        }
        if(rowVal < grid.length - 1) {
            neighbors.push(grid[rowVal + 1][colVal])
        }
        if (colVal > 0) {
            neighbors.push(grid[rowVal][colVal - 1]);
        }
        if(colVal < grid[rowVal].length - 1) {
            neighbors.push(grid[rowVal][colVal + 1]);
        }
        
        neighbors = neighbors.filter(neighbor => !neighbor.isVisited);

        for(let x = 0; x < neighbors.length; x++) {
            neighbors[x].setDistance(closestPoint.distance + 1);
        }
        
    }

    return pointsInOrder;
}

/**
 * Helper function to return all points in grid, as an array.
 * @param {*} grid whole grid. 
 * @returns all points as an array.
 */
const getAllPoints = (grid) => {
    const points = [];
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            points.push(grid[i][j]);
        }
    }

    return points;
}