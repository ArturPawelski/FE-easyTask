import React from 'react';
import { Box, Spinner, Center } from '@chakra-ui/react';

const LoadingOverlay: React.FC<{ isLoading: boolean; children: React.ReactNode }> = ({ isLoading, children }) => {
  if (!isLoading) return <>{children}</>;

  return (
    <Box position='relative' w='100%' h='100%'>
      <Box position='absolute' top='0' left='0' right='0' bottom='0' backgroundColor='rgba(0, 0, 0, 0.4)' zIndex='overlay'>
        <Center w='100%' h='100%'>
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
        </Center>
      </Box>
      <Box filter='blur(2px)'>{children}</Box>
    </Box>
  );
};

export default LoadingOverlay;
