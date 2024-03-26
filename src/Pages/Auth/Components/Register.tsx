import { Flex, Text, Heading, VStack, Input, Button, FormLabel, FormControl, FormErrorMessage, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { MotionContainer } from '../../../Components/UI/AnimatedContainer';

const Register: React.FC<RegisterPropsI> = ({ setAuthMode }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInterface>();

  const password = watch('password');

  const onSubmit: SubmitHandler<SignUpInterface> = (data) => {
    console.log(data);
  };

  return (
    <MotionContainer bg='white' p={4} rounded={20}>
      <Heading textAlign='center' bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
        EasyTask
      </Heading>
      <Text mt={2} textAlign='center' fontSize='xl' fontWeight='normal'>
        Create your account
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
            <Text onClick={() => setAuthMode('register')} cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
              Sign Up
            </Text>
          </Flex>
        </VStack>
      </form>

      <Text onClick={() => setAuthMode('login')} cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
        Sign In
      </Text>
    </MotionContainer>
  );
};

export default Register;
