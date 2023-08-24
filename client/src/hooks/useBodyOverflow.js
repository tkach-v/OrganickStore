import { useEffect } from 'react';

// block scrolling
const useBodyOverflow = (hiddenOverflow) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (hiddenOverflow) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => (body.style.overflow = 'auto');
  }, [hiddenOverflow]);
};

export default useBodyOverflow;