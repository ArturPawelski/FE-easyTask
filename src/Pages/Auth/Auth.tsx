import { Box, Flex, Container, Image, Text, Center, Heading, VStack, Input } from '@chakra-ui/react';
import React from 'react';
import Login from './Login';

const Auth: React.FC = () => {
  return (
    <Box w='100%' h='100vh' p={4} color='black' bgGradient='linear(to-br, black, purple.800)'>
      <Center h='100%'>
        <Login />
      </Center>
    </Box>

    // <Container maxW="container.xl" p={4}>
    //   <Flex direction={['column', 'column', 'row']} align="center" justify="space-between">
    //     <Box w={['100%', '100%', '50%',"30%", "15%"]} p={4}>
    //       <Text fontSize="2xl" fontWeight="bold">Logowanie</Text>
    //     </Box>

    //     <Box w={['100%', '100%', '50%']} p={4} textAlign="center">
    //       <Image src="/sciezka/do/zdjecia.jpg" alt="Zdjęcie" mb={4} />
    //       <Text fontSize="xl">Opis obok zdjęcia</Text>
    //     </Box>
    //   </Flex>
    // </Container>
  );
};

export default Auth;
