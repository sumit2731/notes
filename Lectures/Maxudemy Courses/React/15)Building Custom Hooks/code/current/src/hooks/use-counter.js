import {useState, useEffect} from 'react';
/**
 * @Desc hooks are function whose name needs to starts with use
 * there we can write stateful logic in here, we can use other react hooks here, which allows us
 * to share logic across the components
 */

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(forwards) setCounter((prevCounter) => prevCounter + 1);
        else setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;