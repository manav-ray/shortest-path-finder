
/**
 * Main depth first search function.
 * 
 * @param {*} startPoint starting point.
 * @param {*} endPoint ending point.
 * @param {*} grid whole grid.
 * @returns all visited points part of bfs in order.
 */
export const depthFirstSearch = (startPoint, endPoint, grid) => {
    const pointsInOrder = [];

    const stack = [];
    startPoint.setDistance(0);
    stack.push(startPoint);

    while(stack.length > 0) {
        const currPoint = stack.pop();

        if(currPoint.equals(endPoint)) {
            return pointsInOrder;
        }

        if(!currPoint.isVisited) {
            currPoint.setVisited(true);
            pointsInOrder.push(currPoint);
            var neighbors = [];
            const rowVal = currPoint.x;
            const colVal = currPoint.y;

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
                neighbors[x].setDistance(currPoint.distance + 1);
                neighbors[x].setPrevious(currPoint);
                stack.push(neighbors[x]);
            }
        }
    }
}