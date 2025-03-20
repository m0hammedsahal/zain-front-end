import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SplineBackground = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
    console.error('Failed to load Spline scene');
  };

  // Fallback background animation
  const FallbackBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-700/20 rounded-full filter blur-3xl"
      />
    </div>
  );

  return (
    <div className="fixed inset-0 -z-10 w-full h-screen bg-black">
      {!error ? (
        <div className="relative w-full h-full">
          <Spline
            scene="https://prod.spline.design/scrollbasedinteracvtivemacbookpro-17b4ba19903c98f218dc70372d0a7127/scene.splinecode"
            onLoad={handleLoad}
            onError={handleError}
            style={{
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out',
              width: '100%',
              height: '100%'
            }}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-amber-400/20 border-t-amber-400 rounded-full"
              />
            </div>
          )}
        </div>
      ) : (
        <FallbackBackground />
      )}
    </div>
  );
};

export default SplineBackground;