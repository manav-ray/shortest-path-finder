export class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isStart = false;
        this.isEnd = false;
        this.distance = Infinity;
        this.isVisited = false;
        this.previous = null;
        this.isWall = false;

        this.setWall = (boolean) => {
            this.isWall = boolean;
        }

        this.setPrevious = (point) => {
            this.previous = point;
        }

        this.setStart = (boolean) => {
            this.isStart = boolean;
        }

        this.setEnd = (boolean) => {
            this.isEnd = boolean;
        }

        this.setDistance = (newDistance) => {
            this.distance = newDistance;
        }

        this.setVisited = (boolean) => {
            this.isVisited = boolean;
        }

        this.equals = (comparePoint) => {
            return this.x === comparePoint.x && this.y === comparePoint.y;
        }
    }

    
}