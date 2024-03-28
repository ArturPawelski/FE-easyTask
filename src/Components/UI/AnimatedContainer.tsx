import { Container, ContainerProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const defaultVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

interface MotionContainerProps extends ContainerProps {
  variants?: typeof defaultVariants;
  initial?: string;
  animate?: string;
}

const MotionContainer: React.FC<MotionContainerProps> = ({ children, variants = defaultVariants, initial = 'hidden', animate = 'visible', ...props }) => {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const MotionContainerComponent = motion(Container);

  return (
    <MotionContainerComponent variants={variants} initial={shouldAnimate ? initial : undefined} animate={shouldAnimate ? animate : undefined} {...props}>
      {children}
    </MotionContainerComponent>
  );
};

export default MotionContainer;
