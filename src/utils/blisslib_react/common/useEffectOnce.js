
import { useEffect, useRef, useState } from 'react';

// TODO! debug encountering error 'effectFn.current() is not a function

/**
 * @method useEffectOnce
 * @author Niall Crosby
 * @see {@link https://blog.ag-grid.com/avoiding-react-18-double-mount/}
 * 
 * @description
 * alternate useEffect implementation for testing and logging purposes
 * that disables double call of contained logic within react strict mode
 */
const useEffectOnce = (effect) => {

    const effectFn = useRef(effect);
    const destroyFn = useRef();
    const effectCalled = useRef(false);
    const rendered = useRef(false);
    const [, setVal] = useState(0);
  
    if (effectCalled.current) {
      rendered.current = true;
    }
  
    useEffect(() => {
      // only execute the effect first time around
      if (!effectCalled.current) {
        destroyFn.current = effectFn.current();
        effectCalled.current = true;
      }

      // this forces one render after the effect is run
      setVal((val) => val + 1);

      return () => {
        // if the comp didn't render since the useEffect was called,
        // we know it's the dummy React cycle
        if (!rendered.current) { return; }

        // otherwise this is not a dummy destroy, so call the destroy func
        if (destroyFn.current) { destroyFn.current(); }
      };
    }, []);
  };

  export default useEffectOnce;