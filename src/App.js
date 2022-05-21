import React, { useEffect, useRef, useState} from "react";
import "./App.css";

export default function App() {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    ref.current.style.backgroundColor = 'green'
    setTimeout(() => {
      ref.current.style.backgroundColor = 'red'
      setCount(count+1)
    }, 3000);
    
  }, [count]);
  return (
    <div className="square" ref={ref} >
    </div>
  );
}
