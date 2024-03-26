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
}

export const MotionContainer: React.FC<MotionContainerProps> = ({ children, variants = defaultVariants, initial = 'hidden', animate = 'visible', ...props }) => {
  const MotionContainerComponent = motion(Container);
  return (
    <MotionContainerComponent variants={variants} initial={initial} animate={animate} {...props}>
      {children}
    </MotionContainerComponent>
  );
};
