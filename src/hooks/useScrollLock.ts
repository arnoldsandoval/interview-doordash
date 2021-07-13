import { useEffect } from 'react';

function useScrollLock(active, querySelector = 'body') {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(querySelector);
    let scrollPosition = 0;

    const onActivate = () => {
      scrollPosition = window.pageYOffset;
      el.style.overflow = 'hidden';
      el.style.position = 'fixed';
      el.style.top = `-${scrollPosition}px`;
      el.style.width = '100%';
    }

    const onDeactivate = () => {
      el.style.removeProperty('overflow');
      el.style.removeProperty('position');
      el.style.removeProperty('top');
      el.style.removeProperty('width');
      window.scrollTo(0, scrollPosition);
    }

    if (active) {
      onActivate();
    } else {
      onDeactivate();
    }
    
    return () => {
      onDeactivate();
    };

  }, [active]);
}

export default useScrollLock