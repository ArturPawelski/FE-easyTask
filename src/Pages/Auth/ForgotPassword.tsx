import React from 'react';
import { Flex, Container, Text, Heading, Input, Button, FormControl, FormErrorMessage } from '@chakra-ui/react';
import FullPageCentered from '../../Components/Auth/FullPageCentered';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSendResetPasswordEmail } from '../../Hooks/Auth/useSendResetPasswordEmail';

const ForgotPassword: React.FC = () => {
  const { mutate: sendResetPasswordEmail, isLoading } = useSendResetPasswordEmail();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onSubmit: SubmitHandler<{ email: string }> = ({ email }) => {
    sendResetPasswordEmail(email);
  };

  return (
    <FullPageCentered>
      <Container bg='white' p={4} rounded={20}>
        <Heading textAlign='center' fontSize='xl' fontWeight='bold' mb={4}>
          Reset Your Password
        </Heading>
        <Text textAlign='center' mb={4}>
          Enter your email address and we'll send you a link to reset your password.
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.email}>
            <Input
              disabled={isLoading}
              placeholder='Enter your email'
              id='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          <Flex mt={4} justifyContent='center'>
            <Button isDisabled={isLoading} isLoading={isLoading} w='160px' colorScheme='purple' type='submit' variant='solid'>
              Send Reset Link
            </Button>
          </Flex>
        </form>

        <Flex mt={4} justifyContent='space-between'>
          <Link to='/auth/login'>
            <Text cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
              Sign In
            </Text>
          </Link>
          <Link to='/auth/register'>
            <Text cursor='pointer' color='blue.500' _hover={{ textDecoration: 'underline' }}>
              Sign Up
            </Text>
          </Link>
        </Flex>
      </Container>
      ;
    </FullPageCentered>
  );
};

export default ForgotPassword;
