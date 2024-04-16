import { Flex, Container, Text, Heading, VStack, Input, Button, FormLabel, FormControl, FormErrorMessage, InputGroup, InputRightElement, Box, Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useLogin } from '../../Hooks/Auth/useLogin';

import ResendVerificationModal from '../../Components/Auth/ResendVerificationModal';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mutate: login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInterface>();

  const onSubmit: SubmitHandler<SignInInterface> = (loginData) => {
    login(loginData);
  };

  return (
    <Box w='100%' h='100vh' p={4} color='black' bgGradient='linear(to-br, black, purple.800)'>
      <Center h='100%'>
        <Container bg='white' p={4} rounded={20}>
          <Heading textAlign='center' bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
            EasyTask
          </Heading>
          <Text mt={2} textAlign='center' fontSize='xl' fontWeight='normal'>
            Sign in to your account
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
              <FormControl w={['100%', '80%']} mx={['0', 'auto']} isInvalid={!!errors.email}>
                <FormLabel fontWeight='bold' htmlFor='email'>
                  Email
                </FormLabel>
                <Input id='email' placeholder='Enter your email' {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' } })} />
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
              </FormControl>

              <FormControl w={['100%', '80%']} mx={['0', 'auto']} isInvalid={!!errors.password}>
                <FormLabel fontWeight='bold' htmlFor='password'>
                  Password
                </FormLabel>

                <InputGroup>
                  <Input id='password' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' {...register('password', { required: 'Password is required' })} />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
              </FormControl>

              <Button
                isLoading={isLoading}
                type='submit'
                colorScheme='blue'
                px={10}
                bgGradient='linear(to-l, #7928CA, #9D50BB)'
                _hover={{
                  bgGradient: 'linear(to-l, #6C63AC, #8E44AD)',
                  transform: 'translateY(-3px)',
                  transitionDuration: '0.s',
                  transitionTimingFunction: 'ease-in-out',
                }}
              >
                Sign In
              </Button>

              <Flex justifyContent='space-between' w={['100%', '90%', '80%']}>
                <Text cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
                  Forgot Password?
                </Text>
                <Link to='/auth/register'>
                  <Text cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
                    Sign Up
                  </Text>
                </Link>
              </Flex>
            </VStack>
          </form>
        </Container>
      </Center>
      <ResendVerificationModal />
    </Box>
  );
};

export default Login;
