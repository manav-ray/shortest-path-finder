import React, {useState} from "react";
import "./../main.css"

export default function Node ({point, numSpecials, setNumSpecials}) {
    const [classes, setClasses] = useState("");

    /**
     * Sets the start and end points.
     */
    const setPoint = () => {
        point.setWall(false);

        if(!point.isStart && !point.isEnd) {
            if (numSpecials === 2) {
                return;
            }
            setNumSpecials(numSpecials + 1);
            point.setStart(true);
        } else if (point.isStart) {
            point.setStart(false);
            point.setEnd(true);
        } else if (point.isEnd) {
            setNumSpecials(numSpecials - 1);
            point.setStart(false);
            point.setEnd(false);
        }

        var tempClass = "";
        tempClass = point.isStart ? "node-start" : point.isEnd ? "node-end" : "";
        setClasses(tempClass);
    }

    /**
     * Adds a wall point to the grid.
     */
    const addWall = (e) => {
        // console.log(e.key);

        if (e.key === 'w') {
            if (!point.isStart && !point.isEnd) {
                point.setWall(true);
                setClasses("node-wall");
            }
        }
    }

    /**
     * The two functions below are helper functions for adding walls.
     */
    const mouseIn = () => {
        document.addEventListener("keypress", addWall);
    }

    const mouseOut = () => {
        document.removeEventListener("keypress", addWall);
    }

    return (
        <div id={`node-${point.x}-${point.y}`} className={`node ${classes}`} onClick={setPoint} onMouseOver={mouseIn} onMouseOut={mouseOut} />
    )
}