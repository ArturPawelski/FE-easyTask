import { Flex, Text, Heading, VStack, Input, Button, FormLabel, FormControl, FormErrorMessage, InputGroup, InputRightElement, Container, Box, Center, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useRegister } from '../../Hooks/Auth/useRegister';
import LoadingOverlay from '../../Components/UI/LoadingOverlay';
import ResendVerificationModal from '../../Components/Auth/ResendVerificationModal';
import { useResendVerificationModalStore } from '../../Store/Auth/useResendVerificationModalStore';
import FullPageCentered from '../../Components/Auth/FullPageCentered';

const Register: React.FC = () => {
  const { openModal } = useResendVerificationModalStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mutate: registerUser, isLoading, isSuccess } = useRegister();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInterface>();

  const onSubmit: SubmitHandler<SignUpInterface> = (userData) => {
    registerUser(userData);
  };

  if (isSuccess) {
    return (
      <FullPageCentered>
        <VStack spacing={5} p={5} bg='white' borderRadius='lg' boxShadow='lg' w={['90%', '70%', '60%', '30%']}>
          <HStack spacing={2} justify='center'>
            <Heading textAlign='center' color='purple.800'>
              Registration Successful!
            </Heading>
            <AiOutlineCheckCircle size='50px' color='green' />
          </HStack>
          <Text fontSize='md' textAlign='center'>
            We've sent an email to the address you provided. Please check your inbox and click on the link to verify your account.
          </Text>
          <Link to='/auth/login'>
            <Button colorScheme='purple' variant='solid'>
              Go to Login
            </Button>
          </Link>
          <Text onClick={openModal} cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
            Resend verification email
          </Text>
          <ResendVerificationModal />
        </VStack>
      </FullPageCentered>
    );
  }

  return (
    <LoadingOverlay isLoading={isLoading}>
      <FullPageCentered>
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
                isDisabled={isLoading}
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
                Sign Up
              </Button>

              <Flex justifyContent='space-between' w={['100%', '90%', '80%']}>
                <Link to='/auth/forgot-password'>
                  <Text cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
                    Forgot Password?
                  </Text>
                </Link>
                <Link to='/auth/login'>
                  <Text cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
                    Sign In
                  </Text>
                </Link>
              </Flex>
            </VStack>
          </form>
        </Container>
      </FullPageCentered>
    </LoadingOverlay>
  );
};

export default Register;
