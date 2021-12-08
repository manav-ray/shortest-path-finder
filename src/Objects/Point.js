export class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isStart = false;
        this.isEnd = false;

        this.setStart = (boolean) => {
            this.isStart = boolean;
        }

        this.setEnd = (boolean) => {
            this.isEnd = boolean;
        }

        this.equals = (comparePoint) => {
            return this.x === comparePoint.x && this.y === comparePoint.y;
        }
    }

    
}