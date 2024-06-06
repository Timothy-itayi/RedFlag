import React, { useState, useEffect, useRef } from 'react';

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
        className="fixed bottom-10 right-10 py-2 px-4 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={scrollToTop}
        >
           Return to Top
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
