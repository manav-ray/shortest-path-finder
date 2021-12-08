import React, {useState} from "react";
import "./../main.css"

export default function Node ({point, numSpecials, setNumSpecials}) {
    const [classes, setClasses] = useState("");
    
    const setPoint = () => {
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

    return (
        <div id={`node-${point.x}-${point.y}`} className={`node ${classes}`} onClick={setPoint}/>
    )
}