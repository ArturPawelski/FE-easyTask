import { Flex, Text, Heading, VStack, Input, Button, FormLabel, FormControl, FormErrorMessage, InputGroup, InputRightElement, Container, Box, Center, HStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';

const VerifyAccount: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ userCode: string }>();

  const onSubmit: SubmitHandler<{ userCode: string }> = ({ userCode }) => {
    console.log(userCode);
  };

  return (
    <Box w='100%' h='100vh' p={4} color='black' bgGradient='linear(to-br, black, purple.800)'>
      <Center h='100%'>
        <Container bg='white' p={4} rounded={20}>
          <Text fontSize='xl'>Enter your verification code</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.userCode}>
              <FormLabel fontWeight='bold' htmlFor='userCode'>
                Code
              </FormLabel>
              <Input id='userCode' placeholder='Enter your code' {...register('userCode', { required: 'The code is required' })} />
              <FormErrorMessage>{errors.userCode && errors.userCode.message}</FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme='teal' type='submit'>
              Verify
            </Button>
          </form>
        </Container>
      </Center>
    </Box>
  );
};

export default VerifyAccount;
