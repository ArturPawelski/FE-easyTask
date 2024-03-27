import { Container, ContainerProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const defaultVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface MotionContainerProps extends ContainerProps {
  variants?: typeof defaultVariants;
  initial?: string;
  animate?: string;
  shouldAnimate?: boolean;
}

export const MotionContainer: React.FC<MotionContainerProps> = ({ children, variants = defaultVariants, initial = 'hidden', animate = 'visible', shouldAnimate = true, ...props }) => {
  const MotionContainerComponent = motion(Container);
  return (
    <MotionContainerComponent variants={variants} initial={shouldAnimate ? initial : undefined} animate={shouldAnimate ? animate : undefined} {...props}>
      {children}
    </MotionContainerComponent>
  );
};
