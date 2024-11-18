import { useState, useEffect } from "react";
import moment from "moment";

function Timer() {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p className="text-sm text-grey-light">{currentTime.format("MMMM Do YYYY, h:mm:ss a")}</p>;
}

export default Timer;
