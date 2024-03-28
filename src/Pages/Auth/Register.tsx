import { Flex, Text, Heading, VStack, Input, Button, FormLabel, FormControl, FormErrorMessage, InputGroup, InputRightElement, Container, Box, Center, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { useRegister } from '../../Hooks/Auth/useRegister';

const Register: React.FC = () => {
  const toast = useToast();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInterface>();
  const { mutate: registerUser, isLoading, error } = useRegister();

  const onSubmit: SubmitHandler<SignUpInterface> = (userData) => {
    registerUser(userData, {
      onSuccess: (data) => {
        toast({
          title: 'Success',
          description: 'You have successfully registered.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error: any) => {
        const errorMessage = error.response?.data?.message || 'An error occurred during registration.';
        toast({
          title: 'Error',
          description: errorMessage,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    });
  };

  return (
    <Box w='100%' h='100vh' p={4} color='black' bgGradient='linear(to-br, black, purple.800)'>
      <Center h='100%'>
        <Container bg='white' p={4} rounded={20}>
          <Heading textAlign='center' bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
            EasyTask
          </Heading>
          <Text mt={2} textAlign='center' fontSize='xl' fontWeight='normal'>
            Create your account
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
              <FormControl w={['100%', '80%']} mx={['0', 'auto']} isInvalid={!!errors.name}>
                <FormLabel fontWeight='bold' htmlFor='name'>
                  Name
                </FormLabel>
                <Input id='username' placeholder='Enter your username' {...register('name', { required: 'Username is required' })} />
                <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
              </FormControl>

              <FormControl w={['100%', '80%']} mx={['0', 'auto']} isInvalid={!!errors.email}>
                <FormLabel fontWeight='bold' htmlFor='email'>
                  Email
                </FormLabel>
                <Input id='email' placeholder='Enter your email' {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' } })} />
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
              </FormControl>

              <FormControl w={['100%', '80%']} mx={['0', 'auto']} isInvalid={!!errors.confirmEmail}>
                <FormLabel fontWeight='bold' htmlFor='confirmEmail'>
                  Confirm Email
                </FormLabel>
                <Input id='confirmEmail' placeholder='Confirm your email' {...register('confirmEmail', { validate: (value) => value === watch('email') || 'The emails do not match' })} />
                <FormErrorMessage>{errors.confirmEmail && errors.confirmEmail.message}</FormErrorMessage>
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

              <FormControl w={['100%', '80%']} mx={['0', 'auto']} isInvalid={!!errors.confirmPassword}>
                <FormLabel fontWeight='bold' htmlFor='confirmPassword'>
                  Confirm Password
                </FormLabel>
                <InputGroup>
                  <Input
                    id='confirmPassword'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Confirm your password'
                    {...register('confirmPassword', {
                      required: 'Confirm Password is required',
                      validate: (value) => value === watch('password') || 'The passwords do not match',
                    })}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.confirmPassword && errors.confirmPassword.message}</FormErrorMessage>
              </FormControl>

              <Button
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
                <Link to='/auth/login'>
                  <Text cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
                    Sign In
                  </Text>
                </Link>
              </Flex>
            </VStack>
          </form>
        </Container>
      </Center>
    </Box>
  );
};

export default Register;
