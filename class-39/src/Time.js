import React, { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // ------------- componentOnMount
    const interval = setInterval(() => setTime(new Date()), 1000);

    // ------------- on unmount
    return () => clearInterval(interval);
  }, []);

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
