import { useState } from "react";

function heading() {
    const[time, settime] = useState(new Date().toLocaleString());

    setInterval(() => {
      settime(new Date().toLocaleString())
    },1000);
    
    return<div className="box" id="heading">
        <h1>{time} </h1>
      </div>
}
export default heading;