import { Box, Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';

const Auth: React.FC = () => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  return (
    <Box w='100%' h='100vh' p={4} color='black' bgGradient='linear(to-br, black, purple.800)'>
      <Center h='100%'>
        {authMode === 'login' && <Login setAuthMode={setAuthMode} />}
        {authMode === 'register' && <Register setAuthMode={setAuthMode} />}
      </Center>
    </Box>
  );
};

export default Auth;
