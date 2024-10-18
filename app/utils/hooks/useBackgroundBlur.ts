import { useEffect } from 'react';

function useBlurBackground(modalRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!modalRef.current) return;

    const modalElement = modalRef.current;

    const backdrop = document.createElement('div');
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100vw';
    backdrop.style.height = '100vh';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    backdrop.style.zIndex = '1000';
    document.body.appendChild(backdrop);

    const allElements = Array.from(document.body.children) as HTMLElement[];

    allElements.forEach((el) => {
      if (
        !modalElement.contains(el) &&
        el !== modalElement &&
        el !== backdrop
      ) {
        el.style.filter = 'blur(5px)';
      }
    });

    return () => {
      allElements.forEach((el) => {
        if (el.style.filter === 'blur(5px)') {
          el.style.filter = '';
        }
      });
      document.body.removeChild(backdrop);
    };
  }, [modalRef]);
}

export default useBlurBackground;
