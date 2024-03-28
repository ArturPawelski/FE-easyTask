import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';

const LoadingPage: React.FC = () => {
  return (
    <Center bg={'black'} h='100vh'>
      <Spinner thickness='5px' speed='0.65s' emptyColor='white' color='blue.500' size='xl' />
    </Center>
  );
};

export default LoadingPage;
