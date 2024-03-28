import React from 'react';
import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Center h='100vh' w='full'>
      <VStack spacing={6}>
        <Box textAlign='center'>
          <Heading mb={2}>Page Not Found</Heading>
          <Text>The page you are looking for does not exist or has been moved.</Text>
        </Box>
        <Button colorScheme='teal' onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFoundPage;
