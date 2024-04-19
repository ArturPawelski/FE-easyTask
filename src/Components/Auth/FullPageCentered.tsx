import React from 'react';
import { Box, Center } from '@chakra-ui/react';

const FullPageCentered: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box w='100%' h='100vh' p={4} color='black' bgGradient='linear(to-br, black, purple.800)'>
      <Center h='100%'>{children}</Center>
    </Box>
  );
};

export default FullPageCentered;
