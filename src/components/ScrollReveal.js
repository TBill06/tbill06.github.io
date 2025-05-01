import { useEffect, useRef } from 'react';

const ScrollReveal = ({ children, animation = 'fadeIn', threshold = 0.2, delay = 0 }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(`animated-${animation}`);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animation, threshold, delay]);
  
  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
};

export default ScrollReveal;