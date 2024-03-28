import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface AnimatedPresenceContainerProps {
  isVisible: boolean;
  children: React.ReactNode;
}

const animationVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const AnimatedPresenceContainer: React.FC<AnimatedPresenceContainerProps> = ({ isVisible, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial='hidden' animate='visible' exit='hidden' variants={animationVariants} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
